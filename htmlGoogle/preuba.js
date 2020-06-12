

console.log("entro ");

var arrayNames = [{
			nombre:"FERNANDO HERRERA",
			id:"1",
			check:false
		},
		{
			nombre:"ARTEMIO ABIB",
			id:"2",
			check:false
		},
		{
			nombre:"ARTEMIO PERZ",
			id:"3",
			check:false
		},
		{
			nombre:"CARLOS ARTEAGA",
			id:"4",
			check:false
		},
		{
			nombre:"JUAN PEREZ",
			id:"5",
			check:false
		},
		{
			nombre:"JAVIER OSCAR",
			id:"6",
			check:false
		}


];

	(function () {
				
		$( "#divNames" ).html();

		arrayNames.forEach(function(val){
				$("<input type='checkbox' name='"+val.id+"' id='"+val.id+"' value='"+val.id+"'   onchange='selectName(this)'>"+val.nombre+"<br>").appendTo("#divNames");
		});






	})();



function selectName(valor){

	

	if($("#"+valor.name).is(':checked')){
		console.log(valor.id,"checado");
		var objeto = findObjectByID(arrayNames,'id',valor.name);
		//console.log(objeto);
		objeto.check = true;
		//console.log(objeto);
	}else{
		console.log(valor.id,"NOchecado");
		var objeto = findObjectByID(arrayNames,'id',valor.name);
		//console.log(objeto);
		objeto.check = false;
		//console.log(objeto);
	}


}


function findObjectByID(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}


function findNames(){
	var txtName = document.getElementById("objDemo").value;	
		txtName = txtName.toUpperCase();

	if(txtName != "" && txtName != undefined){
			$( "#divNames" ).html("");

			arrayNames.forEach(function(val){
				var nameUser = val.nombre.toUpperCase();

				//console.log(nameUser.indexOf(txtName));
					if( nameUser.indexOf(txtName) >= 0  || val.check == true ){	
						//if(val.check == true){
						//	$("<input type='checkbox' name='"+val.id+"' id='"+val.id+"' value='"+val.id+"'   onchange='selectName(this)' checked>"+val.nombre+"<br>").appendTo("#divNames");
						//}
						

							//$("<input type='checkbox' name='"+val.id+"' id='"+val.id+"' value='"+val.id+"'   onchange='selectName(this)' >"+val.nombre+"<br>").appendTo("#divNames");
						

						if(val.check == true){
							$("<input type='checkbox' name='"+val.id+"' id='"+val.id+"' value='"+val.id+"'   onchange='selectName(this)' checked>"+val.nombre+"<br>").appendTo("#divNames");

						}else if( val.check == false){
							$("<input type='checkbox' name='"+val.id+"' id='"+val.id+"' value='"+val.id+"'   onchange='selectName(this)' >"+val.nombre+"<br>").appendTo("#divNames");							
						}	


							
					}	
			});


	}	
}


