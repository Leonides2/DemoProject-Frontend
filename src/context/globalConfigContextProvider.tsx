import {useState } from "react";
import { GlobalConfigContext } from "./globalConfigContext";

interface globalProviderProps {
    children: React.ReactNode;
  }

export const GlobalConfigProvider: React.FC<globalProviderProps> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
    const [isModalShow, setModalShow] = useState<boolean>(true);
  
    const toggleMode = () => {
        setIsDarkMode(() => !isDarkMode);
    };

    const toggleModalShow = () =>{
        setModalShow(()=> !isModalShow)
    }

    return (
        <GlobalConfigContext.Provider value={{ isDarkMode, isModalShow,toggleMode, toggleModalShow}}>
          {children}
        </GlobalConfigContext.Provider>
      )
};