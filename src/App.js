// src/App.js
import React, { useState } from 'react';
import './App.css';
import sampleImage from './IMG_9038.jpg'; // Make sure you have an image in the src folder

function App() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!showImage ? (
          <button onClick={handleClick} className="show-button">
            I love you
          </button>
        ) : (
          <img src={sampleImage} alt="Sample" className="sample-image" />
        )}
      </header>
    </div>
  );
}

export default App;
