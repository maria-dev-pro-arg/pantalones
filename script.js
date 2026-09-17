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
];

const COLUMNAS = 4;
const FILAS = 3;

function mezclar(items) {
  const copia = [...items];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function preguntar() {
  const escenario = document.getElementById("escenario");
  escenario.innerHTML = "";

  const anchoCelda = 100 / COLUMNAS;
  const altoCelda = 100 / FILAS;

  mezclar(RESPUESTAS).forEach((texto, i) => {
    const col = i % COLUMNAS;
    const fila = Math.floor(i / COLUMNAS);
    const jitterX = (Math.random() - 0.5) * anchoCelda * 0.3;
    const jitterY = (Math.random() - 0.5) * altoCelda * 0.3;
    const left = col * anchoCelda + anchoCelda / 2 + jitterX;
    const top = fila * altoCelda + altoCelda / 2 + jitterY;
    const rotate = Math.random() * 14 - 7;
    const delay = Math.random() * 0.5;

    const globo = document.createElement("div");
    globo.className = `globo color-${(i % 3) + 1}`;
    globo.style.left = `${left}%`;
    globo.style.top = `${top}%`;
    globo.style.setProperty("transform", `translate(-50%, -50%) rotate(${rotate}deg)`);

    const burbuja = document.createElement("span");
    burbuja.textContent = texto;
    burbuja.style.animationDelay = `${delay}s`;

    globo.appendChild(burbuja);
    escenario.appendChild(globo);
  });
}

document.getElementById("preguntar").addEventListener("click", () => {
  preguntar();
  document.getElementById("preguntar").textContent = "Preguntar de nuevo";
});
