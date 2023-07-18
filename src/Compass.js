import { Draggable } from 'drag-react';

import React, { useState } from 'react';

const Compass = ( width, height ) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleScaleChange = (event) => {
    setScale(parseFloat(event.target.value));
  };

  const handleRotationChange = (event) => {
    setRotation(parseFloat(event.target.value));
  };

  const transformedStyles = {
    transform: `
      scaleX(${scale})
      scaleY(1)
      rotate(${rotation}deg)`,
    transformOrigin: '0 0',
  };
  
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
        xmlns="http://www.w3.org/2000/svg" 
        width={width}
        height={height}
        viewBox="0 0 168.51 240.78"
        style={transformedStyles}>

        <g>
          <g transformOrigin= 'right bottom' transform={`rotate(${rotation})`} >
          <path d="M71.53,23.22S-5.62,248.2.33,240.59s90-209.81,90-209.81Z" 
                fill="#231f20"/>
          </g>
          <g>
          <path d="M67.81,31.57s101.75,215,100.69,205.37S86.55,23.87,86.55,23.87Z" 
                transform-box='fill box'
                transformOrigin= 'center bottom' 
                transform={`rotate(${rotation})`}
                fill="#231f20"/>
          </g>
          <g transform={`1, ${1 / scale})`}>
          <circle cx="79.58" cy="20.22" r="20.22" 
                  fill="#231f20"/>
          </g>
        </g>
      </svg>
    </Draggable>

    {/* <Draggable>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="800" 
      height="800">
      <g className="tile utensil active" 
         transform="translate(464.70000000000005 543.9) rotate(356.6978474013771)">
        <g className="leg-pin" 
           style={{ transformOrigin: 'right bottom', transform: 'rotate(0.306963rad)' }}>
          <polygon points="0,-21 -7,-21 0,0" fill="#3a3645" />
          <path d="M-23.9-375H0v354h-7l-17-19v-335H-23.9z" fill="#d6d4db" />
        </g>
        <g className="pencil" transform="translate(215.60000000000002 0)">
          <rect className="leg-pencil" x="0" y="-375" width="24" height="307" 
            style={{ transformBox: 'fill-box', transformOrigin: 'center bottom', transform: 'rotate(-0.339559rad)' }} fill="#d6d4db" />
          <g>
            <path d="M72-48c-0.5,0-3,5-3,5H39c0,0-2.5-5-3-5v-106h36C72-154,72-48,72-48z" />
            <rect x="47" y="-154" width="14" height="111" fill="#000" opacity="0.3" />
            <path d="M37.4-47.3l2.2,2.6c0.4,0.5,1,0.8,1.6,0.8c0.5,0,1-0.2,1.4-0.6l2.8-3.9c0.9-0.8,2.3-0.9,3.3-0.2l3.6,3.2c1,0.8,2.4,0.8,3.4,0l3.6-3.2c1-0.7,2.4-0.6,3.3,0.2l2.8,3.9c0.4,0.4,0.9,0.6,1.4,0.6c0.6,0,1.2-0.3,1.6-0.8l2.2-2.6c0.3-0.4,0.8-0.7,1.4-0.7L61.4-19.6c-4.8-1.9-10-1.9-14.8,0L36-48C36.6-48,37.1-47.7,37.4-47.3z" fill="#f7eecb" />
            <path d="M46.6-19.6c4.8-1.9,10-1.9,14.8,0L54,0L46.6-19.6z" />
          </g>
          <path d="M81-56H15c-1.7,0-3-1.3-3-3v-18c0-1.7,1.3-3,3-3h66c1.7,0,3,1.3,3,3v18C84-57.3,82.7-56,81-56z" fill="#d6d4db" />
          <circle cx="12" cy="-68" r="16" fill="#d6d4db" />
          <circle cx="12" cy="-68" r="9" fill="#3a3645" />
        </g>
        <g className="top" 
        transform="translate(113.30000000000001 17.5)">
          <path d="M19-422H9v-25c0-2.8-2.2-5-5-5h-8c-2.8,0-5,2.2-5,5v25h-10c-2.8,0-5,2.2-5,5l0.1,42l9.2,19.2c0.4,1,1.4,4,4,4h21.7c2.7,0,3.7-3,4.1-4L24-375v-42C24-419.8,21.8-422,19-422z" fill="#3a3645" />
          <circle cy="-386" r="9" fill="#d6d4db" />
        </g>
        <circle className="handle" r="10" />
        <circle className="handle" r="10" cx="269.56475847528884" cy="0" />
      </g>
    </svg>
    </Draggable> */}
    </div>
  );
};

export default Compass;