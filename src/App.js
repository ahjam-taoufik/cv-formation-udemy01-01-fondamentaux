import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const RefInput = useRef();
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const HandleChange = (e) => {
    setValue(e.target.value);
    
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      setItems([...items, { id: new Date().getTime(), text: value }]);
    }
    setValue(null);
    RefInput.current.value = null;
  };

  const removeItem = (id) => {
     const itemsFilter= items.filter((item)=>item.id!== id)
     setItems(itemsFilter)
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <form onSubmit={HandleSubmit}>
          <input ref={RefInput} onChange={HandleChange}></input>
          <button>Add Todo </button>
        </form>
        <br />
        <ul>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <li style={{display: 'inline', marginRight:'15px'}} >{item.text}</li>
                <button onClick={() => removeItem(item.id)}>X</button>
              </div>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
