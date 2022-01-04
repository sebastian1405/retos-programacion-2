const numero1 = parseInt(prompt("Ingrese un numero", ""));
const numero2 = parseInt(prompt("Ingrese un numero", ""));
const numero3 = parseInt(prompt("Ingrese un numero", ""));

if (numero1 < 10 && numero2 < 10 && numero3 < 10) {
  alert(`Todos los números son menores a diez`);
} else {
  alert(`Todos los números deben ser menores a diez`);
}
