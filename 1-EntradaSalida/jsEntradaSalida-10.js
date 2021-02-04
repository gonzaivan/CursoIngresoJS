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

	importe = parseFloat (document.getElementById("txtIdimporte").value);	
	
	//descuento = importe * 25 / 100;

	/* descuento = importe * 0.25;

	importeFinal = importe + descuento*/

	// importeFinal = importe + (importe * 0.25) 

	importeFinal = importe + descuento;

	document.getElementById("txtIdResultado").value = importeFinal;


}
