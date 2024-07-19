import React, { useState } from 'react';

const GenerateStory = ({ }) => {
  const [autogenCharacters, setAutogenCharacters] = useState(true);
  const [language, setLanguage] = useState('English');
  const [genre, setGenre] = useState('Auto');
  const [readerAge, setReaderAge] = useState('18+');
  const [writingStyle, setWritingStyle] = useState('Auto: Determine Writing Style Automatically');
  const [numberOfChapters, setNumberOfChapters] = useState(6);

  return (
    <div className="w-full text-white flex flex-col items-center justify-center">
      <div className="w-full bg-gray-800 p-6 rounded-lg">
        <h2 className="text-center text-xl font-semibold mb-4">Define your Story</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-green-500 px-4 py-2 rounded-full">Short story</button>
          <button className="bg-green-500 px-4 py-2 rounded-full">Fiction</button>
        </div>
        <div className="text-center mb-6">
          <button className="bg-blue-500 px-4 py-2 rounded-lg">AI Story Wizard</button>
          <p className="my-4">OR</p>
          <textarea
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
            rows="3"
            placeholder="Write down all your story ideas. Include details about the plot, characters, world, and themes..."
          ></textarea>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Autogen Characters</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autogenCharacters}
              onChange={() => setAutogenCharacters(!autogenCharacters)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
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
              {/* Add more languages as needed */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Genre</label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none"
            >
              <option value="Auto">Auto</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              {/* Add more genres as needed */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Reader age</label>
            <select
              value={readerAge}
              onChange={(e) => setReaderAge(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none"
            >
              <option value="18+">18+</option>
              <option value="13-17">13-17</option>
              <option value="Under 13">Under 13</option>
              {/* Add more age ranges as needed */}
            </select>
          </div>
          <div>
            <label className="block mb-2">Writing style</label>
            <select
              value={writingStyle}
              onChange={(e) => setWritingStyle(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none"
            >
              <option value="Auto: Determine Writing Style Automatically">
                Auto: Determine Writing Style Automatically
              </option>
              <option value="Formal">Formal</option>
              <option value="Informal">Informal</option>
              {/* Add more styles as needed */}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2">Number of chapters: {numberOfChapters}</label>
          <input
            type="range"
            min="1"
            max="20"
            value={numberOfChapters}
            onChange={(e) => setNumberOfChapters(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <button className="bg-gray-700 px-4 py-2 rounded-lg">Advanced Settings</button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg">Previous</button>
        </div>
        <button className="w-full bg-purple-600 py-2 rounded-lg">Generate with AI</button>
      </div>
    </div>
  );
};

export default GenerateStory;
