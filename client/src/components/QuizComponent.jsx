import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { motion } from 'framer-motion';
 

const useDynamicSize = () => {
  const [size, setSize] = useState({ width: '100%', height: '500px' });

  const calculateSize = () => {
    const windowWidth = window.innerWidth;
    let height = '500px';

    if (windowWidth < 640) height = '620px';
    else if (windowWidth >= 640 && windowWidth < 1024) height = '500px';
    else height = '600px';

    setSize({ width: '100%', height });
  };

  useEffect(() => {
    calculateSize();
    window.addEventListener('resize', calculateSize);
    return () => window.removeEventListener('resize', calculateSize);
  }, []);

  return size;
};

const QuizComponent = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false); // Track quiz completion

  const { width, height } = useDynamicSize();

  const questions = [
    { question: "Question 1?", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    { question: "Question 2?", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    { question: "Question 3?", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    { question: "Question 4?", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
  ];

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setIsQuizComplete(true); // Mark quiz as complete on last question
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 to-orange-300 p-4 md:p-6 lg:p-8">
      <div
        className="w-full bg-white shadow-lg rounded-lg p-4 md:p-6 lg:p-8"
        style={{ width, height }}
      >
        {isQuizComplete ? (
          // Render the CertificateDownload component when quiz is completed
          <CertificateDownload/>
        ) : (
          <>
            {/* Navigation and quiz questions (design untouched) */}
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-5 md:grid-cols-10 mb-4 bg-gray-100 p-2 rounded-md">
              {Array.from({ length: questions.length }, (_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentQuestion(i)}
                  className={`cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${
                    i === currentQuestion ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <Typography variant="h6" className="mb-4 text-gray-800">
              {questions[currentQuestion].question}
            </Typography>

            <RadioGroup value={selectedAnswer} onChange={handleOptionChange}>
              {questions[currentQuestion].options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                  className="border-2 border-gray-300 rounded-lg mb-2 p-2 bg-gray-50 hover:bg-gray-100"
                />
              ))}
            </RadioGroup>

            <Box className="flex justify-between mt-4">
              {currentQuestion > 0 && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    onClick={handlePrevious}
                    sx={{ backgroundColor: '#D68733', color: '#fff', fontWeight: 'bold' }}
                  >
                    Previous
                  </Button>
                </motion.div>
              )}
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ backgroundColor: '#D68733', color: '#fff', fontWeight: 'bold' }}
                >
                  {currentQuestion < questions.length - 1 ? 'Next' : 'Complete Quiz'}
                </Button>
              </motion.div>
            </Box>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
