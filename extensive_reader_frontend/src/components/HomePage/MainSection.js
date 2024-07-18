import React from 'react';
import Footer from '../Footer/page';
import FeatureCards from '@/components/Dashborad/FeatureCards/page.js';

const MainSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 bg-cover bg-center" style={{ backgroundImage: "url('images/bgHome.png')" }}>
        <h1 className="text-4xl text-white font-bold mb-4">Hello Umar</h1>
        
        <button className="bg-gradient-to-r from-purple-400 to-blue-400 py-2 px-4 rounded-lg text-white font-semibold mb-4">
          CREATE WITH AI
        </button>
        
        <button className="bg-purple-200 py-2 px-4 rounded-lg text-purple-700 font-semibold mb-8">
          Click here to get started!
        </button>
        
        <div className="flex space-x-6 mb-8">
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M12 16h.01M9 12v1.5m3-1.5v1.5m3-1.5v1.5m3 6H9m3 0v-2m3 2v-2m3 2v-2m3 2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h7.5" />
            </svg>
            <span className="text-white">Getting Started</span>
          </div>
          
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
            </svg>
            <span className="text-white">Tutorial</span>
          </div>
          
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4-4 4 4M8 13l4-4 4 4" />
            </svg>
            <span className="text-white">What's New</span>
          </div>
          
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
            </svg>
            <span className="text-white">Upgrade</span>
          </div>
        </div>
        
        <div className="bg-purple-200 py-2 px-4 rounded-lg text-purple-700 font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
          Introducing Storynest V7
          <span className="bg-red-500 text-white text-xs ml-2 px-2 py-1 rounded-full">NEW</span>
        </div>
      </div>
      {/* <div className="mb-20">
        <FeatureCards />
      </div> */}
      <div className='text-white'>
        <Footer />
      </div>
    </>
  );
};

export default MainSection;
