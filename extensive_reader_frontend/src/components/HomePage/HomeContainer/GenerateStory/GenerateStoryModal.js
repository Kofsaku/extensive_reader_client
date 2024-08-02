import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GenerateStory = ({setStory, setSection, closeModal}) => {
  const [language, setLanguage] = useState('English');
  const [genre, setGenre] = useState('Action');
  const [readerAge, setReaderAge] = useState('13-17');
  const [difficulty, setDifficulty] = useState('kindergarten');
  const [storyIdeas, setStoryIdeas] = useState('');
  const [words, setWords] = useState('500');

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
      const res = await axios.post('/api/chatgpt', { prompt: storyData });
      setStory(res.data.result);
      setSection(3)
      closeModal()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
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
  );
};

export default GenerateStory;
