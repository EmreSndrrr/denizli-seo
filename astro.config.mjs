// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://denizliseo.com';

// lastmod only where it is true: blog posts carry their own `updated` or `date`.
const blogDir = new URL('./src/content/blog/', import.meta.url);
const lastmod = new Map(
  readdirSync(blogDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const head = readFileSync(new URL(f, blogDir), 'utf8').split('---')[1] ?? '';
      /** @param {string} key */
      const pick = (key) => head.match(new RegExp(`^${key}:\\s*(\\S+)`, 'm'))?.[1];
      const stamp = pick('updated') ?? pick('date');
      if (!stamp) throw new Error(`${f}: no date in the front matter`);
      return /** @type {[string, Date]} */ ([`${SITE}/blog/${f.replace(/\.md$/, '')}/`, new Date(stamp)]);
    }),
);

/** @param {string} url */
const priority = (url) => {
  const path = url.replace(SITE, '');
  if (path === '/') return 1;
  if (/^\/(hizmetler|yerel-seo|teknik-seo|icerik-seo|backlink-hizmeti|web-tasarim)\/$/.test(path)) return 0.9;
  if (path.startsWith('/blog/') && path !== '/blog/') return 0.6;
  return 0.7;
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      serialize: (item) => ({ ...item, priority: priority(item.url), lastmod: lastmod.get(item.url)?.toISOString() }),
    }),
  ],
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'auto' },
});
