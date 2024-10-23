import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa'; // Web Stories icon
import { IoClose } from 'react-icons/io5'; // Close icon for modal

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal open/close
  const [stories, setStories] = useState([]); // State to store fetched stories
  const [currentDate] = useState(new Date().toISOString().slice(0, 10)); // Get today's date

  // Fetch daily stories from an API or JSON file
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('/api/daily-stories'); // Replace with your API endpoint or local JSON path
        const data = await response.json();
        const dailyStories = data.filter(story => story.date === currentDate); // Filter stories for today
        setStories(dailyStories);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };
    fetchStories();
  }, [currentDate]);

  // Inject AMP script for Web Stories when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const script = document.createElement('script');
      script.src = 'https://cdn.ampproject.org/amp-story-player-v0.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isModalOpen]);

  return (
    <div className="blog-page-container">
      {/* Blog Banner */}
      <div className="blog-banner relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/activities/hindu-activities-01.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Blog Title</h1>
        </div>
        {/* Web Stories icon to open modal */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on click
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-200"
          >
            <FaPlay className="text-black text-2xl" />
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Blog Post Title</h2>
          <p className="text-gray-700 leading-relaxed">
            This is the static blog content. You can describe the topic of your blog post here, add some images, quotes, or other media
            to make it more interactive. Later, you'll fetch this content from a MySQL database.
          </p>
          <img src="url-to-your-image.jpg" alt="Blog related" className="my-8 w-full h-auto rounded-md" />
          <p className="text-gray-700 leading-relaxed">
            Continue the blog content here. This section can contain multiple paragraphs, images, and other elements like videos,
            tables, or links to make the post more engaging.
          </p>
        </div>
      </div>

       {/* Similar Blogs */}
       <div className="similar-blogs bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">Similar Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="blog-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:-translate-y-2">
              <img src="/assets/images/activities/hindu-activities-01.png" alt="Similar Blog 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Similar Blog 1</h4>
                <p className="text-gray-600">A short description or excerpt from the similar blog post to give readers an idea of what it's about.</p>
              </div>
            </div>
            <div className="blog-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:-translate-y-2">
              <img src="/assets/images/activities/hindu-activities-01.png" alt="Similar Blog 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Similar Blog 2</h4>
                <p className="text-gray-600">Another excerpt from a similar blog post, describing the content and attracting readers to click.</p>
              </div>
            </div>
            <div className="blog-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:-translate-y-2">
              <img src="/assets/images/activities/hindu-activities-01.png" alt="Similar Blog 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Similar Blog 3</h4>
                <p className="text-gray-600">A short description or teaser for this similar blog post to encourage readers to explore further.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Modal for Web Stories */}
      {isModalOpen && stories.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          {/* Web Stories player */}
          <div className="relative w-full h-full max-w-2xl max-h-4xl mx-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <amp-story-player style="width: 100%; height: 100%;" layout="responsive">
                    ${stories
                      .map(
                        (story) => `
                      <a href="${story.story_url}" title="${story.title}">
                        ${story.title}
                      </a>
                    `
                      )
                      .join('')}
                  </amp-story-player>
                `,
              }}
            />
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)} // Close modal on click
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}

      {/* If no stories are available for today */}
      {isModalOpen && stories.length === 0 && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center text-white">
          <p>No stories available for today.</p>
          <button
            onClick={() => setIsModalOpen(false)} // Close modal on click
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <IoClose />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
