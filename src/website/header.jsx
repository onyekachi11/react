import React from "react";
import Button from "../components/button";
// import Image from '../assets/img/tree.jpg'

const Header = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>foodies</p>
      {/* <img src={Image}/> */}
      <Button name="Login" />
    </div>
  );
};

export default Header;
