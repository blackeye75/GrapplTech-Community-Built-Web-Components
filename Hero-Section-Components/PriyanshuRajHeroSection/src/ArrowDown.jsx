import React from 'react';
import { motion } from 'framer-motion';

const ArrowDown = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <motion.div
        className="text-blue-500"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default ArrowDown;