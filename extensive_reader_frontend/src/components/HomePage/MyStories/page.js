import React from "react";
import Stories from '../RecentStories/page.js';
const axios = require('axios');

const MyStoires = ({setSection}) => {
  return (
    <div className="text-white mt-4">
      <div className="flex justify-center items-center text-[32px] mb-10">My Stoires</div>
      <div>
        <Stories
          setSection={setSection}
        />
      </div>
    </div>
  )
}
export default MyStoires;