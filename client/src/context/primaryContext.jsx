import { createContext, useState } from "react";

export const primaryContext = createContext();

export const PrimaryProvider = ({children}) => {

    // state
    const [camps, setCamps] = useState([]);
    const [states, setStates] = useState([]);

    // return provider div
console.log(states);

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
export default PrimaryProvider;