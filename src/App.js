import { useContext, useRef } from 'react';
import './App.css';
import { Context } from './Context';

const Form = () => {
  const {onChangeValue,addItem } = useContext(Context);
  const RefInput = useRef();
  return (
    <form onSubmit={(e)=> addItem(e,RefInput)}>
      <input ref={RefInput} onChange={(e)=>onChangeValue(e.target.value)}></input>
      <button>Add Todo </button>
    </form>
  );
};

const Iterator = () => {
  const { state, removeItem } = useContext(Context);
  return (
    <ul>
      {state.items.map((item, index) => {
        return (
          <div key={index}>
            <li style={{ display: 'inline', marginRight: '15px' }}>
              {item.text}
            </li>
            <button onClick={() => removeItem(item.id)}>X</button>
          </div>
        );
      })}
    </ul>
  );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <br />
        <Iterator />
      </header>
    </div>
  );
}
export default App;
