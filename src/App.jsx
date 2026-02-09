import { useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Impostor from "./components/Impostor"
import SillonRojo from "./components/SillonRojo"

function App() {
  const [currentGame, setCurrentGame] = useState("home")

  const renderGame = () => {
    switch (currentGame) {
      case "impostor":
        return <Impostor onBack={() => setCurrentGame("home")} />
      case "sillon-rojo":
        return <SillonRojo onBack={() => setCurrentGame("home")} />
      default:
        return <Home onSelectGame={setCurrentGame} />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* HEADER GLOBAL */}
      <Header />

      {/* CONTENIDO */}
      <main className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
        {renderGame()}
      </main>
    </div>
  )
}

export default App
