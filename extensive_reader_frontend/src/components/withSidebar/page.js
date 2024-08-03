import React, { useState } from 'react';
import SideBar from '@/components/HomePage/Sidebar.js';

const withSidebar = (WrappedComponent) => {
  return (props) => {
    const [section, setSection] = useState(1);
    const [story, setStory] = useState('');

    return (
      <div className="flex">
        <div className="min-w-fit">
          <SideBar
            section={section}
            setSection={setSection}
            setStory={setStory}
          />
        </div>
        <div className="flex-grow">
          <WrappedComponent
            section={section}
            setSection={setSection}
            story={story}
            {...props}
          />
        </div>
      </div>
    );
  };
};

export default withSidebar;
