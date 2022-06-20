import { createContext, useContext, useReducer, useState } from 'react';

export const Context = createContext();
const initState = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
   
    case 'addTolist':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'removItem':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [inputValue, setInputValue] = useState(null);

  const onChangeValue = (value) => {
    return setInputValue(value);
  };

  return (
    <Context.Provider value={{ state, dispatch, inputValue,onChangeValue }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
