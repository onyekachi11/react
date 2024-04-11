import React from "react";
import Sidebar from "./sidebar";
import Card from "./card";

const MainView = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "60%",
      }}
    >
      <div style={{display: 'flex', gap: 4 , height: '100%'}}>
        <Sidebar  />
        {/* <Card/> */}
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default MainView;
