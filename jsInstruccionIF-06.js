function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad >=13 && edad<=17 )
	{
		alert("Eres adolecentes");
	}
	else if(edad >=18)
		{
		alert("Eres Mayor de edad");

		}

		else
		{
			alert("Eres niño");
		}


}//FIN DE LA FUNCIÓN