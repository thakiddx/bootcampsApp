import { createContext, useState } from "react";

export const primaryContext = createContext();

export const PrimaryProvider = ({children}) => {

    // state
    const [camps, setCamps] = useState([]);
    const [states, setStates] = useState([]);

    // return provider div
    return (
        <primaryContext.Provider value={{ 
            camps, 
            setCamps ,

            states,
            setStates
            
        }}  >
            {children}
        </primaryContext.Provider>
    )
}