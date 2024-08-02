import React from "react";

const FeatureCards = () => {
  const features = [
    {
      imageUrl: 'images/AdvancedFeatures.jpeg',
      title: 'Advanced Features',
      desc: 'Enhance your writing experience with voice narrations, story analytics, and more.'
    },
    {
      imageUrl: 'images/ai-power.jpeg',
      title: 'AI-Powered Narratives',
      desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
    },
    {
      imageUrl: 'images/EditingandProofreading.jpeg',
      title: 'AI-Powered Narratives',
      desc: 'Create stories in various formats, from short stories and novels to interactive fiction and scripts.'
    },
    {
      imageUrl: 'images/intractiveCharatcer.jpeg',
      title: 'AI-Powered Narratives',
      desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
    },
    {
      imageUrl: 'images/Multi-format.jpeg',
      title: 'AI-Powered Narratives',
      desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
    },
    {
      imageUrl: 'images/Multi-format.jpeg',
      title: 'AI-Powered Narratives',
      desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
    }
  ]
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 mx-auto gap-10">
        {features.map((item, index) => (
          <div key={index} className="w-[300px] h-[400px] mb-2">
            <img
              src={item.imageUrl}
              alt="Card image"
              width={250}
              height={250}
              className="rounded-[16px] mt-4"
              style={{ boxShadow: '0px 0px 8px 0px rgb(176, 109, 185)' }} 
            />
            <div className="mt-4 text-center text-[18px]">{item.title}</div>
            <div className="mt-2 text-[16px]">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default FeatureCards;
