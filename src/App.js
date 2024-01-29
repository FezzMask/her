// App.js
import React, { useState } from 'react';
import './App.css';

const getCenterPosition = () => ({
  top: '5vh',
  left: '44vw',
});

const getAdjacentPosition = () => ({
  top: '5vh',
  left: '50vw',
});

const getRandomPosition = () => ({
  top: `${Math.floor(Math.random() * 80)}vh`,
  left: `${Math.floor(Math.random() * 80)}vw`,
});

const App = () => {
  const [buttonPosition, setButtonPosition] = useState(getCenterPosition());
  const [showLabel, setShowLabel] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [showTestLabel, setShowTestLabel] = useState(true);
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);
  const [showSlideToCenter, setShowSlideToCenter] = useState(false);

  const handleClick = () => {
    setButtonPosition(getRandomPosition());
  };

  const handleStaticButtonClick = () => {
    setShowLabel(true);
    setShowButtons(false);
    setShowTestLabel(false);
    setShowBackgroundImage(true);
    setShowSlideToCenter(true);
  };

  return (
    <div className="app-container">
      {showTestLabel && <p className="main-label">Do you love me?</p>}
      {showButtons && (
        <React.Fragment>
          <button
            className="moving-button"
            style={buttonPosition}
            onClick={handleClick}
          >
            NO!
          </button>
          <button
            className="static-button"
            style={getAdjacentPosition()}
            onClick={handleStaticButtonClick}
          >
            YES!
          </button>
        </React.Fragment>
      )}
      {showLabel && (
        <p
          className={`label ${showSlideToCenter ? 'slide-to-center' : ''} label-thank-you`}
          style={{ top: buttonPosition.top, left: '50vw' }}
        >
          THANK YOU!
        </p>
      )}
      {showSlideToCenter && (
        <div className="center-text label-love-you">I LOVE YOU NASSIMA ❤️ </div>
      )}
      {showBackgroundImage && (
        <div className="background-image" />
      )}
    </div>
  );
};

export default App;
