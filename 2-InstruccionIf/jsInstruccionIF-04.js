function mostrar()
{
	let edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad > 12 && edad < 18){
		alert("es adolecente");
	}
}//FIN DE LA FUNCIÓN