import { useState } from "react";

/*CATEGORÍAS*/
const categorias = {

    Distritos: [
    "Miraflores", "San Isidro", "Barranco",
    "Surco", "La Molina", "San Borja",
    "Jesus Maria", "Lince", "Magdalena del Mar",
    "Pueblo Libre", "Breña", "Cercado de Lima",

    "San Juan de Lurigancho", "San Juan de Miraflores",
    "Villa El Salvador", "Villa Maria del Triunfo",
    "Ate", "Santa Anita", "El Agustino",

    "Los Olivos", "Independencia", "Comas",
    "Carabayllo", "Puente Piedra",

    "Chorrillos", "San Miguel", "Callao",
    "Bellavista", "La Perla", "La Punta",

    "Rimac", "Ancón", "Santa Rosa",
    "Lurin", "Pachacamac", "Cieneguilla",
    "Chaclacayo"
  ],

    Comidas: [
    "Ceviche", "Lomo saltado", "Ají de gallina",
    "Arroz con pollo", "Anticuchos", "Causa limeña",
    "Rocoto relleno", "Papa a la huancaína",
    "Tacu tacu", "Seco con frejoles",
    "Chaufa", "Pollo a la brasa",
    "Hamburguesa", "Pizza", "Hot dog",
    "Papas fritas", "Nuggets", "Alitas BBQ",
    "Sandwich", "Tacos", "Burritos",
    "Sushi", "Ramen", "Paella",
    "Lasagna", "Spaghetti", "Risotto",
    "Curry", "Pad thai", "Falafel",
    "Kebab",
    "Helado", "Torta", "Queque",
    "Brownie", "Donas", "Cupcake",
    "Churros", "Pie de limón",
    "Galletas", "Chocolate", "Papas lays",
    "Cancha", "Maní", "Palomitas",
    "Nachos"
  ],

  Países: [
    "Perú", "Argentina", "Brasil", "Chile", "Colombia",
    "México", "Estados Unidos", "Canadá", "España",
    "Francia", "Italia", "Alemania", "Reino Unido",
    "Portugal", "Países Bajos", "Bélgica", "Suiza",
    "Japón", "China", "Corea del Sur", "India",
    "Australia", "Nueva Zelanda", "Rusia",
    "Egipto", "Sudáfrica", "Marruecos",
    "Lima", "Cusco", "Arequipa", "Trujillo", "Buenos Aires", "Córdoba", "Santiago",
    "Bogotá", "Medellín", "Cartagena", "Ciudad de México", "Guadalajara", "Monterrey", "Nueva York", "Los Ángeles", "Miami",
    "Toronto", "Vancouver",
    "Madrid", "Barcelona", "Sevilla",
    "París", "Lyon", "Marsella",
    "Roma", "Milán", "Venecia", "Berlín", "Múnich",
    "Londres", "Manchester", "Lisboa", "Oporto",
    "Ámsterdam", "Bruselas",
    "Zúrich", "Ginebra", "Tokio", "Osaka", "Kioto",
    "Seúl", "Busan",
    "Pekín", "Shanghái",
    "Bangkok", "Singapur",
    "Sídney", "Melbourne",
    "El Cairo", "Casablanca",
    "Dubái", "Abu Dabi",
    "Estambul", "Jerusalén"
  ],

  Objetos: [
    "Celular", "Laptop", "Silla", "Mesa", "Reloj",
    "Mochila", "Televisor", "Audífonos", "Cámara",
    "Control remoto", "Mouse", "Teclado", "Monitor",
    "Botella", "Vaso", "Taza", "Plato",
    "Cuaderno", "Lapicero", "Libro", "Calculadora",
    "Llaves", "Billetera", "Lentes", "Gorra",
    "Paraguas", "Linterna", "Cargador", "Cable USB",
    "Ventilador", "Almohada", "Colchón", "Escoba",
    "Cepillo", "Peine", "Espejo", "Toalla",
    "Maleta", "Casaca", "Zapatillas", "Sandalias",
    "Cojín", "Alfombra", "Cortina", "Cuadro", "Marco",
    "Reloj de pared", "Calendario", "Pelota", "Raqueta", 
    "Bate", "Disco frisbee", "Patineta", "Casco de bicicleta", 
    "Candado", "Cadena", "Cinta adhesiva", "Pegamento",
    "Tijeras", "Cúter", "Engrapadora", "Perforadora",
    "Clips", "Post-it", "Imán", "Maceta", "Florero", 
    "Pala", "Rastrillo", "Manguera",

  ],

  Perucito: [
    "Magaly Medina", "Gisela Valcárcel", "Chibolin", "Pedro Castillo", 
    "Makanaki", "Chupetin Trujillo", "La pantera del callao", "Sideral",
    "Timoteo", "María Pia", "Jorge Luna", "Ricardo Mendoza", "Tapir 590", "Tongo",
    "Yahaira Plasencia", "Tilsa Lozano", "Melissa Paredes", "Beto Ortiz", 
    "Cristorata", "Zully", "Milenka Nolasco", "Carlos Vilchez", "Nicola Porcella",
    "Patricio Parodi", "Flavia Laos", "Natalia Malaga", "GlogloKing", 
    "Cesár Acuña", "Lopez Aliaga", "Martin Vizcarra",
    "Alberto Fujimori", "Alan Garcia", "Marina Gold", "La Tigresa del Oriente", 
    "Susy Díaz", "Erick Elera", "Don Gilverto",
    "Abimael Guzmán", "Cachín", "Tony de Pataclaun", "Neutro", 
    "Dialis", "Kingteka", "Zumba", "Jaime Bayly", "Cesár Vallejo",
    "Mario Vargas Llosa", "Gian Marco", "Cristhian Dominguez", 
    "Keiko Fujimori", "Montesinos", "Melcochita"
  ],

   Futbolistas: [
    "Erling Haaland", "Kevin De Bruyne", "Mohamed Salah",
    "Bukayo Saka", "Son Heung-min", "Bruno Fernandes",
    "Marcus Rashford", "Virgil van Dijk", "Alisson Becker",

    "Jude Bellingham", "Vinícius Jr.", "Rodrygo",
    "Robert Lewandowski", "Pedri", "Gavi",
    "Antoine Griezmann", "João Félix", "Thibaut Courtois",

    "Kylian Mbappé", "Ousmane Dembélé", "Achraf Hakimi",
    "Marquinhos", "Gianluca Donnarumma", "Jonathan David",
    "Wissam Ben Yedder",

    "Harry Kane", "Jamal Musiala", "Victor Osimhen",
    "Rafael Leão", "Lautaro Martínez", "Paulo Dybala",
    "Cristiano Ronaldo", "Neymar Jr.", "Lionel Messi",

    "Pelé", "Diego Maradona", "Johan Cruyff",
    "Zinedine Zidane", "Ronaldinho",
    "Ronaldo Nazário", "Franz Beckenbauer",
    "Andrés Iniesta", "Xavi Hernández",

    "Paolo Guerrero", "Jefferson Farfán", "Gianluca Lapadula",
    "Pedro Gallese", "Christian Cueva", "Renato Tapia",
    "André Carrillo", "Yoshimar Yotún",
    "Edison Flores", "Luis Advíncula", "Sergio Peña"
  ],

  Celebridades: [
    "Leonardo DiCaprio", "Brad Pitt", "Tom Cruise",
    "Johnny Depp", "Robert Downey Jr.", "Chris Evans",
    "Chris Hemsworth", "Dwayne Johnson", "Keanu Reeves",
    "Will Smith", "Morgan Freeman", "Samuel L. Jackson",
    "Scarlett Johansson", "Angelina Jolie", "Margot Robbie",
    "Natalie Portman", "Emma Stone", "Anne Hathaway",
    "Jennifer Lawrence", "Gal Gadot",
    "Zendaya", "Timothée Chalamet", "Tom Holland",
    "Ryan Gosling", "Hugh Jackman", "Joaquin Phoenix",
    "Taylor Swift", "Beyoncé", "Rihanna",
    "Drake", "Bad Bunny", "Shakira",
    "Ariana Grande", "Justin Bieber",
    "Elon Musk", "Bill Gates", "Mark Zuckerberg",
    "Jeff Bezos", "Steve Jobs",
  ],

    Cantantes: [
    "Michael Jackson", "Madonna", "Elvis Presley",
    "Freddie Mercury", "Whitney Houston",
    "Frank Sinatra", "Aretha Franklin", "Bob Marley", "Celine Dion",
    "Taylor Swift", "Beyoncé", "Rihanna",
    "Ariana Grande", "Lady Gaga", "Billie Eilish",
    "Adele", "Bruno Mars", "The Weeknd",
    "Justin Bieber", "Shawn Mendes", "Ed Sheeran",
    "Dua Lipa", "Olivia Rodrigo", "Harry Styles",
    "Miley Cyrus", "Selena Gomez", "Katy Perry",
    "Kurt Cobain", "Axl Rose", "Paul McCartney",
    "John Lennon", "Mick Jagger",
    "Dave Grohl", "Ozzy Osbourne",
    "Bad Bunny", "Daddy Yankee", "Don Omar",
    "J Balvin", "Karol G", "Maluma",
    "Ozuna", "Anuel AA", "Feid",
    "Nicky Jam", "Wisin", "Yandel",
    "Rauw Alejandro", "Myke Towers", "Arcángel",
    "Shakira", "Juanes", "Carlos Vives",
    "Luis Fonsi", "Ricardo Arjona", "Marc Anthony",
    "Romeo Santos", "Prince Royce", "Alejandro Sanz",
    "Camilo", "Sebastián Yatra", "Danny Ocean",
    "Eminem", "Drake", "Kanye West",
    "Jay-Z", "Kendrick Lamar", "Travis Scott", "Snoop Dogg",
    "Gian Marco", "Eva Ayllón", "Pedro Suárez-Vértiz",
    "Daniela Darcourt", "Yahaira Plasencia",
    "William Luna", "Marisol", "Deyvis Orosco",
    "Axl Rose", "Freddie Mercury"
  ]

};

const Impostor = ({ onBack }) => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");

  const [gameStarted, setGameStarted] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [showingRole, setShowingRole] = useState(false);
  const [allRolesRevealed, setAllRolesRevealed] = useState(false);

  const [categoria, setCategoria] = useState("Lugares");
  const [impostorCount, setImpostorCount] = useState(1);
  const [impostorIndexes, setImpostorIndexes] = useState([]);
  const [location, setLocation] = useState("");

  const [showImpostors, setShowImpostors] = useState(false);

  /* JUGADORES*/
  const addPlayer = () => {
    if (playerName.trim() && !players.includes(playerName.trim())) {
      setPlayers([...players, playerName.trim()]);
      setPlayerName("");
    }
  };

  const removePlayer = (index) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  /* INICIAR JUEGO */
  const startGame = () => {
    if (players.length < 3) return alert("Mínimo 3 jugadores");
    if (impostorCount >= players.length) return alert("Demasiados impostores");

    const shuffled = [...players.keys()].sort(() => 0.5 - Math.random());
    setImpostorIndexes(shuffled.slice(0, impostorCount));

    const opciones = categorias[categoria];
    setLocation(opciones[Math.floor(Math.random() * opciones.length)]);

    setGameStarted(true);
    setCurrentPlayerIndex(0);
    setShowingRole(false);
    setAllRolesRevealed(false);
    setShowImpostors(false);
  };

  const isImpostor = impostorIndexes.includes(currentPlayerIndex);

  const nextPlayer = () => {
    if (currentPlayerIndex + 1 < players.length) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
      setShowingRole(false);
    } else {
      setAllRolesRevealed(true);
    }
  };

  /* NUEVA RONDA (MANTIENE JUGADORES) */
  const newRound = () => {
    setGameStarted(false);
    setCurrentPlayerIndex(0);
    setShowingRole(false);
    setAllRolesRevealed(false);
    setImpostorIndexes([]);
    setLocation("");
    setShowImpostors(false);
  };

  /* TERMINAR JUEGO (BORRA TODO) */
  const endGame = () => {
    setPlayers([]);
    newRound();
    onBack();
  };

  /* PANTALLA INICIAL */
if (!gameStarted) {
  return (
    <div className="w-full max-w-2xl bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-10 border border-zinc-800">
      <h1 className="text-4xl font-black text-center mb-6">
        EL IMPOSTOR
      </h1>

      {/* INPUT JUGADOR */}
      <div className="flex gap-3 mb-6">
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addPlayer()}
          placeholder="Nombre del jugador"
          className="
            flex-1
            bg-black
            border border-zinc-700
            rounded-full
            px-6 py-4
            text-white
            focus:outline-none
            focus:ring-2 focus:ring-red-600
          "
        />
        <button
          onClick={addPlayer}
          className="
            bg-red-600
            rounded-full
            w-14 h-14
            text-2xl font-black
            flex items-center justify-center
          "
        >
          +
        </button>
      </div>

      {/* JUGADORES */}
      <div className="flex flex-wrap gap-2 mb-6">
        {players.map((p, i) => (
          <span
            key={i}
            className="bg-zinc-800 px-5 py-2 rounded-full flex items-center gap-2"
          >
            {p}
            <button
              onClick={() => removePlayer(i)}
              className="text-red-500 font-bold"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* CATEGORÍA */}
      <div className="mb-5">
        <p className="text-gray-400 mb-2 text-sm font-semibold">
          Categoría
        </p>

        <div className="relative">
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="
              w-full
              appearance-none
              bg-zinc-900
              border border-zinc-700
              rounded-full
              px-6 py-4 pr-12
              text-base font-semibold text-white
              focus:outline-none
              focus:ring-2 focus:ring-red-600
              transition
            "
          >
            {Object.keys(categorias).map((cat) => (
              <option key={cat} className="bg-zinc-900 text-white">
                {cat}
              </option>
            ))}
          </select>

          {/* Flecha */}
          <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
            ▼
          </div>
        </div>
      </div>

      {/* IMPOSTORES */}
      <div className="flex gap-3 mb-6">
        {[1, 2].map((num) => (
          <button
            key={num}
            onClick={() => setImpostorCount(num)}
            className={`flex-1 py-4 rounded-full font-bold transition ${
              impostorCount === num
                ? "bg-red-600"
                : "bg-zinc-800"
            }`}
          >
            {num} Impostor{num > 1 && "es"}
          </button>
        ))}
      </div>

      {/* COMENZAR */}
      <button
        onClick={startGame}
        className="w-full bg-red-600 py-5 rounded-full font-black text-lg"
      >
        COMENZAR
      </button>
    </div>
  );
}

  /* FIN DE RONDA */
  if (allRolesRevealed) {
    return (
      <div className="w-full max-w-2xl bg-black rounded-3xl p-10 text-center">
        <h2 className="text-4xl font-black mb-6">
          FIN DE LA RONDA
        </h2>

        <p className="text-gray-400 mb-2">La respuesta era</p>
        <p className="text-5xl font-black text-green-500 mb-8">
          {location}
        </p>

        {!showImpostors ? (
          <button
          onClick={() => setShowImpostors(true)}
          className="
            w-full
            bg-red-600
            py-5
            rounded-full
            font-black
            text-lg
            mb-8
            hover:scale-[1.02]
            active:scale-95
            transition
          "
        >
          Revelar impostores
        </button>

        ) : (
          <div className="mb-6">
            <p className="text-red-500 font-bold mb-3">
              IMPOSTORES
            </p>
            <div className="flex justify-center gap-2">
              {impostorIndexes.map((i) => (
                <span
                  key={i}
                  className="
                  bg-red-600
                  px-6 py-3
                  rounded-full
                  font-black
                  text-sm
                "
                >
                  {players[i]}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={newRound}
            className="flex-1 bg-zinc-800 py-4 rounded-2xl font-bold"
          >
            Nueva ronda
          </button>
          <button
            onClick={endGame}
            className="flex-1 bg-red-600 py-4 rounded-2xl font-bold"
          >
            Terminar juego
          </button>
        </div>
      </div>
    );
  }

  /* MOSTRAR ROLES */
  return (
    <div className="w-full max-w-2xl bg-black rounded-3xl p-10 text-center">
      {!showingRole ? (
        <>
          <p className="text-gray-500 mb-3">Turno de</p>
          <p className="text-4xl font-black mb-8">
            {players[currentPlayerIndex]}
          </p>

              <button
          onClick={() => setShowingRole(true)}
          className="
            w-full
            bg-red-600
            py-5
            rounded-full
            font-black text-lg
            transition
            hover:bg-red-500
          "
        >
          Ver mi rol
        </button>
      </>
    ) : (
      <>
        <div
          className={`
            rounded-[2rem]
            p-10 mb-8
            shadow-xl
            ${
              isImpostor
                ? "bg-red-600"
                : "bg-green-600"
            }
          `}
        >
          <h2 className="text-3xl font-black mb-4">
            {isImpostor ? "ERES EL IMPOSTOR" : "ERES INOCENTE"}
          </h2>
          {!isImpostor && (
            <p className="text-4xl font-black tracking-wide">
              {location}
            </p>
          )}
        </div>

        <button
          onClick={nextPlayer}
          className="
            w-full
            bg-zinc-800
            py-5
            rounded-full
            font-bold
            transition
            hover:bg-zinc-700
          "
        >
            {currentPlayerIndex + 1 < players.length
              ? "Siguiente jugador →"
              : "Comenzar ronda"}
          </button>
        </>
      )}
    </div>
  );
};

export default Impostor;
