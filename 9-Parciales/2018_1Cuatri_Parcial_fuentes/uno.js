
function mostrar()
{
    let ancho;  
    let largo;
    let resultado;

    ancho = prompt("ingrese el ancho : ");
    largo = prompt("ingrese el largo : ");

    resultado = (ancho * 2) + (largo * 2);
    
    alert("el perimetro es : " + resultado);
}
