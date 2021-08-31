import React, { useState, useEffect } from 'react';

export default function Settings(props) {
  const [ radius, setRadius ] = useState(props.radius);

  function onRadiusChange(event){
    setRadius(event.target.value);
    props.setRadius(event.target.value);
  }

  return(
    <div className="component">
      <h1>Settings:</h1>
      <label htmlFor="settingsUnits" >
        Radius: <span className='settings-label-amount'>{radius}</span>
      </label>
      <input
        id="settingsUnits"
        type="range"
        min="0"
        max="500"
        value={radius}
        onChange={onRadiusChange}
      />
    </div>
  );
}