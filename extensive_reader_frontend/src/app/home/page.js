'use client'
import React from 'react';
import withSidebar from '@/components/withSidebar/page'; // Import the HOC
import MainSection from '@/components/HomePage/MainSection.js'; // Import MainSection

// Wrap MainSection with the HOC
const MainSectionWithSidebar = withSidebar(MainSection);

const Home = () => {
  return <MainSectionWithSidebar />;
};

export default Home;
