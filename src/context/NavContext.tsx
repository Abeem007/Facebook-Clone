import { createContext, useContext, useState } from "react";

interface NavContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}
const NavContext = createContext<NavContextType | undefined>(undefined);
export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');
    return (
        <NavContext.Provider value={{activeTab,setActiveTab}}>
            {children}
        </NavContext.Provider>
    )
}
export const useNav = () => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error ('useNav must be used within a NavProvider')
    }
    return context;
}