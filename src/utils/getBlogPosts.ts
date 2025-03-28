import fm from 'front-matter';
import { marked } from 'marked';

export const getBlogPosts = () => {
  const files = import.meta.glob('/src/content/blog/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  });
  
  return Object.entries(files).map(([filePath, rawContent]) => {
    const { attributes, body } = fm(rawContent as string);

    return {
      slug: filePath.split('/').pop()?.replace('.md', ''),
      ...(attributes as {
        title: string;
        excerpt: string;
        date: string;
        image: string;
        category: string;
      }),
      content: marked(body) // 👈 convert markdown to HTML here
    };
  });
};
