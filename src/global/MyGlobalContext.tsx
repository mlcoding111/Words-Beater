import { createContext, useContext} from 'react'

export type GlobalContent = {
    gameStatus: string
    setGameStatus: (b: string) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
    gameStatus: "Menu", // set a default value
    setGameStatus: () => {},
})


export const useGlobalContext = () => useContext(MyGlobalContext)
