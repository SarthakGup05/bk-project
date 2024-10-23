import React from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
  const blogs = [
    {
      title: "The Path of Meditation",
      description: "Explore the timeless practice of meditation and how it can transform your life.",
      image:"assets/images/activities/christian-event-01.png",
      tags: ["Meditation", "Mindfulness", "Inner Peace"],
      fullBlogLink: '/Blogs'
    },
    {
      title: "Journey to Self-Realization",
      description: "Discover spiritual teachings that lead to a deeper understanding of the self.",
      image: "assets/images/activities/christian-event-01.png",
      tags: ["Spiritual Growth", "Awareness"],
      fullBlogLink: '/Blogs'
    },
    // Add more blog entries here
    {
        title: "Journey to Self-Realization",
        description: "Discover spiritual teachings that lead to a deeper understanding of the self.",
        image: "assets/images/activities/christian-event-01.png",
        tags: ["Spiritual Growth", "Awareness"],
        fullBlogLink:'/Blogs'
      },
  ];

  return (
    <div className="p-6">
      {/* Section Heading */}
      <div className="flex justify-center">
            <div className="text-center">
              <h3 className="section-title text-3xl font-bold center-style">
                Our Blogs
              </h3>
            </div>
          </div>
      
      {/* Blog Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            tags={blog.tags}
            fullBlogLink={blog.fullBlogLink}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
