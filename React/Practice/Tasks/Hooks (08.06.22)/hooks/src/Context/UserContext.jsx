import { useState, createContext, useContext } from "react";
//! sprawdz podpowiedzi po najechaniu na hooka
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    const ctx = useContext(UserContext);

    if (!ctx) {
        throw new Error("Component isn't wrapped in UserContext");
    }
    return ctx;
};
