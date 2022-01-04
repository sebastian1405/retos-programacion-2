const numero1 = parseInt(prompt("cantidad total de preguntas", ""));
const numero2 = parseInt(
  prompt("cantidad de preguntas que contesto correctamente", "")
);
const resultado = (numero2 * 100) / numero1;
if (resultado >= 90) {
  alert(`Nivel Maximo`);
}
if (numero2 >= 75 && numero2 < 90) {
  alert(`Nivel Medio`);
}
if (numero2 >= 50 && numero2 < 75) {
  alert(`Nivel Regular`);
}
if (numero2 < 50) {
  alert(`Fuera de nivel`);
}
