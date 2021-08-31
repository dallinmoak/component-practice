import React, { useEffect, useState } from "react";

export default function Info(props) {
  const [ radius, setRadius ] = useState(props.radius);

  useEffect(() => {
    setRadius(props.radius);
  }, [props.radius]);

  function getCircumference(radius){
    return radius == 0 ? 0 : (2*Math.PI*radius).toFixed(3);
  }

  return(
    <div className="component">
      <h1>Info</h1>
      <div className="info-message">
        <p>if a circle has a radius of {radius} units...</p>
        <p>it'll have a circumference of {getCircumference(radius)} units.</p>
      </div>
    </div>
  );
}