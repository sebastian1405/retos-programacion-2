const numero1 = prompt("Ingrese un numero", "");

if (numero1.length === 1) {
  alert(`el numero es de una cifra`);
} else if (numero1.length === 2) {
  alert(`el numero es de dos cifras`);
} else if (numero1.length === 3) {
  alert(`el numero es de 3 cifras`);
} else if (numero1 > 4) {
  alert(`el numero es de mas de 3 cifras`);
}
