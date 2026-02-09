import { useState } from "react";

const preguntas = [
  "¿Por qué no funcionó con (nombre)?",
  "¿A quién extrañas aunque no lo admitas?",
  "¿Te arrepientes de haber terminado con (nombre)?",
  "¿Quién fue tu peor casi-algo?",
  "¿Has vuelto con un ex solo por costumbre?",
  "¿Quién fue la persona que más te ilusionó?",
  "¿Te has enamorado de alguien que no debías?",
  "¿Has dicho 'te amo' sin sentirlo de verdad?",
  "¿Has sido infiel alguna vez?",
  "¿Has besado a alguien estando en una relación?",
  "¿Te besaste con (nombre) y nadie lo sabe?",
  "¿Has tenido remember con un ex?",
  "¿Has coqueteado con alguien solo por atención?",
  "¿Has mentido para salir con alguien?",
  "¿Has revisado el celular de tu pareja sin permiso?",
  "¿Te han revisado el celular y encontraron algo?",
  "¿Te besaste con alguien en una fiesta y te arrepentiste?",
  "¿Con quién nunca te volverías a besar?",
  "¿Cuál fue tu peor borrachera?",
  "¿Has mandado un mensaje que luego borraste por vergüenza?",
  "¿A quién llamarías si estuvieras borracho ahora mismo?",
  "¿Quién te atrae aquí pero no lo dirías en voz alta?",
  "¿Has fingido que alguien te gusta?",
  "¿A quién stalkeas todavía?",
  "¿Cuál es tu red flag más grande?",
  "¿Qué mentira dices más seguido?",
  "¿Qué es lo más tóxico que has hecho por amor?",
  "¿A quién elegirías si tuvieras que besar ahora mismo?",
  "¿Qué es lo que más te dolió de tu última relación?",
  "¿A quién le debes una disculpa?",
  "¿Has tirado en hostales u hoteles de menos de 35 soles?",
  "¿Quién fue tu primer amor?",
  "¿Saliste con dos personas al mismo tiempo?",
  "¿Tu mejor relación fue con (añade nombre)?",
  "¿Te enamoraste primero o te enamoraron?",
  "¿Volverías con tu primer amor?",
  "¿Mentiste sobre tus sentimientos alguna vez?",
  "¿Te quedaste con alguien solo por costumbre?",
  "¿Fuiste el rebote de alguien?",
  "¿Usaste a alguien para olvidar a otra persona?",
  "¿Te ilusionaste más de la cuenta?",
  "¿Te rompieron el corazón o rompiste tú?",
  "¿Extrañas a alguien que no deberías?",
  "¿Elegiste mal sabiendo que lo estabas haciendo?",
  "¿Te quedaste donde ya no eras feliz?",
  "¿Quién miente peor del grupo?",
  "¿Has fingido risa para encajar?",
  "¿Quién fue tu peor gusto y por qué lo defendías?",
  "¿Has dicho 'ya lo superé' y era mentira?",
];

// función para mezclar
const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const SillonRojo = ({ onBack }) => {
  const [preguntasRandom] = useState(() => shuffle(preguntas));
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-6 bg-gradient-to-br from-black via-zinc-900 to-black">
      <h1 className="text-4xl font-black text-red-500 mb-12 text-center tracking-wide">
        Sillón Rojo
      </h1>

      <div className="w-full max-w-md backdrop-blur-xl bg-white/5 rounded-[2.2rem] p-10 text-center shadow-[0_0_80px_rgba(255,0,0,0.15)] border border-white/10">
        <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white">
          {preguntasRandom[index]}
        </p>
      </div>

      <div className="mt-10 flex gap-4">
        <button
          onClick={() =>
            setIndex((i) => (i + 1) % preguntasRandom.length)
          }
          className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-600 font-bold transition shadow-xl"
        >
          Siguiente
        </button>

        <button
          onClick={onBack}
          className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 font-bold transition shadow-xl"
        >
          Salir
        </button>
      </div>
    </div>
  );
};

export default SillonRojo;
