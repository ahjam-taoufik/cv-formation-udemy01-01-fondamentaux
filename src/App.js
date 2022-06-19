import React from 'react';
import './App.css';



const Button=(props)=>{
   const {colorButton,children, ...other}=props
   const clasName=colorButton==='secondary' ? 'secondary' : 'primary'
  return (
    <button className={clasName} {...other} >{children}</button>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button  onClick={()=>console.log('I am first button')} >I am first button</Button>
        <Button colorButton='secondary'  onClick={()=>console.log('salam')} >Click me</Button>
        <Button >Click me</Button>
       
      </header>
    </div>
  );
}

export default App;
