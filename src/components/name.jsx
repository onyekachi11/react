import React from "react";

const name = ({ name, age, location }) => {
  return (
    < >
      {name && (
        <div>
          <p>My name is {name}</p>
          <p>I stay at {location}</p>
        </div>
      )}
      {age && (
        <div>
          <p>i am {age} years old</p>
        </div>
      )}
    </>
  );
};

export default name;
