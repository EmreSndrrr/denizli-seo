"""Turn geoBoundaries TUR ADM1 (OpenStreetMap, ODbL) into the flat Türkiye map of the home page.

  python3 scripts/build-turkey-map.py <geoBoundaries-TUR-ADM1_simplified.geojson>

Writes src/data/turkey-map.json: a viewBox, one SVG path per province, the path of Denizli and its centre. Lines are thinned with
Douglas-Peucker; Denizli keeps a much finer line because the page zooms into it.
"""
import json, math, os, sys

SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'turkey-map.json')
LON0, LAT1, K = 25.6, 42.3, 1000 / (19.4 * math.cos(math.radians(39)))   # equirectangular, scaled to 1000 wide


def proj(lon, lat):
    return ((lon - LON0) * math.cos(math.radians(39)) * K, (LAT1 - lat) * K)


def rdp(pts, eps):
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = math.hypot(dx, dy) or 1e-9
    idx, dmax = 0, 0
    for i in range(1, len(pts) - 1):
        d = abs(dy * pts[i][0] - dx * pts[i][1] + x2 * y1 - y2 * x1) / norm
        if d > dmax:
            idx, dmax = i, d
    if dmax > eps:
        return rdp(pts[: idx + 1], eps)[:-1] + rdp(pts[idx:], eps)
    return [pts[0], pts[-1]]


def path(rings, eps):
    out = []
    for ring in rings:
        pts = [proj(lon, lat) for lon, lat in ring]
        # a closed ring starts where it ends: split it at the farthest point so the thinning has a line to measure against
        far = max(range(len(pts)), key=lambda i: math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1]))
        pts = rdp(pts[: far + 1], eps)[:-1] + rdp(pts[far:], eps)
        if len(pts) < 4:
            continue
        out.append('M' + 'L'.join(f'{x:.1f} {y:.1f}' for x, y in pts[:-1]) + 'Z')
    return ''.join(out)


d = json.load(open(SRC))
provinces, denizli, center, maxx, maxy = [], None, None, 0, 0
for f in d['features']:
    g = f['geometry']
    polys = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    rings = [p[0] for p in polys]                         # outer rings only
    name = f['properties']['shapeName']
    for ring in rings:
        for lon, lat in ring:
            x, y = proj(lon, lat)
            maxx, maxy = max(maxx, x), max(maxy, y)
    if name == 'Denizli':
        denizli = path(rings, 0.02)
        pts = [proj(lon, lat) for ring in rings for lon, lat in ring]
        center = [round((min(x for x, _ in pts) + max(x for x, _ in pts)) / 2, 1), round((min(y for _, y in pts) + max(y for _, y in pts)) / 2, 1)]
    else:
        provinces.append(path(rings, 1.1))
data = {'width': math.ceil(maxx + 4), 'height': math.ceil(maxy + 4), 'provinces': [p for p in provinces if p], 'denizli': denizli, 'center': center}
assert denizli, 'Denizli not found'
json.dump(data, open(OUT, 'w'), separators=(',', ':'))
print(len(provinces) + 1, 'provinces;', data['width'], 'x', data['height'], ';', round(os.path.getsize(OUT) / 1024), 'KB')
