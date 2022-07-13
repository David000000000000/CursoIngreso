function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);


	if(edad >= 18)
	{
		alert("Eres mayor de edad");
	}

	else 
	{
		alert("Eres menos de edad");
	}


}//FIN DE LA FUNCIÓN