/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	sexoIngresado = sexoIngresado.toLowerCase();

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado = prompt("error");
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN



/*
	sexoIngresado!="F" && sexoIngresado != "M"
	
*/