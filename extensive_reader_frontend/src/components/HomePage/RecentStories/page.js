import React from "react";

const FeatureCards = ({setSection}) => {
  const features = [
    {
      imageUrl: 'images/ai-power.jpeg',
      title: 'Fairy Tails',
      desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
    },
    {
      imageUrl: 'images/ai-power.jpeg',
      title: 'See be before',
      desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
    },
    {
      imageUrl: 'images/ai-power.jpeg',
      title: 'Dragon',
      desc: 'Leverage advanced AI technologies to enhance your writing process and create compelling stories, blogs and novels.'
    }
  ]
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 mx-auto gap-10">
        {features.map((item, index) => (
          <div
            key={index} className="w-[300px] h-[400px] mb-2 cursor-pointer" 
            onClick={() => setSection(3)}
          >
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
