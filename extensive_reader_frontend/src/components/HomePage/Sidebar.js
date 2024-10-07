import React, { useEffect, useState } from 'react';
import GenerateStory from '@/components/HomePage/HomeContainer/GenerateStory/GenerateStoryModal.js';
import Modal from 'react-modal';
import Link from "next/link";
import axios from "axios";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '500px',
    padding: '0px',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const Sidebar = ({}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  
  const getUserData = async () => {
    try {
      const jwtToken =
        localStorage.getItem("authToken") || Cookies.get("authToken");

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, // Include JWT in the Authorization header
            "Content-Type": "application/json", // Specify the content type
          },
        }
      );
      if (response.data) {
        return (response.data);
      }
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }
  
  const fetchUserData = async () => {
    setLoading(true); // Start loading
    const data = await getUserData(); // Await the result of getUserData
    setUserData(data); // Update state with the fetched user data
    setLoading(false); // Stop loading
  };
  
  useEffect(() => {
    fetchUserData(); // Call the async function
  }, []);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <GenerateStory
          closeModal={closeModal}
          getUserData={getUserData}
        />
      </Modal>
      <div className="flex flex-col h-full min-h-screen w-64 bg-gray-800 text-white p-4 sticky top-0">
        <div className="flex items-center justify-between mb-6">
          <Link
            className="text-xl font-bold"
            href="/" 
          >
            Extensive Reading
          </Link>
        </div>

        <button
          className="bg-gradient-to-r from-purple-400 to-blue-400 py-2 px-4 rounded-lg text-white font-semibold mb-6"
          onClick={openModal}
        >
          CREATE WITH AI
        </button>

        <nav className="mb-6">
          <ul>
            <Link
              className="flex items-center mb-4 cursor-pointer"
              href="/home" 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l3-3m0 0l3 3m-3-3v12"
                />
              </svg>
              Home
            </Link>
            <Link
              className="flex items-center mb-4 cursor-pointer"
              href="/my_story"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h14M3 12h10m7 8h.01"
                />
              </svg>
              My Stories
            </Link>
            <Link
              className="flex items-center mb-4 cursor-pointer"
              href="/favourite_stories"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h14M3 12h10m7 8h.01"
                />
              </svg>
              Favourite Stories
            </Link>
            <Link
              className="flex items-center mb-4 cursor-pointer"
              href="/public_stories"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h14M3 12h10m7 8h.01"
                />
              </svg>
              Public Stories
            </Link>
            <Link
              className="flex items-center mb-4 cursor-pointer"
              href="/payments"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h14M3 12h10m7 8h.01"
                />
              </svg>
              Payment Plan
            </Link>
          </ul>
        </nav>

        <button className="bg-yellow-500 py-2 px-4 rounded-lg text-black font-semibold mb-6">
          UPGRADE
        </button>

        <nav>
          <ul>
            <li className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 10h3M21 10v3M18 13h3M18 17h.01M16 17h.01M14 17h.01M12 17h.01M10 17h.01M8 17h.01M6 17h.01M4 17h.01M2 17h.01M21 7h-7M21 11h-7M21 3h-7M14 7h-7M14 11h-7M14 3h-7M7 7H2M7 11H2M7 3H2"
                />
              </svg>
              Join our Discord
            </li>
            <li className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5h6M4 8h16M4 12h16m-7 4h1"
                />
              </svg>
              Help
            </li>
            <li className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-1h1v1zm0 3h-1v-1h1v1zm0-9h-1v1h1v-1zm0 3h-1v1h1v-1zm-4 6h1v-1h-1v1zm0-3h1v-1h-1v1zm0-3h1v-1h-1v1zm0-3h1v-1h-1v1zm0 6h1v-1h-1v1zm4-9h-1v1h1V6zm0 3h-1v1h1V9zm0 3h-1v1h1v-1zm0 3h-1v1h1v-1z"
                />
              </svg>
               {userData && userData.dailyStoryCreated} Daily Story count
            </li>
          </ul>
        </nav>

        <div className="mt-auto flex items-center">
          <div className="w-10 h-10 bg-gray-600 rounded-full mr-2"></div>
          <div>
            <p className="font-semibold">{userData && userData.name}</p>
            <span className="text-yellow-500">{userData && userData.plan}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
