const fecha = prompt("Ingrese una fecha", "");

const fechaConv = new Date(fecha);

if (fechaConv.getDate() === 24 && fechaConv.getMonth() === 11) {
  alert(`Feliz navidad`);
} else {
  alert(`siga participando`);
}
