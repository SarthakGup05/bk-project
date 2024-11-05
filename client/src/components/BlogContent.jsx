import React from 'react';

const BlogContent = () => {
  // Replace this with your actual blog publication date
  const publicationDate = 'November 5, 2024';

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Blog Post Title</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          This is the static blog content. Describe the blog topic here with engaging language to draw in the reader.
        </p>

        {/* <img src="url-to-your-image.jpg" alt="Blog related" className="my-8 w-full h-auto rounded-lg shadow-md" /> */}
        
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
          Continue the blog content here. Include different elements like images, videos, and links to make it engaging.
        </p>

        {/* Publication Date */}
        <div className="flex justify-end mt-8">
          <p className="text-gray-500 italic text-sm">Published on {publicationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
