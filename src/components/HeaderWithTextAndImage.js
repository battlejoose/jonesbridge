import React from 'react';
import './HeaderWithTextAndImage.css'; // Assuming you'll style your component with CSS

const HeaderWithTextAndImage = () => {
    return (
        <div className="header-container">
            <div className="text-heading-container">
                <h1 className="flag-heading">MAKE AMPHIBIANS STRAIGHT AGAIN</h1>
                <p className="flag-subheading">Solana: GCVS6j6Y4JTF1x58dVWwDduzP94SMKCkhMQkQdMf1E4X</p>
            </div>
        </div>
    );
};

export default HeaderWithTextAndImage;
