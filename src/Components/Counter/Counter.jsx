import React, {useState} from "react";
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState('');

    const increament = (e) => {
        if (count < limit) {
            setCount(count+1)
            console.log(e);
        }
    }

    const decreament = () => {
        if (count > -1 * limit) {
            setCount(count-1)
        }
    }

    const changeColor = () => {
        if (count > 5) return "green"
        if (count < -5) return "red"
    }

    const inputLimit = (e) => {
        setLimit(e.target.value);
    }

    return (
        
        <div>
            <div>
                <label>Limit : </label>
                <input className="input" type="number" value={limit} placeholder="set limitation for counter" onChange={(e) => inputLimit(e)} />
            </div>
            <div className="counter" style={{backgroundColor:changeColor()}}>
                <div className="counter-buttons">
                    <button onClick={(e) => increament(e)}>+</button>
                    <div className="count">{count}</div>
                    <button onClick={decreament}>_</button>
                </div>
                <button className="resetBtn" onClick={() => {setLimit(0);setCount(0)}}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;