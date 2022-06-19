import { useEffect, useState } from 'react';
import './App.css';

const Clock = ({isVisible}) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let time = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      setInterval(time);
    };
  });

  return (
    <>
      <h1>L'Heure Actuel est :</h1>
      {isVisible &&  <p>{`${date.toLocaleTimeString()}`}</p>}
    </>
  );
};


function App() {
   const[isVisible,setIsVisible]=useState(true)
   const toggleVisible=()=>{
     setIsVisible(!isVisible)
   }
   console.log(isVisible);
  return (
    <div className="App">
      <header className="App-header">
        {isVisible && <button onClick={toggleVisible}>Hide</button>}
        {!isVisible && <button onClick={toggleVisible}>Show</button>}
          <Clock isVisible />
      </header>
    </div>
  );
}
export default App;
