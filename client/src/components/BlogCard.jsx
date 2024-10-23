import React from 'react';

const BlogCard = ({ title, description, image, tags, fullBlogLink }) => {
  return (
    <>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2 max-w-sm mx-auto my-2">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        
        {/* Description with Read More Link */}
        <p className="text-gray-600 mb-6">
          {description}
          <a href={fullBlogLink} className="text-[#F7B777] hover:text-yellow-600 ml-2 underline">
            Read More
          </a>
        </p>
        
        {/* Tags */}
        <div className="mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-[#F7B777] text-white text-sm px-3 py-1 rounded-full mr-3 mb-3"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default BlogCard;
