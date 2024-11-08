import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [score, setScore] = useState(0);

    return (
        <UserContext.Provider value={{ username, setUsername, score, setScore }}>
            { children }
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext);
}