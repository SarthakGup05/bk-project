import React from 'react';
import BlogBanner from '../components/BlogBanner';
import BlogContent from '../components/BlogContent';
import SimilarBlogs from '../components/SimilarBlogs';

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <BlogBanner title="Blog Title" />
      <BlogContent />
      <SimilarBlogs />
    </div>
  );
};

export default BlogPage;
