import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#333] h-[100px] flex justify-between">
      <div className="w-[200px] text-white">画像</div>
      <ul className="flex justify-end py-[35px]">
        <li className="text-white px-[20px]">運営会社</li>
        <li className="text-white px-[20px]">利用規約</li>
      </ul>
    </div>
  );
};

export default Footer;
