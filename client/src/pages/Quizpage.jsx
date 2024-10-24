import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import QuizComponent from '../components/QuizComponent';

// Quiz Component (Placeholder)

const Quizpage = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartClick = () => {
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-orange-300">
      {!quizStarted ? (
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Typography
            variant="h5"
            component="h2"
            className="text-center text-orange-600 font-bold mb-6 line-clamp-2 pb-3"
          >
            Avyakt Murli Adhyayan Project (AMAP)
          </Typography>

          <Box
            sx={{
              padding: '30px',
              backgroundColor: '#F7B777',
              borderRadius: '8px',
              marginBottom: '30px',
              textAlign: 'center',
            }}
          >
            <Typography variant="body1" sx={{ color: '#fff', marginBottom: '12px' }}>
              कृपया परीक्षा देते समय अन्य स्क्रीन या एप्लिकेशन पर न जाएं। अन्यथा आप लोग आउट हो
              जाएंगे और परीक्षा दोबारा नहीं दे पाएंगे।
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              Please do not navigate to other screens or applications while taking the exams, otherwise
              you will be logged out and will not be able to retake the exam.
            </Typography>
          </Box>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Button
              onClick={handleStartClick}
              variant="contained"
              sx={{
                backgroundColor: '#F7B777',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#D68733' },
                borderRadius: '8px',
                padding: '12px 24px',
              }}
            >
              Start
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        <QuizComponent />
      )}

      {/* Footer */}
      {!quizStarted && (
        <div className="mt-10">
          <Typography variant="caption" color="textSecondary" align="center">
            Copyright © 2024 angelofshiva.in | Powered by AoS Team
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Quizpage;
