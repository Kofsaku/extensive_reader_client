import React from 'react';
import HomeContanier from '@/components/HomePage/HomeContainer/page.js';
import MyStoires from '@/components/HomePage/MyStories/page.js';
import Story from '@/components/HomePage/MyStories/story.js';

const MainSection = ({section, setSection}) => {
  console.log("sectionsectionsectionsection", section)
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
        <Story />
      }
    </>
  );
};

export default MainSection;
