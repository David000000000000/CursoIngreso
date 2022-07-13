function mostrar()
{
let random=Math.round(Math.random()*10);

	//alert(random);


	if(random >= 9 )
	{
		alert('Excelente tu nota fue: ' +random);

	}

	else if (random >= 4 && random <=8)
	{
		alert('Aprobaste tu nota fue: ' +random);
	}

	else
	{
		alert('Vamos la proxima se puede ' +random);
	}
}//FIN DE LA FUNCIÓN