/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let nuevoSueldo;
	let aumento;
	// para calcular el nuevo sueldo deberia sumarle al sueldo original el aumento
	// el calculo de porcentaje de un valor lo consigo multiplicando el calor por el porcentaje y lo divido por 100

	sueldo = parseFloat (document.getElementById("txtIdSueldo").value);

	// se puede achicar (0.10, 0.1 o .1)
	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;


}
