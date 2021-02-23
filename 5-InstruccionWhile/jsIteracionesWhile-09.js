/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
se pide el menor de los pares y el mayor de los negativos
*/
/*function mostrar()
{	// declarar variables
	var bandera;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	//iniciar variables
	bandera="1";
	respuesta='si';
	
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(bandera == "1" || numeroIngresado>numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		
		if(bandera == "1" || numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;

			bandera = "0";
		}
		respuesta=prompt("desea continuar? si/no");
	}



	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN*/

// 9 bis( se pide el menor de los pares y el mayor de los negativos)


function mostrar()
{	// declararPar variables
	var banderaPar;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var banderaNegativo;
	
	//iniciar variables
	banderaPar="1";
	respuesta='si';
	banderaNegativo = "true";
	
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado<0)
		{
			if(banderaNegativo == "true" || numeroIngresado > numeroMaximo)
			{
					numeroMaximo = numeroIngresado;

					banderaNegativo = "false"

			}
		}
		if (numeroIngresado % 2 == 0)
		{
			if(banderaPar == "1" || numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
				banderaPar = "0";
			}
		}

		respuesta=prompt("desea continuar? si/no");
	}


	

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN



/*
		
		if(banderaPar == "1" || numeroIngresado>numeroMaximo && numeroIngresado % 2 == 0)
		{
			numeroMaximo = numeroIngresado;
		}
		if(banderaPar == "1" || numeroIngresado < numeroMinimo && numeroIngresado & 2 == 0)
		{
			numeroMinimo = numeroIngresado;

			banderaPar = "0";
		}
		
*/