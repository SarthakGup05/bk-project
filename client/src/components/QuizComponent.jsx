import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { motion } from 'framer-motion';

// Function to calculate dynamic height and width
const useDynamicSize = () => {
  const [size, setSize] = useState({ width: '100%', height: '500px' }); // Default size

  const calculateSize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let height = '500px'; // Default height
    let width = '100%'; // Default width

    if (windowWidth < 640) {
      // Small screens (mobile)
      height = '620px';
    } else if (windowWidth >= 640 && windowWidth < 1024) {
      // Medium screens (tablets)
      height = '500px';
    } else {
      // Large screens (desktops)
      height = '600px';
    }

    setSize({ width, height });
  };

  useEffect(() => {
    // Call the function initially
    calculateSize();

    // Update the size when the window is resized
    window.addEventListener('resize', calculateSize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', calculateSize);
  }, []);

  return size;
};

const QuizComponent = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question index

  // Dynamically calculate the size
  const { width, height } = useDynamicSize();

  const questions = [
    {
      question: "सबसे पहला वरदान क्या है जो सभी को बाप से मिलता है?",
      options: ["ज्ञान का वरदान", "वाणी की शक्ति", "बाप द्वारा अपनाया जाना", "संकल्प शक्ति"],
    },
    {
      question: "सच्ची खुशी कहाँ से आती है?",
      options: ["संपत्ति से", "संतोष से", "सफलता से", "शांति से"],
    },
    {
      question: "सच्चा सुख किसे कहा जाता है?",
      options: ["मन की शांति", "धन की प्राप्ति", "मान-सम्मान की प्राप्ति", "ईश्वर की अनुभूति"],
    },
    {
      question: "ईश्वर की पहचान किस प्रकार होती है?",
      options: ["ज्ञान द्वारा", "ध्यान द्वारा", "प्रेम द्वारा", "सेवा द्वारा"],
    },
  ];

  // Handle changing answers
  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  // Navigate to the next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(''); // Reset selected answer for the new question
    }
  };

  // Navigate to the previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(''); // Reset selected answer for the new question
    }
  };

  // Navigate directly by clicking the question number
  const handleNavigationClick = (index) => {
    setCurrentQuestion(index);
    setSelectedAnswer(''); // Reset selected answer for the new question
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-300 p-4 md:p-6 lg:p-8">
      <div
        className="w-full bg-white shadow-lg rounded-lg p-4 md:p-6 lg:p-8"
        style={{
          width, // Dynamic width
          height, // Dynamic height
        }}
      >
        {/* Navigation for Questions */}
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-5 md:grid-cols-10 mb-4 bg-gray-100 p-2 rounded-md">
          {Array.from({ length: questions.length }, (_, i) => (
            <div
              key={i}
              onClick={() => handleNavigationClick(i)} // Clickable question navigation
              className={`cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${
                i === currentQuestion ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Timer and Question Count */}
        <div className="flex justify-between items-center bg-orange-100 p-2 rounded-md mb-4">
          <Typography variant="body1" className="text-gray-700">
            Time: 09:47
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            {currentQuestion + 1} / {questions.length}
          </Typography>
        </div>

        {/* Current Question */}
        <Typography
          variant="h6"
          className="mb-4 text-gray-800 text-base sm:text-lg md:text-xl"
          style={{ minHeight: '50px', maxHeight: '100px', overflowY: 'auto' }} // consistent question height
        >
          {questions[currentQuestion].question}
        </Typography>

        {/* Options */}
        <RadioGroup value={selectedAnswer} onChange={handleOptionChange}>
          {questions[currentQuestion].options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
              className="border-2 border-gray-300 rounded-lg mb-2 p-2 bg-gray-50 hover:bg-gray-100 text-sm sm:text-base"
              style={{ minHeight: '50px', maxHeight: '60px' }} // consistent option height
            />
          ))}
        </RadioGroup>

        {/* Buttons: Previous and Next */}
        <Box className="flex justify-between mt-4">
          {currentQuestion > 0 && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                onClick={handlePrevious}
                sx={{
                  backgroundColor: '#D68733',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '10px 30px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#B66929' },
                }}
              >
                Previous
              </Button>
            </motion.div>
          )}

          {currentQuestion < questions.length - 1 && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  backgroundColor: '#D68733',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '10px 30px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#B66929' },
                }}
              >
                Next
              </Button>
            </motion.div>
          )}
        </Box>
      </div>
    </div>
  );
};

export default QuizComponent;
