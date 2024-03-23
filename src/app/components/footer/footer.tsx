import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#333] h-[100px] ">
      <div className="flex justify-between mx-[50px]">
        <div className="w-[200px] ml-[10px] mt-[10px] pt-[20px]">
          <Image
            src="/images/logo/logo.png"
            width={150}
            height={100}
            alt="sakazuki"
          />
          <p className="text-white text-[15px]">&copy;PitPa, Inc.</p>
        </div>
        <ul className="flex justify-end py-[35px]">
          <li className="text-white px-[20px]">運営会社</li>
          <li className="text-white px-[20px]">利用規約</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
