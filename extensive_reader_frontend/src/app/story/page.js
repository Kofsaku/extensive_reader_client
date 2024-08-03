// import React from "react";
// import { toast } from 'react-toastify';

// const Story = ({story}) => {
//   console.log(story)
//   // toast.success('This is a success message!');
//   return (
    
//     <div className="text-white px-10">
//     {!story &&
//       <>
//         <div className="flex justify-center items-center text-[30px] mt-10 mb-5">Wings of Valor</div> 
//         <div>
//           Chapter 1: Baptism by Fire
//           The pre-dawn silence at the Thorpe Abbotts airbase was shattered by the thunderous roar of engines as the mighty B-17 bombers rumbled to life. Lt. Henry Granger, his heart pounding in his chest, tightened his grip on the controls of his aircraft, the "Dauntless Duchess." At just 24 years old, he was one of the youngest pilots assigned to the elite 100th Bomb Group, known throughout the Allied forces as the "Bloody Hundredth" for their daring and often devastating bombing raids over occupied Europe.
//           As the first rays of sunlight pierced the overcast sky, Granger cast a glance at the men who made up his crew – a mix of seasoned veterans and fresh-faced youngsters like himself. There was Sgt. Michael O'Malley, the gruff but reliable Irish-American navigator who had talked Granger through countless harrowing bombing runs, his weather-beaten face etched with the weight of too many battles. And Cpl. Sarah Donovan, the group's only female member, a WAC radio operator whose sharp wit and steady nerves had saved them more than once, her piercing blue eyes betraying none of the fear that must have gripped her heart.
//           Granger took a deep breath, trying to quell the butterflies in his stomach. This would be his first combat mission, a baptism by fire that would test his mettle in ways he could scarcely imagine. He had trained tirelessly for this moment, but no amount of preparation could truly ready him for the horrors that awaited them in the skies over Nazi Germany.
//           As the bombers lined up on the runway, Capt. Richard Weston, the group's commanding officer, strode past, his face a mask of grim determination. A veteran of countless missions, Weston had seen more than his fair share of death and destruction, but his unwavering resolve was a beacon to the young pilots under his command.
//           "Listen up, boys," Weston called out, his voice cutting through the roar of the engines. "Today's target is a aircraft assembly plant in central Germany. It's a tough nut to crack, but we've got the tools to do the job. Just remember your training, and we'll all make it home in time for supper."
//           Granger swallowed hard, his mouth suddenly dry. He knew the risks all too well – the plant was heavily defended, and the mission would require them to fly through a veritable gauntlet of anti-aircraft fire and enemy fighters. But failure was not an option; too much was at stake, and the 100th Bomb Group had a reputation to uphold.
//           With a final salute, Weston turned and headed back to the control tower, leaving Granger and his crew to face their destiny. As the engines roared to life, Granger glanced back at O'Malley and Donovan, their faces set in grim determination.
//           "You heard the man," Granger said, his voice barely audible over the cacophony of sound. "Let's go show those Krauts what the Bloody Hundredth is made of."
//           And with that, the Dauntless Duchess lurched forward, gathering speed as it thundered down the runway and into the uncertain skies above. For Granger and his crew, there was no turning back now – their baptism by fire had begun.
//         </div>
//       </>
//     }
//     {story &&
//       <>
//         <div className="mt-20">
//           {story}
//         </div>
//       </>
//     }
//     </div>
//   )
// }
// export default Story;
 

'use client'
import React from 'react';
import withSidebar from '@/components/withSidebar/page'; // Import the HOC
import StoryDesc from '@/components/HomePage/MyStories/story'; // Import MainSection

// Wrap MainSection with the HOC
const MainStoryWithSidebar = withSidebar(StoryDesc);

const Story = () => {
  return <MainStoryWithSidebar />;
};

export default Story;
