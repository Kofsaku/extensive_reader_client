import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const GenerateStory = ({getUserData, closeModal, setReload}) => {
  const router = useRouter();
  const [language, setLanguage] = useState('English');
  const [genre, setGenre] = useState('Action');
  const [readerAge, setReaderAge] = useState('13-17');
  const [difficulty, setDifficulty] = useState('kindergarten');
  const [storyIdeas, setStoryIdeas] = useState('');
  const [words, setWords] = useState('500');
  const [loading, setIsloading] = useState(false)
  

  const getStoryChatGPT = async (storyData) => {
    const user = await getUserData();
    
    // Start loading indicator
    setIsloading(true); 
  
    switch (user.plan) {
      case 'Free Plan':
        if (user.dailyStoryCreated >= 3) {
          toast.error('Daily limit reached for Free Plan');
          setIsloading(false);
          closeModal();
          return; // Exit the function after closing the modal
        }
        break; // Continue to the API call
  
      case 'Standard Plan':
        if (user.dailyStoryCreated >= 10) {
          toast.error('Daily limit reached for Standard Plan');
          setIsloading(false);
          closeModal();
          return; // Exit the function after closing the modal
        }
        break; // Continue to the API call
  
      case 'Pro Plan':
        // No limit for Pro Plan
        break;
  
      default:
        toast.error('User plan is not recognized');
        setIsloading(false);
        closeModal();
        return; // Exit the function after closing the modal
    }

    try {
      const loadingToastId = toast.loading("Creating Story....");
      const res = await axios.post('/api/chatgpt', { prompt: storyData });
      debugger
      console.log("Response ID:", res.data.id);
      toast.update(loadingToastId, { render: "Story Created!", type: "success", isLoading: false, autoClose: 5000 });
      // Redirect to the created story page
      // router.replace(`/story?id=${res.data.id}`);
      window.location.assign(`/story?id=${res.data.id}`)
    } catch (error) {
      console.error("Error creating story:", error);
      toast.update(loadingToastId, { render: "Failed to create story. Please try again.", type: "error", isLoading: false, autoClose: 5000 });
    } finally {
      toast.dismiss(loadingToastId)
      setIsloading(false); // Ensure loading is stopped
      closeModal(); // Close the modal after processing
    }
  };
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const storyData = {
      language,
      genre,
      readerAge,
      difficulty,
      storyIdeas,
      words
    };
    console.log('Generated Story Data:', storyData);
    try {
      setIsloading(true)
      getStoryChatGPT(storyData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      {loading &&
        <div className='absolute top-10 left-[250px]'>
          <img src="images/LoaderAnimation.gif" alt="Your GIF" />
        </div>  
      }
      <div className="w-full text-white flex flex-col items-center justify-center">
        <div className="w-full bg-gray-800 p-6 rounded-lg">
          <h2 className="text-center text-xl font-semibold mb-4">Define your Story</h2>
          <form onSubmit={handleFormSubmit} className="w-full">
            <div className="text-center mb-6">
              <textarea
                className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
                rows="3"
                placeholder="Write down all your story ideas. Include details about the plot, world..."
                value={storyIdeas}
                onChange={(e) => setStoryIdeas(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="space-y-4 mb-4">
              <div>
                <label className="block mb-2">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Genre</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none"
                >
                  <option value="Action">Action</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Reader age</label>
                <select
                  value={readerAge}
                  onChange={(e) => setReaderAge(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none"
                >
                  <option value="13-17">13-17</option>
                  <option value="Under 13">Under 13</option>
                  <option value="18+">18+</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none"
                >
                  <option value="kindergarten">Kindergarten</option>
                  <option value="junior_high_school">Junior high school</option>
                  <option value="high_school">High school</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Words Count</label>
                <select
                  value={words}
                  onChange={(e) => setWords(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none"
                >
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                  <option value="1500">1500</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full bg-purple-600 py-2 rounded-lg">Generate with AI</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default GenerateStory;
