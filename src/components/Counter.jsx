import React, { useState } from "react";
import Button from "./Button";
import "../assets/styles.css";

export default function Counter() {
    const [count, setCount] = useState(0);

    let increment = () => {
        setCount(count + 1);
    }

    let decrement = () => {
        setCount(count - 1);
    }

    let multiply = () => {
        setCount(count * 2);
    }

    return(
        <div className="main">
            <h2>Counter</h2>
            <h3> {count} </h3>
            <Button title={"+"} action={increment} />
            <Button title={"-"} action={decrement} />
            <Button title={"Double"} action={multiply} />
        </div>
    )
}