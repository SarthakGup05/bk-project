import React from 'react';
import { Link } from 'react-router-dom';

const AmPage = () => {
  // Sample data for blog posts (replace with real data later)
  const amItems = [
    {
      id: 1,
      title: 'AMAP Bhaktis - 1330hrs',
      fullName: 'Dr. Divya Anubhav',
      username: 'divya.anubhav',
      profile_img: 'assets/images/profile1.png',
      publishedAt: '2024-10-21',
      des: 'Day 5: Realization about silent chant.',
      tags: ['Spirituality'],
      total_likes: 120,
      banner: 'assets/images/banner1.png',
    },
    {
      id: 2,
      title: 'AMAP Bhaktis - 1100hrs',
      fullName: 'Dr. Shyam Kumar',
      username: 'shyam.kumar',
      profile_img: 'assets/images/profile2.png',
      publishedAt: '2024-10-20',
      des: 'Exploring deeper meditative states.',
      tags: ['Meditation'],
      total_likes: 85,
      banner: 'assets/images/banner2.png',
    },
  ];

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Daily Bhakti Sessions</h2>
          <p className="text-gray-600 mt-2">
            Explore the daily bhakti sessions featuring spiritual insights and meditative discourses.
          </p>
        </div>

        {/* AMAP Bhakti Items in List Format */}
        <ul className="space-y-8">
          {amItems.map((item) => (
            <li key={item.id}>
              <Link
                to={`/blog/${item.id}`}
                className="flex gap-4 items-start border border-gray-300 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white p-4"
              >
                {/* Square Banner Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.banner}
                    alt={`${item.title} banner`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    {/* <div className="flex gap-2 items-center mb-2">
                      <img
                        src={item.profile_img}
                        alt="author"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">
                          {item.fullName}{' '}
                          <span className="text-gray-500">@{item.username}</span>
                        </p>
                        <p className="text-sm text-gray-500">{formatDate(item.publishedAt)}</p>
                      </div>
                    </div> */}

                    <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
                    <p className="text-sm text-gray-700 line-clamp-2 mt-1">{item.des}</p>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-500 font-medium bg-gray-200 py-1 px-3 rounded-full">
                      {item.tags[0]}
                    </span>
                    {/* Optional: Add total likes here */}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default AmPage;
