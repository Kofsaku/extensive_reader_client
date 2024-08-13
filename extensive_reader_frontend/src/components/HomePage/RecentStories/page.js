import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie'; // Ensure you import Cookies if using it
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

const FeatureCards = ({type}) => {
  const router = useRouter();
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const jwtToken = localStorage.getItem('authToken') || Cookies.get('authToken');
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/story`, {
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
          }
        });
        if (type === 'public') {
          setFeatures(response.data.publicStories || []);
        } else if (type === 'fav') {
          setFeatures(response.data.stories?.filter(item => item.fav) || []);
        } else {
          setFeatures(response.data.stories || []);
        }
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };
    fetchStories();
  }, []);

  const handlePublicStatus = async (storyId) => {
    try {
      const jwtToken = localStorage.getItem('authToken') || Cookies.get('authToken');
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/story/setPublicStatus/${storyId}`, {}, {
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json'
        }
      });
      toast.success("Public Status upadted");
      setFeatures(prevFeatures => prevFeatures.map(feature =>
        feature._id === storyId ? response.data : feature
      ));
    } catch (error) {
      toast.success("Error updating public status");
      console.error('Error updating public status:', error);
    }
  };

  const handleFavoriteToggle = async (storyId) => {
    try {
      const jwtToken = localStorage.getItem('authToken') || Cookies.get('authToken');
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/story/toggleFavorite/${storyId}`, {}, {
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json'
        }
      });
      toast.success("Favorite status updated");
      setFeatures(prevFeatures => prevFeatures.map(feature =>
        feature._id === storyId ? response.data : feature
      ));
    } catch (error) {
      toast.success("Error toggling favorite status");
      console.error('Error toggling favorite status:', error);
    }
  };
  const handleCardClick = (storyId) => {
    router.push(`/story?id=${storyId}`);
  };
  
return (
  <div className="flex justify-center">
    <div className="grid grid-cols-3 mx-auto gap-10">
      {features.length > 0 ?
        features.map((item) => (
          <div
            key={item._id}
            className="w-[300px] h-[400px] mb-2 cursor-pointer flex flex-col items-center rounded-[16px] mt-10 relative"
            style={{ boxShadow: '0px 0px 8px 0px rgb(176, 109, 185)' }}
            onClick={() => handleCardClick(item._id)}
          >
            <div>
              <img
                src="images/ai-power.jpeg"
                alt="Card image"
                width={250}
                height={250}
                className="mt-4 rounded-[16px]"
              />
            </div>
            {type !== 'public' &&
              <div className="mt-2 flex flex-row-reverse gap-3 items-center absolute right-3 bottom-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteToggle(item._id);
                  }}
                  className="flex items-center space-x-1"
                >
                  {item.fav ? (
                    <svg
                      className="h-7 w-7 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.444 4.433a1 1 0 00.95.69h4.659c.969 0 1.371 1.24.588 1.81l-3.773 2.736a1 1 0 00-.364 1.118l1.444 4.433c.3.921-.755 1.688-1.538 1.118l-3.774-2.736a1 1 0 00-1.176 0l-3.774 2.736c-.783.57-1.838-.197-1.538-1.118l1.444-4.433a1 1 0 00-.364-1.118L2.46 9.86c-.783-.57-.38-1.81.588-1.81h4.659a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                  ) : (
                    <svg
                      className="h-7 w-7 text-white-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.444 4.433a1 1 0 00.95.69h4.659c.969 0 1.371 1.24.588 1.81l-3.773 2.736a1 1 0 00-.364 1.118l1.444 4.433c.3.921-.755 1.688-1.538 1.118l-3.774-2.736a1 1 0 00-1.176 0l-3.774 2.736c-.783.57-1.838-.197-1.538-1.118l1.444-4.433a1 1 0 00-.364-1.118L2.46 9.86c-.783-.57-.38-1.81.588-1.81h4.659a1 1 0 00.95-.69L11.05 2.927z"
                      />
                    </svg>
                  )}
                </button>
                <div className="flex items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePublicStatus(item._id);
                    }}
                    className="w-[80px] py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none text-[10px] font-bold"
                  >
                    {item.public ? 'Add to Private' : 'Add to Public'}
                  </button>
                </div>
              </div>
            }
            <div className="mt-4 text-center text-[18px] w-[80%]">{item.title}</div>
          </div>
        ))
        :
        <div className="mt-4 text-center text-[18px] w-[100%]">No record found!</div>
      }
    </div>
  </div>
);
}
export default FeatureCards;
