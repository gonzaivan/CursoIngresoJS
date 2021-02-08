/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let num1;
    let num2;
    let num3;
	let resultado;

	num1 = txtIdPrecioUno.value;
    num2 = txtIdPrecioDos.value;
    num3 = txtIdPrecioTres.value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
	
	resultado = parseInt(num1) + parseInt(num2) + parseInt(num3);

	alert("la suma es " + resultado);
}
function Promedio () 
{
    let num1;
    let num2;
    let num3;
	let resultado;

	num1 = txtIdPrecioUno.value;
    num2 = txtIdPrecioDos.value;
    num3 = txtIdPrecioTres.value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

	resultado = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;

	alert("el promedio es " + resultado);
}
function PrecioFinal () 
{
    let num1;
    let num2;
    let num3;
    let suma;
    let iva;    
	let importeFinal;

	num1 = txtIdPrecioUno.value;
    num2 = txtIdPrecioDos.value;
    num3 = txtIdPrecioTres.value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    suma = num1 + num2 + num3;

    iva = suma * 21 / 100;

    importeFinal = suma + iva;


	alert("El resultado final es $" + importeFinal);
}