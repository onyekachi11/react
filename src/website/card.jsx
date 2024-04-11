import React from 'react'

const Card = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%",  backgroundColor: 'green' }}>
      <p style={{ width: "50%" }}>main text</p>
      <p style={{ border: "1px solid black", height: "50%", width: "50%" }}>
        Imgage
      </p>
    </div>
  );
}

export default Card