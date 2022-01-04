const numero1 = parseInt(prompt("Ingrese un numero", ""));
const numero2 = parseInt(prompt("Ingrese otra numero", ""));
const numero3 = parseInt(prompt("Ingrese una numero mas", ""));

if (numero1 > numero2 && numero1 > numero3) {
  alert(`${numero1} es el mas grande`);
}
if (numero2 > numero1 && numero2 > numero3) {
  alert(`${numero2} es el mas grande`);
}
if (numero3 > numero1 && numero3 > numero2) {
  alert(`${numero3} es el mas grande`);
}
