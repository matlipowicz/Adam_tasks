/*
! useState

    Ten hook jak każde inne jest funkcją dla tego można je używać w komponentach funkcyjnych. Sam useState zmienia stan komponentu po jego ustawieniu. 

    --> Przykład

    import React, {useState} from 'react'

    function stateOfComponent(){
        const [count1, setCounter] = useState(0);

        return(
            <>
            <p>{count1}</p>
            <button onClick = {() => setCounter(count1 + 1)}>Click me</button>
            </>
        )
    };

    * W powyższym przykładzie nastepuje aktualizacja stanu komponentu po kliknięciu na button. 
    * Hook zwraca obiekt z parą wartości pierwsza z nich to jest obecny stan komponentu (count1 w tym przypadku) oraz drugą wartość, która aktualizuję ten stan (setCounter). 
    * Na poczatku trzeba ustalić początkowy stan komponenetu który pozostaje tylko do 1 przerenderowania

! useEffect

    - W przypadku tego hooka wskazujemy na to, że dany kompoment musi wykonać kod po wyrenderowaniu.  
    - Hook useEffect przyjmuję też drugi parametr w postaci tablicy [], do której przekazujemy wartości, które po zmianie powodują uruchomienie hooka. Bez tego wykonuję się cały czas nawet gdy nie jest zmieniony. Czyli gdy źródło naszego komponentu się zmienia to wtedy useEffect jest uruchamiany.

    --> Przykład

       import React, {useState, useEffect} from 'react'

    function stateOfComponent(){
        const [count1, setCounter] = useState(0);

        useEffect(() => {
            setTimeout(() =>{
                setCounter(69)
                console.log("Po 2 sekundach")
            }, 2000);

            return () =>{
                console.log("Cleaned up!")
            }
            }, []);
        })

        return(
            <>
            <p>{count1}</p>
            <button onClick = {() => setCounter(count1 + 1)}>Click me</button>
            </>
        )
    };

        * Ten hook po wyrenderowaniu komponentu ustawia counter na liczbę 69
        * Przekazana została tablica zależności (pusta) to znaczy, że wykona się po wyrenderowaniu, jeżeli ustawionoby dane źródło, które się zmienia to wykonywałoby się tylko wtedy
        * Dzięki temu hookowi możemy też wykonać tzw. "Clean-up" po czymś co wcześniej zostało wykonane i wtedy wykona się kod który przekazaliśmy w funkcji 
        * Kiedy komponent zostaje odmontowany (unmounted) to ten hook zwróci nam cały czas "clean-up"

! useRef

        - Ten hook zwraca mutowalny obiekt gdzie właściwość .current jest to wartosć obecna przekazywana jako argument
        - Hook ten w przeciwieństwie do useState nie powoduje ponownego wyrenderowania komponentu
        - Tak jak useState przetrzymuję poprzednią wartosć, ale jak wyżej wspomniałem nigdy nie spowoduję ponownego przerenderowania komponentu
        - W głównej mierze wykorzystywany aby odnieść się do elementów w HTML-u. Przekazujemy jego content przez atrybut ref ={naszHook}.


        Przykład

    import React, { useState, useRef } from "react";

        const ExampleRef = () => {
            const [myNum, setMyNum] = useState(0);

            const refOne = useRef();
            const refTwo = useRef();

            const addition = () => {
                console.log("It's");
                console.log(refOne.current);
                {
                    refOne.current.style.width = "350px";
                }
            };

            const substract = () => {
                console.log("working!");
                console.log(refTwo.current);
            };

            return (
                <>
                    <h1>Use case of useRef hook</h1>

                    <input ref={refOne} value={myNum} type="number" onChange={(e) => e.target.value} />
                    <input ref={refTwo} value={myNum} type="text" onChange={(e) => e.target.value} />

                    <h3>Value is: {myNum}</h3>

                    <button onClick={() => addition()}>Plus</button>
                    <button onClick={() => substract()}>Minus</button>
                </>
            );
        };

        export default ExampleRef;

        * Powyższy przykład pokazuję jak można wykorzystać hook useRef, poprzez brak rerenderowania komponentu
        * Dzięki temu hookowi możemy odnieść się do danego elementu w html-u i nim manipulować 
        * Właściwość .current to obecnie przekazywana wartość elementu. 


! useMemo

        - W przypadku tego hooka, który zwraca zapamiętaną wcześniej wartość. 
        - Oblicza wartości wtedy gdy zmieni się zmienna w tablicy zależności [] 
        - W przeciwieństwie do useEffect, które wykonuję się po ponownym wyrenderowaniu komponentu, chyba, że ustawimy coś w tablicy zależności, useMemo wykonuję się tylko i wyłącznie po zmianie w tablicy zależności

        Przykład

       import React, { useState, useMemo } from "react";

            const ExampleRef = () => {
                const [myNum, setMyNum] = useState(0);

                function square(num) {
                    return num * num;
                }

                const numToSquare = useMemo(() => {
                    return square(myNum);
                }, [myNum]);

                return (
                    <>
                        <h1>Use case of useRef hook</h1>

                        <input value={myNum} type="number" onChange={(e) => e.target.value} />
                        <input value={myNum} type="text" onChange={(e) => e.target.value} />

                        <h3>
                            Value is: {myNum} and {numToSquare}
                        </h3>

                        <button onClick={() => setMyNum(myNum + 1)}>Plus</button>
                        <button onClick={() => setMyNum(myNum - 1)}>Minus</button>
                    </>
                );
            };

            export default ExampleRef;

        * Powyższy przykład przedstawia prosty sposób na optymalizację działania komponentu, który nie musi od nowa renderować cały komponent
        * Używając useMemo, które zapamiętuje poprzednią wartość i pozwala na wykonanie danej części kodu tylko po zmianie w tablicy zależności. Tym właśnie różni się od useEffect, który nie ważne czy z pustą czy z jakąś wartością w tablicy zależnośći wykonywał się po wyrenderowaniu


! useCallback

            - Hook useCallback zwraca zapamiętaną funkcję zwrotną. Zmiana tej funkcji następuję tylko wtedy, gdy zmieni się zależność w tablicy. 
            - React domyślnie przy zmianie w komponencie nadrzędny, przerenderowywuję ponownie jego dzieci czyli pozostałe komponenty w nim wystepujące. HOOK useCallback ZAPOBIEGA PONOWNEMU RENDERWANIU DZIECI KOMPONENTU NADRZĘDNEGO. 
            - Tak samo jak useMemo hook jest funkcją optymalizacyjną, natomiast róźni się tym, że useMemo zwaraca tylko to co po returnie, a nie całą funkcję jak useCallback
*/

//! Ex.1

// import React, { useState } from "react";

// const initialData = {
//     human: {
//         sex: "man",
//         surname: "Detic",
//     },
//     accountBalance: 1000,
// };

// function ShowData() {
//     const [currentState, setCurrentState] = useState(initialData);

//     function handleSexChange() {
//         setCurrentState((prev) => ({
//             ...prev,
//             human: {
//                 sex: prev.human.sex === "man" ? "woman" : "man",
//             },
//         }));
//     }

//     function handleBuy() {
//         setCurrentState((prev) => ({
//             ...prev,
//             accountBalance: prev.accountBalance - 500,
//         }));
//     }
//     function handleSell() {
//         setCurrentState((prev) => ({
//             ...prev,
//             accountBalance: prev.accountBalance + 500,
//         }));
//     }

//     return (
//         <>
//             <p>{currentState.human.sex}</p>
//             <p>{currentState.accountBalance}</p>
//             <button onClick={() => handleSexChange()}>Change sex</button>
//             <button onClick={() => handleBuy()}>Buy</button>
//             <button onClick={() => handleSell()}>Sell</button>
//         </>
//     );
// }

// export default ShowData;

//! Ex.2

/*
 * Chcąc przekazać dane zczytane dane z zewnętrzenego API trzeba przemapować otrzymaną bazę, uwcześnie tworząc komponent ("child") i przekazać w postaci propsa to co nas interesuję
 * Propsy: działają jak argumenty funkcji. Tworzymy dowolną nazwę jako atrybut tagu i potem w komponencie dziecko przekazujemy propsa przez: (props.nazwaPropsa) do elementów które nam odpowiadają
 */
// import React, { useState, useEffect } from "react";
// import Post from "../Tasks-subcomponent/Post";

// function Posts() {
//     const [data, setData] = useState([]);

//     const getData = async () => {
//         try {
//             const url = "https://jsonplaceholder.typicode.com/posts";
//             const response = await fetch(url);
//             const data = await response.json();
//             setData(data);
//             console.log(data);
//         } catch (err) {
//             alert(err);
//         }
//     };

//     useEffect(() => {
//         getData();
//     }, []);

//     return (
//         <>
//             <div>
//                 {data.map((el, index) => (
//                     <Post key={index} post={el.body}></Post>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Posts;

//! Ex.3

//!PRZEJRZYJ

// import React from "react";
// import Row from "./Table-row";

// const Table = ({ data, width = "auto", height = "auto" }) => {
//     const columns = ["name", "username", "email", "phone"];

//     return (
//         <>
//             <table className="table" style={{ width: width, height: height }}>
//                 <thead>
//                     <tr>
//                         {columns.map((item, index) => {
//                             return (
//                                 <th key={index} style={{ padding: "5px" }}>
//                                     {item.toUpperCase()}
//                                 </th>
//                             );
//                         })}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((row) => (
//                         <Row data={row} columns={columns} />
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// };

// export default Table;
