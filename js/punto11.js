const numero1 = parseInt(prompt("Ingrese un numero", ""));
const numero2 = parseInt(prompt("Ingrese otro numero", ""));
const numero3 = parseInt(prompt("Ingrese un numero mas", ""));

if (numero1 < 10 || numero2 < 10 || numero3 < 10) {
  alert(`Alguno de los números es menor a diez`);
} else {
  alert(`Hay un error`);
}
