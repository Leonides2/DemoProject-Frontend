import {useState } from "react";
import { GlobalConfigContext } from "./globalConfigContext";

interface globalProviderProps {
    children: React.ReactNode;
  }

export const GlobalConfigProvider: React.FC<globalProviderProps> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  
    const toggleMode = () => {
        setIsDarkMode(() => !isDarkMode);
    };

    return (
        <GlobalConfigContext.Provider value={{ isDarkMode, toggleMode }}>
          {children}
        </GlobalConfigContext.Provider>
      )
};