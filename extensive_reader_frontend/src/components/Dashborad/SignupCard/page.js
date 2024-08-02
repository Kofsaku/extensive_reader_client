import React from "react";

const SingupCards = () => {
  return (
    <div
      className="flex justify-center h-[250px] w-[70%] rounded-[16px] mx-auto"
      style={{
        background: '-webkit-linear-gradient(top, rgb(71, 72, 95) 0%, rgb(107, 65, 113) 100%)',
      }}
    >
      <div className="text-center mt-10">
        <div className="text-[40px] leading-[40px] mb-5">Sign up and get started!</div>
        <div className="text-[18px] leading-[23px] text-gray-400 mb-10 text-center w-[90%] mx-auto">Embark on a storytelling journey like no other. Craft unique tales, interact with characters, and experience stories coming alive in multiple languages. Step into our world of interactive storytelling.</div>
        <div className="bg-[#8c52ff] w-fit mx-auto px-4 py-2 rounded-[6px] font-bold">Get Started for free now</div>
      </div>
    </div>
  )
}
export default SingupCards;
