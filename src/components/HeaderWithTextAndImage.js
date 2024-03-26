import React from 'react';
import './HeaderWithTextAndImage.css'; // Assuming you'll style your component with CSS

const HeaderWithTextAndImage = () => {
    return (
        <div className="header-container">
            <div className="text-overlay">
                <h1>THESE... ARE THE INFOWARS!!!</h1>
                <p>Make Amphibians Straight Again</p>
            </div>
        </div>
    );
};

export default HeaderWithTextAndImage;
