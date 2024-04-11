import React from "react";
import Button from "../components/button";

const Sidebar = () => {
  return (
    // <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid red",
        height: "100%",
        padding: 20,
        gap: 5
      }}
    >
      <Button name="profile" />
      <Button name="dashboard" />
      <Button name="explore" />
    </div>
  );
};

export default Sidebar;
