import { useState } from 'react';
import './App.css';

const libs = [
  {name:'React',href: 'https://reactjs.org'},
  {name:'Angular',href: 'https://angular.io'}
];

const Component = (props) => {
  return (
    <a
      className="App-link"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn {props.name}
    </a>
  );
};

function App() {
  const [values,setValues]=useState(libs)
  const [value,setValue]=useState(null)
  const HandleChange=(e)=>{
      setValue({...value,[e.target.name]:e.target.value})
  }
  const HandleSubmit=(e)=>{
       e.preventDefault()
        setValues([...values,value])
  }
   const list=values.map((val)=>{return<Component key={val.name} name={val.name} href={val.href} />})
 
  return (
    <div className="App">
      <header className="App-header">
          {list}
          <form onSubmit={HandleSubmit} >
          <input 
          placeholder='add name'
          name='name'
          onChange={HandleChange}
         />

         <input 
          placeholder='add link'
          name='href'
          onChange={HandleChange}
         />
           <button >submit</button>
          </form>
      </header>
    </div>
  );
}

export default App;
