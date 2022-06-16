import { useState, useEffect } from "react";

import { useUserContext } from "../../Context/UserContext";

const initialData = {
    human: {
        sex: "man",
        surname: "Detic",
    },
    accountBalance: 1000,
};

// const useGetDataFromAPI = (link) => {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);
//         fetch(link)
//             .then((res) => res.json())
//             .then((data) => setData(data));
//         setIsLoading(false);
//     }, [link]);

//     return {
//         isLoading,
//         data,
//     };
// };

//! Przy obiektach jako initial value w stanie trzeba rozbijać dla zmiany właściwości
function Show() {
    const { isLoggedIn, setIsLoggedIn } = useUserContext();

    const [state, setState] = useState(initialData);

    useEffect(() => {
        setIsLoggedIn(true);
    }, []);
    console.log("logged IN", isLoggedIn);

    const handleSexChange = () => {
        setState((prev) => ({
            ...prev,
            human: {
                //...prev.human,
                sex: "woman",
            },
        }));
    };

    const handleBuy = () => {
        setState((prev) => ({
            ...prev,
            accountBalance: prev.accountBalance - 500,
        }));
    };

    const handleSell = () => {
        setState((prev) => ({
            ...prev,
            accountBalance: prev.accountBalance + 500,
        }));
    };

    return (
        <>
            <p>Account balance: {state.accountBalance}</p>
            <p>Sex: {state.sex}</p>
            <button onClick={handleSexChange}>Toogle sex</button>
            <button onClick={handleBuy}>Buy</button>
            <button onClick={handleSell}>Sell</button>
        </>
    );
}

export default Show;
