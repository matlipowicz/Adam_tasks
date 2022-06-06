import { useState } from "react";

export const Drugi = ({ liczba }) => {
    const [counter, setCounter] = useState([]);

    const handleClick = (text) => {
        setCounter([(prev) => [...prev, text]]);
    };
    console.log(counter);

    return <div onClick={() => handleClick("text")}>x</div>;
};
