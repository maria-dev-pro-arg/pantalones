const RESPUESTAS = [
  { emoji: "🍽️", texto: "Sobre la mesa" },
  { emoji: "🛏️", texto: "Debajo de la cama" },
  { emoji: "🧺", texto: "En el tendedero" },
  { emoji: "🗄️", texto: "En el cajón de siempre" },
  { emoji: "🌀", texto: "En la lavadora, obvio" },
  { emoji: "🌙", texto: "En la Luna" },
  { emoji: "👽", texto: "Se los puso un alien" },
  { emoji: "🎅", texto: "Se los presté a Mamá Noel" },
  { emoji: "🐶", texto: "Los tiene el perro" },
  { emoji: "🏖️", texto: "Se fueron de vacaciones sin vos" },
  { emoji: "🧙", texto: "Los está usando un gnomo" },
  { emoji: "⏳", texto: "Viajaron al pasado" },
  { emoji: "👻", texto: "Los está planchando un fantasma" },
  { emoji: "🌬️", texto: "Se los llevó el viento" },
  { emoji: "🧦", texto: "En la dimensión de los calcetines perdidos" },
  { emoji: "🔮", texto: "Nadie sabe, ni el Oráculo" },
  { emoji: "🐷", texto: "Te los cambiaron por un cerdito" },
  { emoji: "☁️", texto: "En una nube con forma de pantalón" },
  { emoji: "🐙", texto: "Los confiscó un pulpo" },
  { emoji: "🌌", texto: "Quedaron atrapados en otra dimensión" },
  { emoji: "🚪", texto: "En el fondo del armario, obvio" },
  { emoji: "🦶", texto: "Los tiene Pie Grande" },
  { emoji: "🏝️", texto: "Naufragaron en una isla desierta" },
  { emoji: "💃", texto: "Se fueron a bailar sin vos" },
  { emoji: "🦖", texto: "Los está usando un dinosaurio" },
  { emoji: "🔺", texto: "Se perdieron en el Triángulo de las Bermudas" },
  { emoji: "🦝", texto: "Te los robó un mapache" },
  { emoji: "🛸", texto: "Se los llevó un ovni" },
  { emoji: "🌱", texto: "Los cambiaste por habichuelas mágicas" },
  { emoji: "🔴", texto: "Están tomando sol en Marte" },
  { emoji: "❄️", texto: "Los tiene el Yeti" },
  { emoji: "🐇", texto: "Cayeron por la madriguera del conejo" },
  { emoji: "🦋", texto: "Se convirtieron en mariposas" },
  { emoji: "🧟", texto: "Se los llevaron los zombies" },
  { emoji: "🎪", texto: "Se escaparon con el circo" },
  { emoji: "🧞", texto: "Un genio te concedió el deseo equivocado" },
  { emoji: "🌪️", texto: "Se los llevó el Zonda" },
  { emoji: "🚨", texto: "¡Los robaron!" },
  { emoji: "🤔", texto: "La pregunta no es \"¿dónde están los ladrones?\"" },
  { emoji: "😳", texto: "¡Los tiene puestos, señor!" },
  { emoji: "🌊", texto: "En el río" },
  { emoji: "🛏️", texto: "Abajo de la cama" },
  { emoji: "🗑️", texto: "En el cesto de la basura" },
  { emoji: "☀️", texto: "Tapando el Sol" },
];

const DURACION_VISIBLE_MS = 2500;
const DURACION_FADE_MS = 400;

let ultimoIndice = -1;
let temporizadorOcultar = null;
let temporizadorQuitar = null;

function elegirRespuesta() {
  if (RESPUESTAS.length === 1) return RESPUESTAS[0];
  let indice;
  do {
    indice = Math.floor(Math.random() * RESPUESTAS.length);
  } while (indice === ultimoIndice);
  ultimoIndice = indice;
  return RESPUESTAS[indice];
}

function mostrarGlobo() {
  const escenario = document.getElementById("escenario");

  clearTimeout(temporizadorOcultar);
  clearTimeout(temporizadorQuitar);
  escenario.innerHTML = "";

  const { emoji, texto } = elegirRespuesta();
  const left = Math.random() * 60 + 20;
  const top = Math.random() * 60 + 15;
  const rotate = Math.random() * 14 - 7;
  const color = Math.floor(Math.random() * 3) + 1;

  const globo = document.createElement("div");
  globo.className = `globo color-${color}`;
  globo.style.left = `${left}%`;
  globo.style.top = `${top}%`;
  globo.style.setProperty("transform", `translate(-50%, -50%) rotate(${rotate}deg)`);

  const burbuja = document.createElement("span");

  const iconoSpan = document.createElement("span");
  iconoSpan.className = "globo-emoji";
  iconoSpan.textContent = emoji;
  iconoSpan.setAttribute("aria-hidden", "true");

  const textoSpan = document.createElement("span");
  textoSpan.textContent = texto;

  burbuja.appendChild(iconoSpan);
  burbuja.appendChild(textoSpan);

  globo.appendChild(burbuja);
  escenario.appendChild(globo);

  temporizadorOcultar = setTimeout(() => {
    globo.classList.add("desvanecer");
    temporizadorQuitar = setTimeout(() => {
      globo.remove();
    }, DURACION_FADE_MS);
  }, DURACION_VISIBLE_MS);
}

document.getElementById("preguntar").addEventListener("click", () => {
  mostrarGlobo();
  document.getElementById("preguntar").textContent = "Preguntar de nuevo";
});
