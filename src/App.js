
import { useEffect, useState } from 'react';
import './App.css';

const Clock=()=>{
    const [date,setDate]=useState(new Date())

useEffect(() => {
  let time=setInterval(()=>{
      setDate(new Date());
  },1000)

   return ()=>{
    setInterval(time)
   }
  
})

  return(
    <>
    <p> {`${date.toLocaleTimeString()}`}</p>
    </>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Clock/>
      </header>
    </div>
  );
}
export default App;
