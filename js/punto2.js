const numero1 = parseInt(prompt("Ingrese una nota", ""));
const numero2 = parseInt(prompt("Ingrese otra nota", ""));
const numero3 = parseInt(prompt("Ingrese una nota mas", ""));
const promedio = (numero1 + numero2 + numero3) / 3;
if (promedio >= 7) {
  alert(`Promocionado`);
} else {
  alert(`Reprobado`);
}
