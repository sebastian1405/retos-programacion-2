const numero1 = parseInt(prompt("Ingrese un numero", ""));

if (numero1 > 0) {
  alert(`el numero es positivo`);
} else if (numero1 < 0) {
  alert(`el numero es negativo`);
} else if (numero1 === 0) {
  alert(`el numero es nulo`);
}
