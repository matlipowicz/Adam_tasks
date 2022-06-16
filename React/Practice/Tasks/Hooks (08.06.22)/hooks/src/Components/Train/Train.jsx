import React, { useState, useEffect } from "react";

// function Przyklad() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Nacisnieto {count} razy</p>
//             <button onClick={() => setCount(count + 1)}>Nacisnij mnie</button>
//         </div>
//     );
// }

function Przyklad() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(69);
            console.log("Po sekundzie");
        }, 1000);
    }, []);

    return (
        <div>
            <p>Licznik ma wartość {count} razy</p>
        </div>
    );
}

export default Przyklad;
