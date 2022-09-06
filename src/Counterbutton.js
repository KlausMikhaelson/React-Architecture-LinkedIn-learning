// import { useContext, useState } from "react";
// import { CounterContext } from "./CounterContext";
import { useRecoilState } from "recoil";
import { CounterState } from "./CounterState";
import { incrementBystate } from "./IncrementBystate";


export const CounterButton = () => {
    // const [currNum, totalNum] = useState(0);
    // const [incrementBy, setIncrementBy] = useState(1);
    const [ numberOfclicks, setNumberofClicks ] = useRecoilState(CounterState)
    const [ incrementNoby, setIncrementNoby] = useRecoilState(incrementBystate)

    return(
        <>
        <p>You have clicked button {numberOfclicks} times.</p>
        <input type="Number" value={incrementNoby} onChange={e => setIncrementNoby(Number(e.target.value))} />
        <button onClick={() => setNumberofClicks(numberOfclicks + incrementNoby)}>Click</button>
        </>
    )
}