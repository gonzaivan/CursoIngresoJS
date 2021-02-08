function mostrar()
{
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad >= 13 && edad <= 17){
		alert("es adolecente");
	}

	else if(edad < 13){
			alert("es niño");
		}
		else{
			alert("es adulto");
		}
	}
}//FIN DE LA FUNCIÓN 