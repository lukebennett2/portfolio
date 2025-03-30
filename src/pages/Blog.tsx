import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getBlogPosts } from '@/utils/getBlogPosts';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getBlogPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  const handleBackToList = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const displayedPosts = filteredPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {selectedPost ? (
            <div className="max-w-3xl mx-auto">
              <Button
                onClick={handleBackToList}
                variant="ghost"
                className="mb-6 flex items-center text-dark/70 hover:text-dark"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to articles
              </Button>

              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{selectedPost.title}</h1>
              <div className="flex items-center mb-8">
                <span className="text-sm text-dark/70">{selectedPost.date}</span>
                <span className="mx-2 text-dark/30">•</span>
                <span className="text-sm font-medium px-2 py-1 bg-dark/5 rounded-full">{selectedPost.category}</span>
              </div>

              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-8">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              </div>
            </div>
          ) : (
            <>
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get to Know Me</h1>
                <p className="text-lg text-dark/80">
                  A collection of thoughts, insights, and explorations about my approach to work, discovery, and curiosity. Updated semi-regularly.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-lg mx-auto mb-8">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-dark/10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/20 text-dark placeholder:text-dark/50"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition-all
                      ${selectedCategory === category
                        ? 'bg-black text-white'
                        : 'bg-dark/10 text-dark hover:bg-dark/20'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Filtered Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => {
                      setSelectedPost(post);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="aspect-video w-full">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-sm text-dark/70">{post.date}</span>
                        <span className="mx-2 text-dark/30">•</span>
                        <span className="text-sm font-medium px-2 py-1 bg-dark/5 rounded-full">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 font-display">{post.title}</h3>
                      <p className="text-dark/80 mb-4">{post.excerpt}</p>
                      <span className="text-sm font-medium text-dark inline-flex items-center">
                        Read more
                        <svg
                          className="w-3 h-3 ml-1"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6H11M11 6L6 1M11 6L6 11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
