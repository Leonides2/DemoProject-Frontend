import {useState } from "react";
import { GlobalConfigContext } from "./globalConfigContext";

interface globalProviderProps {
    children: React.ReactNode;
  }

export const GlobalConfigProvider: React.FC<globalProviderProps> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>( window.matchMedia('(prefers-color-scheme: dark)').matches ?  true: false);
    const [isModalDisable, setModalShow] = useState<boolean>(true);
  
    const toggleMode = () => {
        setIsDarkMode(() => !isDarkMode);
    };

    const toggleModalShow = () =>{
        setModalShow(()=> !isModalDisable)
    }

    return (
        <GlobalConfigContext.Provider value={{ isDarkMode, isModalDisable,toggleMode, toggleModalShow}}>
          {children}
        </GlobalConfigContext.Provider>
      )
};