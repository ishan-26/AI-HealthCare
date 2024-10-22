import ProfileCard from './ProfileCard';
import ContactForm from './Contact';
import { Button } from '@mui/material';
import {TypeAnimation} from 'react-type-animation'
const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
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

          <div className="flex flex-col justify-between p-4 h-1/2">
            <div className="mb-2">
              <p className="text-gray-100 text-xl font-semibold">
                AI Medical Diagnosis
              </p>

            </div>
          <div className="flex flex-col justify-between p-4 h-1/2">
            <div className="mb-2">
              <p className="text-gray-100 text-xl font-semibold">
                AI Diet Planner
              </p>

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

