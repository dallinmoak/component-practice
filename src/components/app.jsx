import React, { useState } from 'react';

import Settings from './settings.jsx';
import Info from './info.jsx';

export default function App() {
  const [ appRadius, setAppRadius ] = useState(0);

 
  return(
    <div className="component">
      <h1>Welcome to my App</h1>
      <div className="page-container">
        <Info radius={appRadius}/>
        <Settings radius={appRadius} setRadius={setAppRadius}/>
      </div>
    </div>
  );
}