// src/components/AICalorieCount.js
import React from 'react';
import { Button } from '@mui/material';

const AICalorieCount = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-5">AI Calorie Count</h1>
      <p className="text-lg mb-4">Track your calories using our AI-powered tool.</p>
      <Button
        variant="contained"
        color="primary"
        className="bg-red-600 hover:bg-red-700"
        href="https://calories-count-ai.streamlit.app/"
      >
        Try Now
      </Button>
    </div>
  );
};

export default AICalorieCount;
