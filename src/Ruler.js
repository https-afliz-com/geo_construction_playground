import React from 'react';

export default () => {
    return (
        <svg
        className="compass-ruler-svg"
        width="220"
        height="400"
      >
        <path d="M200,20 A180,180 0 0,0 200,380" className="compass-ruler-half-circle" />
        <line x1="200" y1="10" x2="200" y2="390" className="compass-ruler-line" />
        <circle 
          cx="200" 
          cy="20" 
          r="5" 
          className="compass-ruler-circle-point" />
        {/* <line x1="10" y1="200" x2="390" y2="200" className="compass-ruler-line" /> */}
        {/* Add more lines for other directions */}
        {Array.from(Array(180).keys()).map((degree) => (
          <g key={degree} transform={`rotate(${360 - degree} 200 200)`}>
          <line 
            x1="200" 
            y1={degree % 10 === 0 ? "10" : "15"} 
            x2="200" y2={degree % 10 === 0 ? "30" : "25"} 
            className="compass-ruler-mark" />
              {degree % 10 === 0 && (
              <text x="200" y="45" textAnchor="middle" className="compass-ruler-tick-text">
                {degree}
              </text>
          )}
        </g>
        ))}
      </svg>
    )
}