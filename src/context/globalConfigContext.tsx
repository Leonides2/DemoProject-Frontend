import { createContext } from "react"


interface settings {
    isDarkMode: boolean,
    toggleMode: () => void,
    isModalDisable: boolean,
    toggleModalShow: () => void
}

export const GlobalConfigContext = createContext<settings | undefined>(undefined)
