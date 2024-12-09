import { createContext } from "react"


interface settings {
    isDarkMode: boolean,
    toggleMode: () => void
}

export const GlobalConfigContext = createContext<settings | undefined>(undefined)
