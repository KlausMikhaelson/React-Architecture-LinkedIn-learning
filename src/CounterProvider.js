import { useState } from "react";
import { CounterContext } from "./CounterContext";

export const CounterProvider = ({ children }) => {
    const [numberOfclicks, setNumberofClicks] = useState(0)
    // const  [incrementNoby, setIncrementNoby] = useState(1)

    const increment = incrementNoby => {
        setNumberofClicks(numberOfclicks + incrementNoby);
    }

    return (
        <CounterContext.Provider value={{ numberOfclicks, increment}}>
            {children}
        </CounterContext.Provider>
    )
}