const blogImages = [
    "/lovable-uploads/wedding.jpeg",
    "/lovable-uploads/Crews to the Coast.png",
    "/lovable-uploads/pulsecheck image.png",
    "/lovable-uploads/Working late.png",
    "/lovable-uploads/louisverse.png",
    "/lovable-uploads/Larry the cat.png",
  ];
  
  const BlogCallout = () => {
    return (
      <div className="bg-[#121212] text-white py-36 px-4 sm:px-10 mt- 1 text-center section-reveal overflow-hidden shadow-md">
        {/* Carousel */}
        <div className="overflow-hidden relative mb-10">
          <div className="flex animate-scroll gap-6">
            {blogImages.concat(blogImages).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Blog image ${index + 1}`}
                className="w-48 h-32 object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
        </div>
  
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Curious what I’m working on?
        </h2>
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-6">
          Explore my blog for project breakdowns, thoughts on process, and behind-the-scenes experiments.
        </p>
        <a
          href="/blog"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
        >
          Read the blog →
        </a>
      </div>
    );
  };
  
  export default BlogCallout;
  