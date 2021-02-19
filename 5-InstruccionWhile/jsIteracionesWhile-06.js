Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.



function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	contador = parseInt(contador);
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;


	while(contador)
	{
		contador = prompt("Ingrese numero");

		contador++

		contador < 6
	}
}//FIN DE LA FUNCIÓN