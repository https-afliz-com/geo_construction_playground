import React, { useEffect, useState } from 'react';
import { Draggable } from 'drag-react';

import  Ruler from './Ruler'


const CompassRuler = () => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isDragging, setIsDragging] = useState(false);

  const handleScale = (event) => {

  //   if (!isDragging) return;

  //   const scaleFactor = 0.01;
  //   const deltaY = event.clientY - mousePosition.y;
  //   const newScale = scale + deltaY * scaleFactor;

  //   if (newScale >= 0.5 && newScale <=2) {
  //     setScale(newScale);
  //     setMousePosition({x: event.clientX, y: event.clientY});
  //   }

    const scaleFactor = parseFloat(event.target.value);
    setScale(scaleFactor);
  };

  // const handlePosition = (event) => {
  //   console.log(event)

  // }

  // useEffect(() => {
  //   window.RRRD.initExample(document.querySelector('#ruler'))
  // }, [])

  const handleRotation = (event) => {
    const rotationAngle = parseFloat(event.target.value);
    setRotation(rotationAngle);
  };

  return (
    <div className="compass-ruler">
      <div className="controls">
        <label htmlFor="scale-slider">Scale:</label>
        <input
          id="scale-slider"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={scale}
          onChange={handleScale}
        />

        <label htmlFor="rotation-slider">Rotation:</label>
        <input
          id="rotation-slider"
          type="range"
          min="-180"
          max="180"
          step="1"
          value={rotation}
          onChange={handleRotation}
        />
      </div>
        <Draggable
          id="ruler"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            transformOrigin: 'center',
            background: "#eeeeee",
            width: 300,
            height: 300
          }}>
      {/* <Draggable onDragEnd={handlePosition}>
          <button>point 1 </button>
      </Draggable>

      <Draggable onDragEnd={handlePosition}>
        <button>point 2</button>
      </Draggable> */}

          <Ruler />
        </Draggable>
    </div>
  );
}

export default CompassRuler;