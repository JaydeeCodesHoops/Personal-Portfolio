import React from "react";
import "../css/FlipCard.css"; // Import CSS file

const FlipCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        {/* Front Side */}
        <div className="card-face card-front">Front</div>
        {/* Back Side */}
        <div className="card-face card-back">Back</div>
      </div>
    </div>
  );
};

export default FlipCard;
