'use client'
import React from 'react';
import withSidebar from '@/components/withSidebar/page'; 
import MyStories from '@/components/HomePage/MyStories/page.js';

const MainSectionWithSidebar = withSidebar(MyStories);

const PublicStories = () => {
  return <MainSectionWithSidebar type="public" />;
};

export default PublicStories;
