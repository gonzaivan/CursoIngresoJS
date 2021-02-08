function mostrar()
{
let precio; 
let porcentaje;
let descuentoFinal;

precio = prompt("ingrese el precio");
porcentaje = prompt("ingrese porcentaje");

descuentoFinal = parseInt(precio) + parseInt((precio * porcentaje / 100));

elPrecioFinal.value = descuentoFinal;



}
