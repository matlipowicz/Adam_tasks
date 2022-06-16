import React from "react";

const Fruit = () => {
    function getName(name) {
        console.log(name);
    }

    return (
        <div>
            <button onClick={() => getName("Pomarańcz")}>Orange</button>
            <button onClick={() => getName("Gruszka")}>Pear</button>
            <button onClick={() => getName("Truskawka")}>Strawberry</button>
        </div>
    );
};

export default Fruit;
