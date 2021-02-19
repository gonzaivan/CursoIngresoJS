function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado){
		case "Bariloche":{
			alert("Oeste");
			break;
		}
		case "Cataratas":{
			alert("Norte");
			break;
		}
		case "Mar Del Plata":{
			Alert("Este");
			break;
		}
		case "Ushuaia":{
			alert("Sur");
			break;
		}
	}

}//FIN DE LA FUNCIÓN