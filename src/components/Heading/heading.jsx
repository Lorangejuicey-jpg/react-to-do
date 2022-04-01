import React, { useState, useEffect } from "react";
import "./heading.css";

const Heading = ({ naam }) => {
  return (
    <div className="Todo-heading Text-container">
      <h1>{naam}</h1>
    </div>
  );
};

export default Heading;
