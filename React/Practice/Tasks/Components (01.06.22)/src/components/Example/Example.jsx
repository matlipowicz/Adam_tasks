// !Hooki
// import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

// const initialData = {
//     human: {
//       sex: "man",
//       surname: "Detic",
//     },
//     accountBalance: 1000,
//   };

// const useCustomHook = () => {
//     const [count, setCount] = useState(initialData);
// // ! Zwrócic nowy obiekt
// //! Zabawa z destrukutryzacja
//     const handleSexChange=()=>{
//         setCount(prev=>({
//             ...prev,
//             human: {
//                 ...prev.surname,
//       sex: "man",
//     },
//         }))
//     }
// // !Zadanie.2
//     useEffect(()=>{
//         getData().then(data=>setData(data))
//     })

//     const inputEl = useRef(null);

//     const x = useMemo(() => [], []);

//     const onDivClick = useCallback(() => {
//         inputEl.current.focus();
//     }, []);

//     return { onDivClick, inputEl, count, setCount };
// };

// //! Model View Controller (MVC)
// //! Wąsate nawaisy pozwalaja na wstrzykniecie JS-a
// export const Example = () => {
//     const { onDivClick, inputEl, count, setCount } = useCustomHook();

//     return (
//         <div onClick={onDivClick}>
//             <input ref={inputEl} type="text" />
//             <p>Nacisnieto {count} razy</p>
//             <button onClick={() => setCount((prev) => prev + 1)}>Nacisnij mnie</button>
//             {true ? <div></div> : null}
//         </div>
//     );
// };
