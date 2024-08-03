import React, { useEffect, useState } from "react";
const axios = require('axios');

const FeatureCards = ({setSection}) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const jwtToken = process.env.JWT_SECRET;
    
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/story`, {
          headers: {
            'Authorization': `Bearer ${jwtToken}`, // Include JWT in the Authorization header
            'Content-Type': 'application/json' // Specify the content type
          }
        });
        
        setFeatures(response.data);
    
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };
    
    // Call the function to fetch stories
    fetchStories();
  }, [])
  // const features = [
  //   {
  //     imageUrl: 'images/ai-power.jpeg',
  //     title: 'Fairy Tails',
  //     desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
  //   },
  //   {
  //     imageUrl: 'images/ai-power.jpeg',
  //     title: 'See be before',
  //     desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
  //   },
  //   {
  //     imageUrl: 'images/ai-power.jpeg',
  //     title: 'Dragon',
  //     desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
  //   }
  // ]
  console.log("featuresfeaturesfeatures", features)
  debugger
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 mx-auto gap-10">
        {features?.map((item, index) => (
          <div
            key={index} className="w-[300px] h-[400px] mb-2 cursor-pointer" 
            onClick={() => setSection(3)}
          >
            <img
              src="images/ai-power.jpeg"
              alt="Card image"
              width={250}
              height={250}
              className="rounded-[16px] mt-4"
              style={{ boxShadow: '0px 0px 8px 0px rgb(176, 109, 185)' }} 
            />
            <div className="mt-4 text-center text-[18px] w-[80%]">{item.story.split('Title')[1].split('"')[1]
            }</div>
            {/* <div className="mt-2 text-[16px]">{item.desc}</div> */}
          </div>
        ))}
      </div>
    </div>
  )
}
export default FeatureCards;
