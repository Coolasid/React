import { createContext, useState } from "react";
import { store } from "../store/Store";

export const ReducContex = createContext();

export const ReduxProvider = ({children}) =>{

    const [state, setState] = useState(store.getState());
    store.subscribe(() => {
      console.log(store.getState());

      //force your component to re-render

      setState(store.getState());

    });
    return <ReducContex.Provider value={state}>{children}</ReducContex.Provider>
}