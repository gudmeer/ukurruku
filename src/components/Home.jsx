import { useState, useRef } from "react"

const games = [
  {
    id: "impostor",
    title: "El Impostor",
    icon: "",
    image: "/images/impostor.jpg",
    neon: "border-red-500 shadow-red-500/60"
  },
  {
    id: "sillon-rojo",
    title: "Sillon Rojo",
    icon: "",
    image: "/images/sillon-rojo.jpg",
    neon: "border-red-500 shadow-red-500/60"
  }
]

const Home = ({ onSelectGame }) => {
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const startX = useRef(0)
  const isDragging = useRef(false)

  const startDrag = (x) => {
    startX.current = x
    isDragging.current = true
  }

  const onDrag = (x) => {
    if (!isDragging.current) return
    setDragX(x - startX.current)
  }

  const endDrag = () => {
    if (!isDragging.current) return
    if (dragX < -120 && index < games.length - 1) {
      setIndex(index + 1)
    } else if (dragX > 120 && index > 0) {
      setIndex(index - 1)
    }
    setDragX(0)
    isDragging.current = false
  }

  return (
    <div className="relative w-full max-w-sm aspect-square">
      {games.map((game, i) => {
        const isActive = i === index
        const isNext = i === index + 1
        const isPrev = i === index - 1

        return (
          <div
            key={game.id}
            className="absolute inset-0 transition-all duration-300"
            style={{
              zIndex: isActive ? 20 : 10,
              transform: isActive
                ? `translateX(${dragX}px)`
                : isNext
                ? "translateX(18px) scale(0.95)"
                : isPrev
                ? "translateX(-18px) scale(0.95)"
                : "scale(0.9)",
              opacity: isActive || isNext || isPrev ? 1 : 0
            }}
            onTouchStart={(e) => startDrag(e.touches[0].clientX)}
            onTouchMove={(e) => onDrag(e.touches[0].clientX)}
            onTouchEnd={endDrag}
            onMouseDown={(e) => startDrag(e.clientX)}
            onMouseMove={(e) => onDrag(e.clientX)}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
          >
            <button
              onClick={() => onSelectGame(game.id)}
              className={`
                w-full h-full rounded-3xl overflow-hidden
                border-2 ${game.neon}
                shadow-xl bg-black
                cursor-grab active:cursor-grabbing
              `}
            >
              <img
                src={game.image}
                alt={game.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 text-center">
                <span className="text-6xl">{game.icon}</span>
                <span className="text-white text-2xl font-extrabold">
                  {game.title}
                </span>
                <span className="text-xs text-gray-300">
                  Arrastra ← →
                </span>
              </div>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Home
