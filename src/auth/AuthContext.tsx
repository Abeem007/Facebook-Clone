import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '../firebase';

interface AuthContextType{
    user: User | null;
    loading: boolean;
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => onAuthStateChanged(auth, current => {
        setUser(current);
        setLoading(false)
    }), []);
    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=>useContext(AuthContext)