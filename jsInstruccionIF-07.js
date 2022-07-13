function mostrar()
{
	
let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

let civil;
	civil=document.getElementById("estadoCivil").value;

if(edad < 18 && civil != "Soltero")
{
	alert(' Es muy pequeño para No ser soltero');
}

	


}//FIN DE LA FUNCIÓN