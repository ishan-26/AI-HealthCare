// src/components/AIDiagnosis.js
import React from 'react';
import { Button } from '@mui/material';

const AIDiagnosis = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-5">AI Medical Diagnosis</h1>
      <p className="text-lg mb-4">Get a medical diagnosis using our AI-powered tool.</p>
      <Button
        variant="contained"
        color="primary"
        className="bg-blue-600 hover:bg-blue-700"
        href="https://ai-medical-analysis.streamlit.app/"
      >
        Try Now
      </Button>
    </div>
  );
};

export default AIDiagnosis;
