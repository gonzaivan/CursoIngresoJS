function mostrar()
{
	let estacionIngresada
	
	estacionIngresada = txtIdEstacion.value;

	switch (estacionIngresada) {
		case "Invierno":
			if(txtIdDestino.value == "Bariloche"){
				alert("se viaja");
			}
			else{
				alert("no se viaja");
			}
			break;
		case "Verano":
			if(txtIdDestino.value == "Mar del plata" || txtIdDestino.value == "Cataratas"){
				alert("se viaja");
			}
			else{
				alert("no se viaja");
			}
			break;
		case "Otoño":
			alert("se viaja");
			break;
		case "Primavera":
			if(txtIdDestino.value == "Bariloche"){
				alert("no se viaja");
			}
			else{
				alert("se viaja");
			}
			break;
	}

}//FIN DE LA FUNCIÓN