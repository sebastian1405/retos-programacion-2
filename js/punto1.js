const numero1 = parseInt(prompt("Ingrese un numero", ""));
const numero2 = parseInt(prompt("Ingrese un numero", ""));

if (numero1 > numero2) {
  alert(
    `la suma es: ${numero1 + numero2} y la diferncia es: ${numero1 - numero2} `
  );
} else {
  alert(
    `el producto es: ${numero1 * numero2} y la division es: ${
      numero1 / numero2
    } `
  );
}
