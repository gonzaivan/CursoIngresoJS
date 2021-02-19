function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado){
		case "Bariloche":{
			alert("FRIO");
			break;
		}
		case "Cataratas":{
			alert("CALOR");
			break;
		}
		case "Mar Del Plata":{
			Alert("CALOR");
			break;
		}
		case "Ushuaia":{
			alert("FRIO");
			break;
		}
	}

}//FIN DE LA FUNCIÓN