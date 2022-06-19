import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [name,setName]=useState(null)
  const [isVisible,setVisible]=useState(null)

  const HandleChange=(e)=>{
      setName(e.target.value)
  }


  useEffect(() => {
      setVisible(!!name)
      console.log('name : ',!!name);
  
  }, [name])
  

  return (
    <div className="App">
      <header className="App-header">
            {!isVisible && <p>enter your text </p>}
           <input onChange={HandleChange}></input>

            <h1>{name && `Learn ${name}`}</h1> 
          
      </header>
    </div>
  );
}

export default App;
