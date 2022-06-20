import { createContext, useContext, useMemo, useReducer, useState } from 'react';

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

  const removeItem = (id) => {
    dispatch({ type: 'removItem', payload: id });
  };

  const onChangeValue = (value) => {
    return setInputValue(value);
  };

  const addItem=(e,RefInput)=>{
    e.preventDefault();
    if (inputValue) {
        dispatch({
          type: 'addTolist',
          payload: { id: new Date().getTime(), text: inputValue },
        });
      }
      onChangeValue(null);
      RefInput.current.value = null;
  }

//   const values =useMemo(() => {
//    return {
//     state,
//     dispatch,
//     inputValue,
//     onChangeValue,
//    }
//   }, [state,inputValue])

  const values = {
    state,
    dispatch,
    inputValue,
    onChangeValue,
    removeItem,
    addItem
   }
  

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
