import React from "react";
import PlanCard from './PaymentPlanCard.js';

const plans = [
  {
    name: 'Free Plan',
    desc: 'Can create up to 3 stories per day'
  },
  {
    name: 'Standard Plan',
    desc: 'Can create up to 10 stories per day'
  },
  {
    name: 'Pro Plan',
    desc: 'Can create unlimited Stories'
  }
]
const PaymentSection = () => {
  return (
    <div className="text-white mt-4">
      <div className="flex justify-center items-center text-[32px] mb-10">Payment Plan</div>
      <div className="ml-10 flex justify-evenly">
        {plans.map((item, index) => (
          <PlanCard
            key={index}
            plan={item}
          />
        ))}
      </div>
    </div>
  )
}
export default PaymentSection;