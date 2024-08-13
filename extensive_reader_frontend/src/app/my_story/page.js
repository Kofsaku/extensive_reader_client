'use client'
import React from 'react';
import withSidebar from '@/components/withSidebar/page';
import MyStories from '@/components/HomePage/MyStories/page.js';

const MainSectionWithSidebar = withSidebar(MyStories);

const Home = () => {
  return <MainSectionWithSidebar type="my_stories" />;
};

export default Home;
