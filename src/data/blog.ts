// What the blog listing pages share: the posts newest first, the topics in use and the page size.
import { getCollection } from 'astro:content';
import { SERVICES } from './services';

export const POSTS_PER_PAGE = 24;

export async function loadBlog() {
  const posts = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const topics = SERVICES.filter((s) => posts.some((p) => p.data.service === s.slug));
  const pages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const pageOf = (n: number) => posts.slice((n - 1) * POSTS_PER_PAGE, n * POSTS_PER_PAGE);
  return { posts, topics, pages, pageOf };
}
