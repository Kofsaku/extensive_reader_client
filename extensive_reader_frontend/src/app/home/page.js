'use client'
import React from "react";
import SideBar from '@/components/HomePage/Sidebar.js'
import MainSection from '@/components/HomePage/MainSection.js'

const Home = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-grow">
          <MainSection />
        </div>
      </div>
    </>
  )
}
export default Home;
