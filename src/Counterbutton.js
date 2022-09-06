import { useContext, useState } from "react";
import { CounterContext } from "./CounterContext";


export const CounterButton = () => {
    // const [currNum, totalNum] = useState(0);
    // const [incrementBy, setIncrementBy] = useState(1);
    const { numberOfclicks, increment } = useContext(CounterContext)
    const [ incrementNoby, setIncrementNoby] = useState(1)

    return(
        <>
        <p>You have clicked button {numberOfclicks} times.</p>
        <input type={Number} value={incrementNoby} onChange={e => setIncrementNoby(Number(e.target.value))} />
        <button onClick={() => increment(incrementNoby)}>Click</button>
        </>
    )
}