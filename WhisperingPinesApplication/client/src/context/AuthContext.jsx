import {createContext, useContext, useState, useEffect} from 'react';

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({token});
        }
    }, []);

    // when user logs in, add their jwt token to local storage
    const login = (token) => {
        localStorage.setItem('token', token);
        setUser({token});
    };

    // when user logs out, remove their jwt token from local storage
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}