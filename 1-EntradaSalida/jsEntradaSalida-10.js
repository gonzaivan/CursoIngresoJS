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

	importe = txtIdImporte.value;	
	importe = parseInt(importe);
	
	//descuento = importe * 25 / 100;

	descuento = importe * 25 / 100;

	//importeFinal = importe + descuento

	// importeFinal = importe + (importe * 0.25) 

	importeFinal = importe - descuento;

	txtIdResultado.value = importeFinal;


}
