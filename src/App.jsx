import { useState } from "react";
import "./App.css";
import ProfileCard from "./Components/ProfileCard";

function App() {
  const user1 = {
    name: "Talan Dias",

    pic: "https://placehold.co/100",
    verified: true,
  };
  const user2 = {
    name: "Talan Dias",
    title:"ux designer"
  };
  const user3 = {
    name: "Talan Dias",
    email: "",
  };

  return (
    <>
      <div className="flex gap-3 flex-col  md:flex-row ">
        <ProfileCard user={user1} title1="1" />
        <ProfileCard user={user2} title1="2" />
        <ProfileCard user={user3} />
      </div>
    </>
  );
}

export default App;
