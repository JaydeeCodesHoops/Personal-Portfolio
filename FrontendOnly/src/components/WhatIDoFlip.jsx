import React from "react";
import "../css/FlipCard.css"; // Import CSS file

const FlipCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        {/* Front Side */}
        <div className="card-face card-front">
            <h2 style={{color: "white", fontSize: 40}}>What I Do</h2>
        </div>
        {/* Back Side */}
        <div className="card-face card-back">
            <p>I develop Web-Applications with a great user interface allowing smooth user experiences when operating the application. It includes the functionality from the Back-end and the storage of data within a Database.</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;