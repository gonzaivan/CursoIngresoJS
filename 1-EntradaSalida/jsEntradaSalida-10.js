/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrardescuento()
{	
	let importe;
	let importeFinal;
	let descuento;
	// para calcular el nuevo importe deberia sumarle al importe original el descuento
	// el calculo de porcentaje de un valor lo consigo multiplicando el calor por el porcentaje y lo divido por 100

	importe = parseFloat (document.getElementById("txtIdimporte").value);	
	
	descuento = importe * 25 / 100;

	importeFinal = importe + descuento;

	document.getElementById("txtIdResultado").value = importeFinal;


}
