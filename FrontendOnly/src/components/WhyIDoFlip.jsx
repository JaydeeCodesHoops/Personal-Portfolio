import React from "react";
import "../css/FlipCard.css"; // Import CSS file

const FlipCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        {/* Front Side */}
        <div className="card-face card-front">
            <h2 style={{color: "saddlebrown"}}>Why I Do It</h2><br/>
        </div>
        {/* Back Side */}
        <div className="card-face card-back">
            <p>I do this because it is a constant growing passion that never stops. Creating much more easy and efficient user experiences on the web, making it fun to navigate through applications with unexpected interactions on the interfaces is something to be known for.</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;