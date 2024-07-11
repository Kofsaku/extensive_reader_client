'use client'
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import Link from "next/link";
import FeatureCards from '@/components/Dashborad/FeatureCards/page.js';
import SignupCard from '@/components/Dashborad/SignupCard/page.js';
import Footer from '@/components/Footer/page.js';

export default function Dashboard() {
  const bannerImage = "images/bannerType.png";
  const bgImage = "backgroundApp.jpeg";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [index, setIndex] = useState(0);
  const Ads = [ 
    "Adventures",
    "Characters",
    "Novels",
    "Blogs",
    "Stories",
    "Fiction",
    "Non Fiction",
    "Audiobooks",
    "Fairy Tales",
    "Biographies",
    "Screenplays",
    "Essays",
    "Mysteries",
    "Drama",
    "Comedies",
    "Fantasies"
  ];
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900 bg-[url('/images/backgroundApp.jpeg')] bg-cover bg-center">
      <header className="flex items-center justify-center px-4 py-6 drop-shadow-2xl bg-gray-800">
        <nav className="hidden md:flex md:items-center md:justify-around space-x-4 w-[90%]">
          <Link href="/">
            <div
              style={{
                fontWeight: "bold",
                color: "#ffcc01",
                fontSize: "24px",
              }}
              className="cursor-pointer"
            >
              Extensive Reading
            </div>
          </Link>
          <div
            className="transition-colors cursor-pointer font-semibold"
            onClick={() => router.push("/homepage")}
          >
            Home
          </div>
          <Link href="#">
            <div className="transition-colors cursor-pointer font-semibold">
              Features
            </div>
          </Link>
          <Link href="#">
            <div className="transition-colors cursor-pointer font-semibold">
              Template
            </div>
          </Link>
          <Link href="#">
            <div className="transition-colors cursor-pointer font-semibold">
              Pricing
            </div>
          </Link>
          <div className="transition-colors cursor-pointer font-semibold">
            Solutions
          </div>
          <div
            className="transition-colors cursor-pointer font-semibold"
            onClick={() => router.push("/manuals")}
          >
            Dashboard
          </div>
        </nav>
        {isLoggedIn ? (
          <Link
            onClick={handleLogout}
            className="transition-colors text-lg font-bold hidden md:flex"
            href="/"
          >
            Logout
          </Link>
        ) : (
          <Link
            className="transition-colors font-bold text-lg hidden md:flex"
            href="/login"
          >
            Login
          </Link>
        )}
      </header>
      <main className="flex flex-col items-center justify-center py-24 space-y-8 text-gray-300">
        <h1 className="text-6xl font-bold text-white">Extensive Reading</h1>
        <p className="text-xl">
          AI-Enhanced Writing, Character Interaction, Limitless Creativity
        </p>
        <Link href="/manuals">
          <button className="orange-text-color text-xl font-semibold whitespace-nowrap bg-gray-700 text-white max-w-[420px] justify-center items-center p-4 rounded-[70px]">
            Start for free
          </button>
        </Link>
      </main>
      <div className="col-12 lg:col-6 xl:col-7 m-auto flex w-[90%] justify-center m-10 mb-[100px]">
        <div className="w-[30%] flex flex-col justify-center">
          <div className="fixed-text">
            <span>Create Interactive</span>
          </div>
          <div className="text-[#ffcc01] font-circular font-bold text-4xl md:text-5xl mb-5">
            <TextTransition
              springConfig={{
                tension: 250,
                mass: 2,
                friction: 40,
              }}
              className=""
              translateValue="50%"
            >
              {Ads[index % Ads.length]}
            </TextTransition>
          </div>
          <div className="home-hero-text">
            <p className="static m-0 text-gray-300">
              Powered by AI 
              <br />
              Next-Gen Content Creation: AI-Enhanced Writing, Character Interaction, Limitless Creativity
            </p>
          </div>
        </div>
        <div className="w-[70%]">
          <div className="">
            <img src={bannerImage} alt="banner image" />
          </div>
        </div>
      </div>
      <div className="mb-20">
        <FeatureCards />
      </div>
      <div className="mb-20">
        <SignupCard />
      </div>
      <Footer />
    </div>
  );
}
