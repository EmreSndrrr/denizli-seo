import type { APIRoute } from 'astro';

// Every crawler is welcome. Search and answer-engine bots are named so the intent is on record:
// the site's job is to be found, including by AI search (OAI-SearchBot, Claude-SearchBot, PerplexityBot).
// Training-only bots (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended) are allowed too: the content is public marketing copy.
const SEARCH_BOTS = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'Applebot'];
const TRAINING_BOTS = ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot'];

export const GET: APIRoute = ({ site }) => {
  const group = (bots: string[]) => bots.map((b) => `User-agent: ${b}`).join('\n') + '\nAllow: /\n';
  const body = [
    '# denizliseo.com: all pages are public and meant to be found.',
    'User-agent: *\nAllow: /\n',
    '# Search and AI answer engines',
    group(SEARCH_BOTS),
    '# AI model training crawlers',
    group(TRAINING_BOTS),
    `Sitemap: ${new URL('sitemap-index.xml', site).href}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
