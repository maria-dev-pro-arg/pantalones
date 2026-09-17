const RESPUESTAS = [
  "Sobre la mesa",
  "Debajo de la cama",
  "En el tendedero",
  "En el cajón de siempre",
  "En la lavadora, obvio",
  "En la Luna",
  "Se los puso un alien",
  "Se los presté a Mamá Noel",
  "Los tiene el perro",
  "Se fueron de vacaciones sin vos",
  "Los está usando un gnomo",
  "Viajaron al pasado",
  "Los está planchando un fantasma",
  "Se los llevó el viento",
  "En la dimensión de los calcetines perdidos",
  "Nadie sabe, ni el Oráculo",
  "Te los cambiaron por un cerdito",
  "En una nube con forma de pantalón",
  "Los confiscó un pulpo",
  "Quedaron atrapados en otra dimensión",
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

  const texto = elegirRespuesta();
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
  burbuja.textContent = texto;

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
