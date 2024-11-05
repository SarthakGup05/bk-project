import React from 'react';

const BlogBanner = ({ title }) => {
  return (
    <div
      className="blog-banner relative h-96 bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/images/activities/hindu-activities-01.png)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
    
      </div>
    </div>
  );
};

export default BlogBanner;
