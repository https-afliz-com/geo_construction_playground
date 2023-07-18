import React, { useState } from 'react';
import { Draggable } from 'drag-react';

const IsoscelesRightTriangle = ({ width, height }) => {
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);
  
    const handleScaleChange = (event) => {
      setScale(parseFloat(event.target.value));
    };
  
    const handleRotationChange = (event) => {
      setRotation(parseFloat(event.target.value));
    };
  
    const transformedStyles = {
      transform: `scale(${scale}) rotate(${rotation}deg)`
    };

    const tickLength = 2; // Length of measurement ticks
    const tickDistance = 10; // Distance between measurement ticks
  
    // Calculate the number of measurement ticks based on the scaled width
    const numTicks = Math.floor((95%width * scale) / tickDistance);
  
    const ticks = [];
    for (let i = 1; i <= numTicks; i++) {
      const xPos = (i * tickDistance) / scale;
      const tickStyle = {
        transform: `translate(${xPos}px, ${height}px)`
      };
      ticks.push(
        <line key={i} x1={0} y1={0} x2={0} y2={tickLength} stroke="black" strokeWidth="1" style={tickStyle} />,
      );
    }
  
    return (
      <div>
        <div>
          <label htmlFor="scaleInput">Scale:</label>
          <input
            id="scaleInput"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={scale}
            onChange={handleScaleChange}
          />
        </div>
        <div>
          <label htmlFor="rotationInput">Rotation:</label>
          <input
            id="rotationInput"
            type="range"
            min="-180"
            max="180"
            step="1"
            value={rotation}
            onChange={handleRotationChange}
          />
        </div>
        <Draggable>
            <svg
                className="isosceles-right-triangle-svg" 
                width="200"
                height="200"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                style={transformedStyles}>
                <line x1="0" y1="0" x2="100" y2="0" stroke="black"/>
                {Array.from(Array(numTicks).keys()).map((tickIndex) => (
                <g key={tickIndex}>
                  <line
                    x1={(tickIndex * tickDistance) / scale}
                    y1={0}
                    x2={(tickIndex * tickDistance) / scale}
                    y2={tickLength}
                    stroke="black"
                    strokeWidth="0.5"
                  />
                  <text
                    x={(tickIndex * tickDistance) / scale - 1}
                    y={tickLength + 2}
                    alignmentBaseline="middle"
                    fill="black"
                    fontSize="3"
                    fontWeight="100"
                  >
                    {tickIndex !== 0 ? tickIndex : ''}
                  </text>
                </g>
                ))}

                <line x1="0" y1="100" x2="0" y2="0" stroke="black"/>
                {Array.from(Array(numTicks).keys()).map((tickIndex) => (
                <g key={tickIndex}>
                    <line 
                      x1={0} 
                      y1={(tickIndex * tickDistance) / scale} 
                      x2={tickLength} 
                      y2={(tickIndex * tickDistance) / scale} 
                      stroke="black" 
                      strokeWidth="0.5" 
                      className="isosceles-mark"/>
                    <text 
                      x={tickLength + 2} 
                      y={(tickIndex * tickDistance) / scale} 
                      alignmentBaseline="middle" 
                      fill="black" 
                      fontSize="3"
                      fontWeight="100"
                      className="isosceles-tick-text">
                      {tickIndex !== 0 ? tickIndex : ''}
                    </text>
                </g>
                ))}

                <line x1="0" y1="100" x2="100" y2="0" stroke="black"/>
                <polygon 
                  points="25,25 50,25 25,50" 
                  stroke="black" />
            </svg>
        </Draggable>
      </div>
    );
  };
  
  export default IsoscelesRightTriangle;