import { Draggable } from 'drag-react';
import React, { useState } from 'react';

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    // var x = "0"
    // var y = "0"

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = "0";
      if (endAngle >= startAngle) {
        largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      } else {
        largeArcFlag = (endAngle + 360) - startAngle <= 180 ? "0" : "1";
      }

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;     
}

const Compass2 = () => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [pointA] = useState({ x: 0, y: 0})
  const [pointC] = useState({ x: 100, y: 0})

  const handleScaleChange = (event) => {
    const newScale = parseFloat(event.target.value);
    setScale(newScale);
  };

  const handleRotationChange = (event) => {
    const v = event.target.value;
    document.getElementById("arc1").setAttribute("d", describeArc(150, 100, 40, v, 359.99));
    document.getElementById("arc2").setAttribute("d", describeArc(0, 0, 100, v, 359.99));

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
          step="0.05"
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
          max="359"
          step="0.99"
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
          <g>
            <path d={`M${pointA.x} ${pointA.y} L50 100 L${pointC.x} ${pointC.y}`} stroke="black" fill="transparent" />
            <path id="arc2" fill="transparent" stroke="#446688" stroke-width="1" display="none"/>
          </g>
        </svg>        
      </Draggable>
    </div>
  );
};

export default Compass2;
