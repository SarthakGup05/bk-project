import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './timeline.css';

const eventsData = [
  {
    date: 'Fri, 4th October, 2024',
    title: 'Early Breakfast & Meditation',
    description: `
      Start your day with a wholesome, nutritious breakfast aimed at energizing your body and mind. Following the meal, join us for a guided meditation session where we will focus on connecting with our inner selves and the divine presence of God Father Shiva. This morning session will set a peaceful and reflective tone for the rest of the day, helping participants find clarity and calmness in their thoughts. All are welcome to join regardless of experience level, as this meditation will be designed for both beginners and seasoned practitioners.
    `,
  },
  {
    date: 'Sat, 5th October, 2024',
    title: 'Spiritual Talk 1: Spiritual Foundations for a Healthier World – BK Jayanti',
    description: `
      This day is centered around a profound spiritual talk by BK Jayanti, one of the leading voices in spiritual growth and development. Her lecture, "Spiritual Foundations for a Healthier World," will explore how cultivating inner peace and spiritual awareness can contribute to a healthier society, both mentally and physically. She will delve into practical spiritual tools and ancient wisdom that can be applied to modern life, offering insights into overcoming personal struggles and promoting collective harmony. There will also be time for questions and answers, allowing for deeper engagement with the audience.
    `,
  },
  {
    date: 'Sun, 6th October, 2024',
    title: 'Leadership for Social Transformation',
    description: `
      This plenary session brings together leaders and changemakers from various sectors to discuss the critical role of leadership in social transformation. Topics will include ethical leadership, the power of compassion in decision-making, and how spiritual practices can foster resilience in the face of challenges. This session will feature case studies of successful social movements and initiatives that have been driven by spiritually aligned leaders. Participants will leave with actionable strategies to bring positive change to their communities and organizations.
    `,
  },
  {
    date: 'Mon, 7th October, 2024',
    title: 'Cultural Program: Bhajan Sandhya by Shri Siddharth Mohan Ji',
    description: `
      The concluding event of the program is a soulful cultural evening featuring the renowned devotional singer Shri Siddharth Mohan Ji. His Bhajan Sandhya, a musical offering to the divine, will transport the audience through a journey of devotion and inner peace. The event promises to be a serene and spiritually uplifting experience, filled with melodious renditions of classic bhajans that will resonate with the heart and soul. This is a perfect way to close the event with unity and a sense of shared spiritual joy.
    `,
  },
];

const MAX_DESCRIPTION_LENGTH = 200;

const UpcomingEventsWithFilter = () => {
  const [selectedDate, setSelectedDate] = useState('Fri, 4th October, 2024');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Event Schedule</h2>
      
      {/* Flexbox Layout: Sidebar and Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar: Date Filter */}
        <div className="lg:w-1/4 flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
          <div className="bg-gray-100 rounded-lg p-4 lg:sticky lg:top-20">
            <h3 className="text-lg font-semibold mb-4">Select Date</h3>
            <div className="flex flex-col space-y-2">
              {['Fri, 4th October, 2024', 'Sat, 5th October, 2024', 'Sun, 6th October, 2024', 'Mon, 7th October, 2024'].map((date) => (
                <motion.button
                  key={date}
                  className={`px-4 py-2 rounded text-left ${
                    selectedDate === date
                      ? 'bg-[#F7B777] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-[#F7B777] hover:text-white'
                  }`}
                  onClick={() => handleDateClick(date)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {date}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content: Timeline Events */}
        <motion.div
          className="lg:w-3/4 mt-6 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eventsData
            .filter((event) => event.date === selectedDate)
            .map((event, index) => (
              <motion.div
                key={index}
                className="timeline-item mb-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-icon">{index + 1}</div>
                <div className="timeline-content">
                  <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mt-2">
                    {expandedIndex === index
                      ? event.description
                      : event.description.length > MAX_DESCRIPTION_LENGTH
                      ? `${event.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
                      : event.description}
                  </p>
                  {event.description.length > MAX_DESCRIPTION_LENGTH && (
                    <button
                      className="text-blue-500 mt-2"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedIndex === index ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingEventsWithFilter;
