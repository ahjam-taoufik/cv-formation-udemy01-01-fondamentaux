import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const RefInput = useRef();
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const HandleChange = (e) => {
    setValue(e.target.value);
    setIsEditing(!!value);
    setTimeout(() => {
      setIsEditing(false);
    }, 2000);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      setItems([...items, value]);
    }
    setValue(null);
    RefInput.current.value = null;
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={HandleSubmit}>
          <input ref={RefInput} onChange={HandleChange}></input>
          <button>Add Todo </button>
        </form>
      </header>
    </div>
  );
}

export default App;
