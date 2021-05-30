import React, { useState } from "react";


function App() {
  const [time,setCount] = useState(new Date().toLocaleTimeString());
  setInterval(updateTime,1000);
  function updateTime(){
    setCount(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h1>{[time]}</h1>
      <button onClick={updateTime}>⌚Time⌚</button>
    </div>
  );
}

export default App;
