
import { useState } from 'react';
import './App.css';

const Clock=()=>{
    const [date,setDate]=useState(new Date())
  return(
    <>
    <p> {`${date}`}</p>
    <button onClick={()=>setDate(new Date)}>click</button>
    </>
  )
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Clock/>
          <Clock/>
      </header>
    </div>
  );
}
export default App;
