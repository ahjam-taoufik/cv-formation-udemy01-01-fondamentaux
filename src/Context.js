import { createContext, useContext, useReducer } from "react";


export const Context=createContext()
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
          items: state.items.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };

 const Provider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initState);
 return(
     <Context.Provider value={{state,dispatch}} >{children}</Context.Provider>
 )
}

export default Provider;

