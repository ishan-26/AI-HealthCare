  import React from 'react';
  import { Link } from 'react-router-dom';
  import ProfileCard from './ProfileCard';
  import ContactForm from './Contact';
  import { Button } from '@mui/material';
  import {TypeAnimation} from 'react-type-animation';
  import ParticlesBackground from "./Particles";
  const Home = () => {

    return (

          <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center relative">

<ParticlesBackground className="absolute top-0 left-0 w-full h-full -z-10" />
        {/* Hero Section */}
        <div className="text-center py-40 px-4 relative z-10">

        <h2 className="font-bold mb-6 text-4xl md:text-5xl lg:text-6xl text-white">
          AI Healthcare Solutions
        </h2>
        <h6 className="mb-12 text-lg md:text-xl max-w-2xl mx-auto">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        <TypeAnimation
              sequence={[
                'Revolutionizing healthcare with AI-powered diagnosis, diet planning and calorie tracking.',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
            />
          </span>
  </h6>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16 w-full max-w-7xl">

          {/* Card 1: AI Medical Diagnosis */}
          <div className="relative flex flex-col my-6 bg-gray-900 shadow-md border border-gray-700 rounded-2xl h-80 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="relative p-2.5 h-1/2 overflow-hidden round  ed-2xl bg-clip-border">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2045550419/display_1500/stock-vector-x-ray-medical-diagnostics-bones-skeleton-checkup-roentgen-of-chest-bone-radiology-body-scanner-2045550419.jpg" // Replace with the actual image URL
                alt="AI Medical Diagnosis"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between p-4 h-1/2">
              <div className="mb-2">
                <p className="text-gray-100 text-xl font-semibold">
                  AI Medical Diagnosis
                </p>

              </div>
              <p className="text-gray-300 leading-normal font-light mb-4">
                Get accurate medical diagnoses using AI technology.
              </p>
              <a className="rounded-md w-full bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:text-white shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      href='https://ai-medical-analysis.streamlit.app/'
                      target="_blank"
                      rel="noopener noreferrer"
                      >

                DIAGNOSE NOW
              </a>
            </div>
          </div>

          {/* Card 2: AI Diet Planner */}
          <div className="relative flex flex-col my-6 bg-gray-900 shadow-md border border-gray-700 rounded-2xl h-80 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="relative p-2.5 h-1/2 overflow-hidden rounded-2xl bg-clip-border">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2055652901/display_1500/stock-vector-diet-plan-checklist-people-doing-exercise-training-and-planning-diet-with-fruit-and-vegetable-2055652901.jpg"
                alt="AI Diet Planner"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between p-4 h-1/2">
              <div className="mb-2">
                <p className="text-gray-100 text-xl font-semibold">
                  AI Diet Planner
                </p>

              </div>
              <p className="text-gray-300 leading-normal font-light mb-4">
                Plan your diet effectively with our AI-powered tool.
              </p>
              <a className="rounded-md w-full bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:text-white shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      href='https://ai-diet-planner-2.streamlit.app/'
                      target="_blank"
                      rel="noopener noreferrer">
                PLAN NOW
              </a>
            </div>
          </div>

          {/* Card 3: AI Calorie Count */}
          <div className="relative flex flex-col my-6 bg-gray-900 shadow-md border border-gray-700 rounded-2xl h-80 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="relative p-2.5 h-1/2 overflow-hidden rounded-2xl bg-clip-border">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/1704041995/display_1500/stock-vector-calorie-count-app-on-phone-screen-over-green-salad-dish-isolated-hand-holding-smartphone-with-fat-1704041995.jpg"
                alt="AI Calorie Count"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between p-4 h-1/2">
              <div className="mb-2">
                <p className="text-gray-100 text-xl font-semibold">
                  AI Calorie Count
                </p>

              </div>
              <p className="text-gray-300 leading-normal font-light mb-4">
                Track your calories easily with our AI tool.
              </p>
              <a
    className="rounded-md w-full bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:text-white shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    href="https://calories-count-ai.streamlit.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
                COUNT NOW
              </a>
            </div>
          </div>
        </div>

      </div>

    );
  };

  export default Home;
