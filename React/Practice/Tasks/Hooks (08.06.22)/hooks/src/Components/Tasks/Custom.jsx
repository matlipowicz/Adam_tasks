//! Ex.5

import React, { useState, useRef } from "react";

const UseClickOutside = () => {
    const [state, setState] = useState(false);

    const buttonRef = useRef();

    const click = (e) => {
        if (buttonRef.current && !buttonRef.current.contains(e.target)) {
            alert("You clicked outside!");
        }
    };
    return (
        <>
            <div className="modal-box">
                <button onClick={click}>Close me</button>
                <div>
                    <h1>It's modal</h1>
                    <p>Now you should close me</p>
                </div>
            </div>
        </>
    );
};

export default UseClickOutside;
