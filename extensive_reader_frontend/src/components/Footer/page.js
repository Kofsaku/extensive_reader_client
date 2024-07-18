import React from "react";

const Footer = () => {
  return (
    <div className="px-10 py-4 bottom-0 w-full text-[16px] drop-shadow-2xl">
      <div className="flex justify-between">
        <div>
          <div>
            Extensive Reading
          </div>
          <div>
            AI Powered Interactive Stories & Characters
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <div className="font-bold">
              Contact us
            </div>
            <div className="text-[14px]">
              Storynest Affiliate Program
            </div>
          </div>
          <div>
            <div className="font-bold">
              Legal
            </div>
            <div className="text-[14px]">
              Privacy Policy
            </div>
            <div className="text-[14px]">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        © 2024 Extensive Reading
      </div>
    </div>
  )
}
export default Footer;
