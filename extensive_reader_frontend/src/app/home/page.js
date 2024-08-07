'use client'
import React, { useState } from "react";
import SideBar from '@/components/HomePage/Sidebar.js'
import MainSection from '@/components/HomePage/MainSection.js'

const Home = () => {
  const [section, setSection] = useState(1);
  const [story, setStory] = useState('');
  return (
    <>
      <div className="flex">
        <div className="min-w-fit">
          <SideBar
            section={section}
            setSection={setSection}
            setStory={setStory}
          />
        </div>
        <div className="flex-grow">
          <MainSection
            section={section}
            setSection={setSection}
            story={story}
          />
        </div>
      </div>
    </>
  )
}
export default Home;
