import { createContext, useContext, useState } from 'react'
import { ScreenComponent } from '../constants'

const AppContext = createContext({})

export function AppProvider({
  children,
}) {
  const [currentScreen, setCurrentScreen] = useState(ScreenComponent.SCREEN_ONE)

  function updateScreen(screen) {
    setCurrentScreen(screen)
  }

  function updateScreenWithDelay(screen, delay) {
    setTimeout(() => {
      setCurrentScreen(screen);
    }, delay || 300)
  }

  return (
    <AppContext.Provider value={{
      currentScreen,
      updateScreen,
      updateScreenWithDelay,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const data = useContext(AppContext);
  return data;
};