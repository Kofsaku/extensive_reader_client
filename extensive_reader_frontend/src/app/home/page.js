'use client'
import React, { useState } from "react";
import SideBar from '@/components/HomePage/Sidebar.js'
import MainSection from '@/components/HomePage/MainSection.js'

const Home = () => {
  const [section, setSection] = useState(1);
  return (
    <>
      <div className="flex">
        <div className="min-w-fit">
          <SideBar
            section={section}
            setSection={setSection}
          />
        </div>
        <div className="flex-grow">
          <MainSection
            section={section}
            setSection={setSection}
          />
        </div>
      </div>
    </>
  )
}
export default Home;
