
	function mostrar()
{
	
let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

let civil;
	civil=document.getElementById("estadoCivil").value;

if(edad >= 18 && civil == "Soltero")
{
	alert(' Es soltero y no es menor');
}

	

}//FIN DE LA FUNCIÓN