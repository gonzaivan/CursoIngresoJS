/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempF;
    let tempC;

    tempF = txtIdTemperatura.value;
    tempF = parseInt(txtIdTemperatura);
    
    tempC = (tempF - 32) / 1.8;

    alert(`${+tempF} grados farhenheit equivalen a ${tempC} grados centigrados`);
}

function CentigradosFahrenheit () 
{
	let tempF;
    let tempC;

    tempC = txtIdTemperatura.value;
    tempC = parseInt(txtIdTemperatura);

    tempF = tempC * 1.8 + 32; 

    alert(`${+tempC} grados farhenheit equivalen a ${tempF} grados centigrados`);
}
