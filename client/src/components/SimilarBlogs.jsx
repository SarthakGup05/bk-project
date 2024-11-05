import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'; // Importing Chevron icons
import BlogCard from './BlogCard';

const RecentBlogs = () => {
  const recentBlogs = [
    { id: 1, title: 'Recent Blog 1', description: 'A brief excerpt for this recent blog.', image: '/assets/images/activities/hindu-activities-01.png' },
    { id: 2, title: 'Recent Blog 2', description: 'A short teaser for this recent blog post.', image: '/assets/images/activities/hindu-activities-01.png' },
    { id: 3, title: 'Recent Blog 3', description: 'Another short description here.', image: '/assets/images/activities/hindu-activities-01.png' },
    { id: 4, title: 'Recent Blog 4', description: 'A brief excerpt or description.', image: '/assets/images/activities/hindu-activities-01.png' },
    { id: 5, title: 'Recent Blog 5', description: 'Another brief introduction for a recent blog.', image: '/assets/images/activities/hindu-activities-01.png' },
    { id: 6, title: 'Recent Blog 6', description: 'A short teaser for this blog post.', image: '/assets/images/activities/hindu-activities-01.png' },
    // Add more blog data as needed
  ];

  const blogsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(recentBlogs.length / blogsPerPage);
  const displayedBlogs = recentBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="recent-blogs bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8">Recent Blogs</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedBlogs.map(blog => (
            <BlogCard 
              key={blog.id} 
              title={blog.title} 
              description={blog.description} 
              image={blog.image} 
              tags={['Recent', 'Highlights']}
              fullBlogLink={`/blog/${blog.id}`}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {/* Left Arrow for Previous Page */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-3 rounded-full transition-all duration-300 ease-in-out ${
              currentPage === 1
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-[#F7B777] text-white hover:bg-yellow-600 shadow-md'
            }`}
          >
            <BiChevronLeft className="text-xl" />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages).keys()].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={`px-3 py-2 rounded-full transition-all duration-300 ease-in-out ${
                  currentPage === pageNumber
                    ? 'bg-[#F7B777] text-white font-bold shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Right Arrow for Next Page */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-full transition-all duration-300 ease-in-out ${
              currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-[#F7B777] text-white hover:bg-yellow-600 shadow-md'
            }`}
          >
            <BiChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
