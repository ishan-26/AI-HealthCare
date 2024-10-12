// src/components/AIDietPlanner.js
import React from 'react';
import { Button } from '@mui/material';

const AIDietPlanner = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-5">AI Diet Planner</h1>
      <p className="text-lg mb-4">Plan your diet using our AI-powered tool.</p>
      <Button
        variant="contained"
        color="primary"
        className="bg-green-600 hover:bg-green-700"
        href="https://ai-diet-planner-2.streamlit.app/"
      >
        Try Now
      </Button>
    </div>
  );
};

export default AIDietPlanner;
