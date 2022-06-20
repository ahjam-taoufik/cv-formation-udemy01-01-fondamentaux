import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';

const initState = {
  value: null,
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'onChangeInput':
      return {
        ...state,
        value: action.payload,
      };
    case 'addTolist':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'removItem':
      return {
        ...state,
        // items: action.payload,
        items:state.items.filter((item) => item.id !== action.payload)

      };
    default:
      return state;
  }
};


function App() {
  const RefInput = useRef();
  const [state, dispatch] = useReducer(reducer, initState);

  const HandleChange = (e) => {
    dispatch({ type: 'onChangeInput', payload: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (state.value) {
      dispatch({
        type: 'addTolist',
        payload: { id: new Date().getTime(), text: state.value },
      });
    }
    dispatch({ type: 'onChangeInput', payload: null });
    RefInput.current.value = null;
  };


  const removeItem = (id) => {
    // const itemsFilter = state.items.filter((item) => item.id !== id);
    dispatch({ type: 'removItem', payload: id });
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
      </header>
    </div>
  );
}
export default App;
