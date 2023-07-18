import { Draggable } from 'drag-react';
import React, { useState } from 'react';

const Compass2 = () => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleScaleChange = (event) => {
    const newScale = parseFloat(event.target.value);
    setScale(newScale);
  };

  const handleRotationChange = (event) => {
    const newRotation = parseFloat(event.target.value);
    setRotation(newRotation);
  };

  return (
    <div>
      <div>
        <label htmlFor="scale">Scale:</label>
        <input
          type="range"
          id="scale"
          min="0.1"
          max="2"
          step="0.1"
          value={scale}
          onChange={handleScaleChange}
        />
      </div>
      <div>
        <label htmlFor="rotation">Rotation:</label>
        <input
          type="range"
          id="rotation"
          min="0"
          max="360"
          step="1"
          value={rotation}
          onChange={handleRotationChange}
        />
      </div>
      <Draggable
        style={{
          width: `${30 * scale}%`,
          height: '30px',
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'top left',
        }}
      >
        <svg viewBox="0 0 100 100">
          <path d="M0 0 L50 100 L100 0" stroke="black" fill="transparent" />
        </svg>
      </Draggable>
    </div>
  );
};

export default Compass2;
