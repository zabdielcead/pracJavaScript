

document.onmousedown = function(arg){ //detecta clicks
	

	if (arg.button === 2) {
		alert("click bloqueado");
		return;
	}

	console.log("no hay problema");


}

document.onmouseup = function(arg){ //copia lo seleccionado cuando sueltas el raton 


	var texto =  window.getSelection().toString();

	console.log(texto);

}
