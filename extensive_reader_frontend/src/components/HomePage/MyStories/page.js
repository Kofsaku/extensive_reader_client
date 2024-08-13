import React from "react";
import Stories from '../RecentStories/page.js';
const axios = require('axios');

const MyStoires = ({type}) => {
  return (
    <div className="text-white mt-4">
      {type === 'fav' &&
        <div className="flex justify-center items-center text-[32px] mb-10">Favourite Stories</div>
      }
      {type === 'public' &&
        <div className="flex justify-center items-center text-[32px] mb-10">Public Stories</div>
      }
      {type === 'my_stories' &&
        <div className="flex justify-center items-center text-[32px] mb-10">My Stoires</div>
      }
      <div>
        <Stories
          type={type}
        />
      </div>
    </div>
  )
}
export default MyStoires;