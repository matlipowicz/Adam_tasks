//! Components
// import React from "react";

// const Fruit = () => {
//     function handleClick(name) {
//         console.log(name);
//     }

//     //? CZEMU W JAKO PROPS MAMY KOLEJNĄ F.STRZAŁKOWĄ
//     return (
//         <div>
//             <button onClick={() => handleClick("Pomarańcza")}>Pomarańcz</button>
//             <button onClick={() => handleClick("Jabłko")}>Jabłko</button>
//         </div>
//     );
// };
// export default Fruit;

//! Hooki
// import React, { useState } from "react";

// function Example() {
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);

//     return (
//         <div>
//             <p>Nacisnieto {count1} razy</p>
//             <button onClick={() => setCount1(count1 + 1)}>Nacisnij mnie</button>
//             <p>Nacisnieto {count2} razy</p>
//             <button onClick={() => setCount2(count2 + 1)}>Nacisnij mnie</button>
//         </div>
//     );
// }

// export default Example;

// import React, { useState } from "react";

// function Counter() {
//     const [addCount1, setCount1] = useState(0);

//         return (
//             <div>
//                 <button onClick={() => setCount1(addCount1 + 1)}>+</button>
//                 <div>
//                     <p>{addCount1}</p>
//                 </div>
//                 <button onClick={() => setCount1(addCount1 - 1)}>-</button>
//             </div>
//         );
//     }
// }

// export default Counter;
