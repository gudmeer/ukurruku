const Header = () => {
  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      flex items-center gap-3
      px-4 py-3
      bg-black/70 backdrop-blur-md
    ">
      <img
        src="/images/logoo.jpg"
        alt="Ukurruku logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />
      <span className="font-extrabold tracking-widest text-lg md:text-xl">
        UKURRUKU
      </span>
    </header>
  )
}

export default Header
