const numero1 = parseInt(prompt("Ingrese un numero", ""));
const numero2 = parseInt(prompt("Ingrese un numero", ""));
const numero3 = parseInt(prompt("Ingrese un numero", ""));

if (numero1 === numero2 && numero2 === numero3 && numero1 === numero3) {
  alert(` ${(numero1 + numero2) * numero3} `);
}
