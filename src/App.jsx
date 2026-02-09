import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Impostor from "./components/Impostor"
import SillonRojo from "./components/SillonRojo"

function App() {
  const [currentGame, setCurrentGame] = useState("home")

  // Captura el botón "atrás" del navegador
  useEffect(() => {
    const handlePopState = () => {
      setCurrentGame("home")
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  const goToGame = (game) => {
    window.history.pushState({ game }, "")
    setCurrentGame(game)
  }

  const goHome = () => {
    window.history.back()
  }

  const renderGame = () => {
    switch (currentGame) {
      case "impostor":
        return <Impostor onBack={goHome} />
      case "sillon-rojo":
        return <SillonRojo onBack={goHome} />
      default:
        return <Home onSelectGame={goToGame} />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      <main className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
        {renderGame()}
      </main>
    </div>
  )
}

export default App
