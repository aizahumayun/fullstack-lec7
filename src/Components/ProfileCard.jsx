import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import React from "react";
import { CiBadgeDollar } from "react-icons/ci";
const ProfileCard = ({ user, title1 }) => {
  const { name, pic, verified } = user;
  console.log(user);
  return (
    <div className="p-14 h-45 bg-white rounded-3xl flex  shadow-lg items-center w-md ">
      <div className=" flex relative items-end ">
        <img
          src={`${pic || "https://placehold.co/100"}`}
          alt=""
          className=" rounded-full object-cover"
        />
        <CheckBadgeIcon className="absolute right-3 size-6 text-blue-500 "/>
        {/* <CiBadgeDollar className="absolute right-3 size-6 text-blue-500 " /> */}
        {/* <div className="bg-green-400 h-15 w-15 rounded-full absolute left-[80px] top-[9px]"></div>  */}
      </div>
      <div className="flex flex-col items-left justify-center ml-4 ">
        <h1 className="font-semibold text-left ">{name}</h1>
        {/* <span className="pt-1">{title?.toUpperCase()??"title"  
            
            
            }</span> */}

            {/* short circuiting */}
        <span className="pt-1">{title1 || <h5>Abc</h5>}</span> 
      </div>
    </div>
  );
};

export default ProfileCard;
