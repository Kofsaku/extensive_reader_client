import React from 'react';
import HomeContanier from '@/components/HomePage/HomeContainer/page.js';
import MyStoires from '@/components/HomePage/MyStories/page.js';
import Story from '@/components/HomePage/MyStories/story.js';

const MainSection = ({section, setSection, story}) => {
  return (
    <>
      {section === 1 &&
        <HomeContanier
          setSection={setSection}
        />
      }
      {section === 2 &&
        <MyStoires
          setSection={setSection}
        />
      }
      {section === 3 &&
        <Story 
          story={story}
        />
      }
    </>
  );
};

export default MainSection;
