import React, { useEffect } from 'react';

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  
  // var x = "0"
  // var y = "0"
  
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = "0";
    if (endAngle >= startAngle) {
      largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    } else {
      largeArcFlag = (endAngle + 360) - startAngle <= 180 ? "0" : "1";
    }

  const d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
  ].join(' ');

  return d;
};

const ArcPath = () => {
  const arcPathData = describeArc(200, 100, 40, 0, 359.99);

  useEffect(() => {
    document.getElementById("arc1").setAttribute("d", arcPathData);
  }, []) 

  return (
    <></>
  );
};

export default ArcPath;
