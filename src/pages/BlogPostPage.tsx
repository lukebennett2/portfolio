// src/pages/BlogPostPage.tsx
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { getBlogPosts } from '@/utils/getBlogPosts'; // ✅ Make sure this path is correct

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getBlogPosts();
      const found = posts.find((p) => p.slug === slug);
      setPost(found);
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div className="pt-28 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <div className="pt-28 pb-20 container mx-auto px-4 sm:px-6 max-w-3xl">
        <h1 className="text-4xl font-display font-bold mb-6">{post.title}</h1>
        <div className="text-sm text-dark/70 mb-8">{post.date}</div>
        <div className="prose prose-lg prose-headings:font-display prose-a:text-[#5D7AFF] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl text-dark/90 max-w-none">
  <div dangerouslySetInnerHTML={{ __html: post.content }} />
</div>
      </div>

      <div className="mt-20 pt-10 border-t border-dark/10">
  <h2 className="text-xl font-display font-semibold mb-4 text-dark">Related Project</h2>
  <a
    href={`/projects/${post.slug}`}
    className="inline-block text-indigo-600 hover:underline text-base font-medium"
  >
    View the project →
  </a>
</div>


      <Footer />
    </div>
  );
};

export default BlogPostPage;
