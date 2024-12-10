import { createContext } from "react"


interface settings {
    isDarkMode: boolean,
    toggleMode: () => void,
    isModalShow: boolean,
    toggleModalShow: () => void
}

export const GlobalConfigContext = createContext<settings | undefined>(undefined)
