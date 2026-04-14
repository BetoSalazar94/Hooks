
import React, { createContext, useEffect, useState, type PropsWithChildren } from 'react'
import { users, type User } from '../data/user-mock.data';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    authStatus: AuthStatus;
    user: User | null;
    isauthenticated: boolean;
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({
} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    //  const [name, setname] = useState("Betito S");

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        console.log(userId);
        const user = users.find((u) => u.id === userId);
        if (user) {
            setUser(user);
            setAuthStatus('authenticated');
            localStorage.setItem('user', userId.toString());
            return true;
        }
        setUser(null);
        setAuthStatus('not-authenticated');

        return false;
    }

    const handleLogOut = () => {
        setUser(null);
        setAuthStatus('not-authenticated');
        console.log("Logout");
        localStorage.removeItem('user');
    }

    useEffect(() => {
        console.log(localStorage.getItem('user')?.toString());
        const userId = localStorage.getItem('user')?.toString();
        if (userId) {
            handleLogin(Number(userId));
        }
        else {
            handleLogOut();
        }
    }, []);


    return (
        <UserContext value={{
            authStatus: authStatus,
            isauthenticated: authStatus === 'authenticated',
            user: user,
            login: handleLogin,
            logout: handleLogOut
        }}

        >{children}</UserContext>
    );

}
