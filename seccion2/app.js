console.log("clase 9 tipos primitivos");
//tipos primitivos
var num = 10;
var str = "textp";
var bol = true;
var und = undefined;
var nul = null;
// se puede hacer num = str

var obj = {
	numero:10,
	texto:"Nuevo texto", //numero:10 -> prop, valor
	objHijo:{
		numero2:10,
		texto2:"Nuevo texto",
	}
}; //un obj tiene tipos primitivos u objetos

console.log(obj);
console.log("Fin clase 9");



console.log("clase 10 por valor y referencia ");

var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;


console.log("a: ", a);
console.log("b: ", b);

//los objetos siempre pasan los valores por referencia: como que los onjetos estan amarrados
var c = {
	nombre:"Juana"
}
var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Maria";

console.log("c: ", c);
console.log("d: ", d);



console.log("Fin clase 10");

console.log("clase 11");
var persona = {
	nombre:"Juana",
	apellido:"Herrera",
	edad:25,
	direccion:{
		ciudad:"SAN JOSE",
		pais:"CostaRica"
	}

}

console.log(persona.direccion.pais);

//podemos meter parametros

console.log("Fin clase 10");



console.log("clase 11 notacion punto y corchetes");

var perss={
    nombre:"CEAD",
	apellido:"Herrera",
	edad:25,
	direccion:{
		ciudad:"SAN JOSE",
		pais:"MEX",
		edificio:{
			nombre:"edificio",
			telefono:"222223443"
		}
	}
	
}

console.log(perss.nombre);


var campo="edad";


console.log( perss["nombre"] );//podemos tomar el campo del objeto es una forma NOTACION DE CORCHETE

console.log( perss["direccion"]["pais"] );

console.log( perss[campo] );

console.log("Fin clase 11");

 
console.log("clase 12 funciones");


function primeraFuncion(){
	console.log("invocada");
}

var miFuncion = primeraFuncion; //se puede ejecutar miFuncion()

console.log("Fin clase 12");


console.log("clase 13 parametros para las funciones");

function imprimir(nombre, apellido){

	apellido = apellido || "xxx"; // esto es igual al if de abajo

	/*if(apellido === undefined){

		apellido = "xxx";

	}*/

	console.log(nombre + " "+ apellido);

}

imprimir("Carlos");


function imprimirDos(nombre){
	console.log(nombre.nombre, nombre.apellido);
}

imprimirDos({
	nombre:"Carlos",
	apellido: "arteaga"
});


function imprimirTres(fn){

	fn();
}


imprimirTres( function(){
	console.log("function anonima");
});


var miFuncionLlamado = function(){
	console.log("Mi funcion llamado");
}


imprimirTres(miFuncionLlamado);


console.log("Fin clase 13");


console.log("clase 14 retorno de funciones");

function obtenerAleatorio(){

	return Math.random();
}
console.log(obtenerAleatorio()+10);

function obteinNombre(){
	return "ceaddd";
}

console.log(obteinNombre()+" Perez")

function getBools(){

	var aleatorio = obtenerAleatorio();
	console.log("aleatorio =", aleatorio);
	if( aleatorio > 0.5){
		return true;
	}else{
		return false;
	}
}

console.log(getBools());


function crearPersona(nombre, apellido){

	return {
		nombre: nombre,
		apellido: apellido
	}

}


var ppersona =  crearPersona("ARTEMIO","CATALAN");


console.log(ppersona);

function crwarFuncion(){
	
	return function(nombre){
		console.log("Me crearon!!! " + nombre);
	}
}
var nuevaFn = crwarFuncion();
nuevaFn(ppersona.nombre);

console.log("Fin clase 14");

console.log("clase 15 funciones de primera clase");

function aa(){
	console.log("funcion a");
}

aa();
aa.nombre = "Maria";

aa.direccion = {
	pais:"MEXICO",
	ciudad:"CDMX",
	edificio:{
		piso:"8",
		nombre:"Edificio principal"
	}
}

console.log("Fin clase 15");

console.log("clase 16 metodos y objeto this");

var personaX  = {
	nombre: "ALEX",
	apellido: "DUBON",
	imprimirNombre: function(){
		console.log("Nombre Completo");
		console.log(this.nombre + " "+ this.apellido);
	},
	direccion: {
		pais: "CostaRica",
		obtenerPais:function(){
			console.log("Pais: " + this.pais);

			var self = this;
			var nuevaDireccion = function(){
				console.log(self);

				console.log("direccion es "+self.pais);
			}

			nuevaDireccion();
		}
	}

};

personaX.imprimirNombre();

personaX.direccion.obtenerPais();
console.log("Fin clase 16");

console.log("clase 17 palabra new");

function persona17(){
	this.nombre = "JUAN";
	this.apellido = "ARTEAGA";
	this.edad = 30;

	this.nombreCompleto = function (){
		return this.nombre + " " + this.apellido;
	}
}

var juanx = new persona17();

console.log(juanx);
console.log(juanx.nombre);
console.log(juanx.apellido);
console.log(juanx.nombreCompleto());


function persona17A(nombre, apellido){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = 30;

	this.nombreCompleto = function (){
		return this.nombre + " " + this.apellido;
	}
}

var artemiox = new persona17A("ARTEMIO",30);
console.log(artemiox.nombreCompleto());

console.log("Fin clase 17");

console.log("clase 19 prototype");
//prototipo es como metodo para el objeto o se le puede agregar objetos variables etc

function PersonaCead(){
	this.nombre   =  "CARLOS";
	this.apellido =  "HERRERA";
	this.edad     = 30; 
	this.pais     = "MEXICO";
	
}

PersonaCead.prototype.imprimirInfo = function(){
		console.log(this.nombre + " " + this.apellido + " (" + this.edad + ")");
}

var sCead = new PersonaCead();


console.log(sCead);
console.log(sCead.imprimirInfo());

Number.prototype.esPositivo = function(){
	if( this > 0){
		return true;
	}else{
		return false;
	}
}
// en consola escribir var a = 10; y luego a.esPositivo se le agrego un metodo al objeto number
console.log("Fin clase 19");

console.log("clase 20 funciones anonimas");



//funciones anonimas no tienen un nombre la de abajo se ejecuta 
( function(){
	var aAs = 10;

	console.log(aAs);

	a =  function(){
		aAs = 20;
		return aAs; 
	}();//() = -> ejecuta las funciones

	console.log(aAs);
})();


function ejecutarFuncionx(fn){

	if( fn() === 1){
		return true;
	}else{
		return false;
	}
	
	
}

console.log(
	ejecutarFuncionx( function(){
		console.log("Funcion anonima ejecutara");
		return 1;
	} )
);

console.log("Fin clase 20");


console.log("clase 21 typeof e instanceof");
	
	function identificaParam( param ){

		console.log( typeof  param);

		if( typeof param == "function" ){
			param();
		}
	}

	function identificaParamInstanceOf( param ){

		console.log( param instanceof  tipoidentificaParam);

	
	}


	function tipoidentificaParam(){
		this.nombre = "CARLOS";
		this.edad = 30;
	}

	var juan = new tipoidentificaParam();

	identificaParam( function(){ console.log("son anonimas"); } );

	identificaParamInstanceOf(juan);

console.log("Fin clase 21");

console.log("clase 22 arreglos pte1");
//arreglos

var  arrs = [5,4,3,2,1];

console.log(arrs);

arrs.reverse();

console.log(arrs);

//ejecuta una fucnion en cada uno de los elementos del array .map

arrs = arrs.map(function(elem){
	elem *= elem;
	return elem;
});

console.log(arrs);


arrs = arrs.map(Math.sqrt);

console.log(arrs)

arrs =  arrs.join("|"); //te devulve un string y le podemos separar los elementos con un arreglo

console.log(arrs);

arrs =  arrs.split("|");

console.log(arrs);

arrs.push("6");//meter un elemento al final del areglo
console.log(arrs);

arrs.unshift("0");//meter un elemento al inicio  del areglo
console.log(arrs);

console.log(arrs.toString());

var arrPopo = arrs.pop(); // quita la ultima posicion 

console.log(arrs,arrPopo);

arrs.splice(1,1); //los parametros que se mandan el primero es inicia en la posicion del arreglo, el segundo parametro numero que eliminas del arreglo despues de la posicion
console.log(arrs);
arrs.splice(1,1,"10");//se puede meter un elemento al arreglo 
console.log(arrs);


arrs = arrs.slice(0,2);
console.log(arrs);

console.log("Fin clase 22");


console.log("clase 23 arreglos pte2 ");

var arrz  = [
	true,
	{
		nombre:"FERNANDO",
		apellido:"HERRERA"
	},
	false,
	true,
	function(){
		console.log("ESTOY VIVIENDO EN ARREGLO");

	},function( persona ){
		console.log(persona.nombre + " " + persona.apellido);
	},
	[	
		"FER",
		"CEAD",
		 "YOL",
		 [
		 	"PEDRO",
		 	"EULI",
		 	"RAMONA",
		 	function(){
		 		console.log("entro");
		 		console.log(this);
		 	}

		 ]
	]
	
];


console.log(arrz);
console.log(arrz[1].nombre);

arrz[4]();


arrz[5](arrz[1]);

console.log(arrz[6][1]);

console.log(arrz[6][3][1]);

var ejemArr = arrz[6][3];

ejemArr[1]  = "EULA!";

console.log(arrz);

console.log(ejemArr);

ejemArr[3]();
console.log("Fin clase 23");


console.log("clase 24 argumentos");

function xxMyFuncion(a,b,c,d)
{
	if( arguments.length !== 4){
		console.log("la funcion necesita 4 parametros ");
		return; // para salirnos de la función
	}


	console.log( a + b + c +d );
}

xxMyFuncion(1,10,20);
console.log("Fin clase 24");


console.log("clase 25  sobre carga de operadores js");

function crearProductoX(nombre,precio){
	nombre = nombre || " sin nombre";
	precio = precio || 0;

	console.log("nombre "+ nombre + " precio "+ precio);

}
crearProductoX();
console.log("Fin clase 25");


console.log("clase 26 polimorfismo js");

	function determinaDatoXX(a){
			if(a === undefined){
				console.log("A es undefined... no se que hacer");
			}

			if( typeof a === "number" ){
				console.log("A es un número y puedo hacer operacion con numeros");
			}

			if ( typeof a === "string"){
				console.log("A es un texto, puedo hacer operaciones  con textos");
			}

			if ( typeof a === "object"){
				console.log("A es un objeto.. pero puede ser cualquier cosa");

				if(a instanceof Number){
					console.log("A es un objeto numérico");
				}
			}
	}

	determinaDatoXX({ nombre: "Alejandro" });

	var b = new Number(3);

	determinaDatoXX( b );
console.log("Fin clase 26");
	
	


console.log("clase 27 funciones y su contexto");
	
 function crearFuncionesZ(){	 	
	var arr = [];
	var numero = 1;




	for ( var  numero = 1; numero <=3; numero++ ){
		arr.push(

			(function (numero) {
				return function(){
					console.log(numero);
				}
			})(numero)
			
		);

	}


	return  arr;
 }	

 var funcioneZ = crearFuncionesZ();

 funcioneZ[0]();
  funcioneZ[1]();
   funcioneZ[2]();


console.log("Fin clase 27");


console.log("clase 28 objeto number");

var az = 10.456771 ;
//var bz =  new Number (10);

console.log(az);
console.log(az.toFixed(2));

console.log(az.toPrecision(4));

var vt = new Number ("20");

console.log(vt);
console.log(vt.valueOf());

console.log("Fin clase 28");

console.log("clase 29 obj booleano");

var esp = new Boolean(); //el valor por defecto de un booleano es false si es un NaN undefined 0,-0 ""
console.log( esp.valueOf() );




console.log("Fin clase 29");


console.log("clase 30 obj String ");
		
	var ax = new String("FERNANDO HERRERA");
	var bx = "HERRERA";

	console.log(ax);
	console.log(ax[0]);


	var i = ax.indexOf("E");


	console.log("La letra esta: ",i);

	var izz = ax.lastIndexOf("N");

	console.log("La letra esta: ",izz);

	var nombreXF = ax.substr(0, ax.indexOf(" "));

	console.log(nombreXF);


	var asplit = ax.split(" ");
	console.log(asplit);
console.log("Fin clase 30");

console.log("clase 31 objeto fecha");

var hoyX =  new Date();
var fechaMilisegundo = new Date(1);

//var fechaFija = new Date(anioxx, mesxx, diaxx, horaxx, minxx, segxx, milixx);

var fechaFijaX =  new Date(2016, 9, 21, 23, 10, 15, 15);

console.log(hoyX);
console.log(fechaMilisegundo);
console.log(fechaFijaX);

//obtener el anio
console.log("anio es: "+ hoyX.getFullYear());

console.log("dia es: "+ hoyX.getDate());

console.log("hora es: "+ hoyX.getHours());

console.log("mes es: "+ hoyX.getMonth());


var inicioA = new Date();
/*for (var i = 0; i <= 15000; i++) {
	console.log("Algo...");
}
var finA = new Date();

var duracionX = finA.getTime() - inicioA.getTime();

console.log(duracionX);
*/

//es util una pagina momentjs.com

console.log("Fin clase 31");

console.log("clase 32 operaciones con fechas");

var sFechaX = new Date (2016,9,20);

console.log(sFechaX);

//sFechaX.setDate(25);
console.log(sFechaX);

Date.prototype.sumarDias = function( dias ){
		this.setDate( this.getDate() + dias );

		return this;
}


console.log(sFechaX.sumarDias(5));


console.log("Fin clase 32");

console.log("clase 33 obj math");

var PIX = Math.PI;
var EX = Math.E;

console.log(PIX);
console.log(EX);

var numX = 10.456789;

console.log(numX);
//redondearlo a dos decimales
console.log(Math.round(numX * 100) / 100);

//deja el redondeo al numero actual 
console.log(Math.floor(numX));

var rnd =  Math.random();

console.log(rnd);

function randomEntre(min,max){

	return Math.floor( Math.random() * (max-min +1) + min  );
}

console.log(randomEntre(500,1000));

//elevar a un exponencial

console.log( Math.pow(7,2) );


console.log("Fin clase 33");


console.log("clase 34 expresiones regulares");
//expresiones regulares 
//var regz1 =  RegExp("a");
var regz2 = /[aeiou]|é/ig;
var txtZ = "Hola Mundo, 12345. \n Qué tal?";


var arrxy = txtZ.match(regz2);  //si no encuentra regresa null /^a/ si la primera posicion es a  /o$/ $ que busque al final
//por ejemplo /^.o/ primer caraccter el que sea pero que luego siga la o
//  /[0-9]/ que contenga un rango de 0 a 9 /[a-zA-Z]/

//  /\s/ busca cualquier separacion en mi texto
// /\w/ cualquier caracter y numero
// /\d/ cualquier numero

// i = insencible  busca una letar no importa en minuscula o mayuscula    ->  /m/i         
// g = todas las apariciones apereceria un arreglo de los casos por ejemplo de "Hola mundo"  /[aeiou]ig/ ["o","a","u","o"]
// m = multilinea
// /[aeiou]|é/ig rango a,e,i,o,u,é "|" or


// buscar patrones repetitivos
//"holaa mundoo"   /o+/g -> o mas cualquier cantidad de "o" ["o","oo"]
//"holaa mundoo"  /o{2}/ -> tiene que aparcer dos veces "oo" ["oo", index:10, input:"holaa mundoo"]  tambien se puede definir /o{2,3}/  aparezca de 2 a tres veces

console.log(arrxy);

var ootroTexto = "Hola Mundooo";

var arrotro = ootroTexto.match( /o{2}/ );  
console.log(arrotro);
console.log(arrotro.index);

console.log("Fin clase 34");


console.log("clase 35 expresiones regulares");

var otherTxt = "Aeropuerto";
console.log(otherTxt);
var otherTxtZ =otherTxt.match(/[aeiou]{2,2}/ig);//cualquier vocal que se repita dos veces  {2,2} rango de dos a dos  que aparzca
console.log(otherTxtZ);
var newTxtZ = "La respuesta de la suma es: 45 + 60 = 105";
console.log(newTxtZ);
var newTxtZZ =newTxtZ.match(/[0-9]{1,}|respuesta/g);

console.log(newTxtZZ);
console.log("Fin clase 35");


console.log("clase 39 errores javascript");
/*try{

	var  aerrror = 100;

	throw "oh oh";// mandar una excepcion salirse de try

	console.log("a:  ",aerrror);
}catch(e){ //tiene que ir el catch o finally
	console.log("error catch ",e);

	if(e === "oh oh"){
		console.log("error oh oh ");
	}
}finally{
	console.log("finalemnte");
}*/


try{
	//throw new Error("Error 1");

	throw {
		nombreError:"Error tipo 1",
		accion:"Salir corriendo a",
		coderror:1
	}

	console.log("esto no se ejecuta ");
}catch(e){
		//console.log(e.message);
		console.log(e);
		console.log(e.nombreError);
}finally{
	console.log("finalemnte");
}	

console.log("Fin clase 39");


console.log("clase 43 funciones epeciales call(), apply(), bind()");
//Toda funcion de javascript tiene tres metodos que estan en su prototipo 
//Call,Apply y Bind()

var superCar ={
	colors:"BLANCO",
	marca:"MAZDA",
	imprimir: function(){
		var salida = this.marca + " - "+ this.colors; 
		return salida;
	}
}


var superCar2 ={
	colors:"ROJO",
	marca:"TOYOTA",
	
}

console.log(superCar.imprimir());


var logSuperCar = function( arg1, arg2){
	console.log("Carro: ", this.imprimir());
	console.log("Argumentos: ", arg1,arg2);
	console.log("===========");

}

var logModeloCarro = logSuperCar.bind(superCar); //para que logSuperCar - this -  apunte a superCar


logModeloCarro("abec","xyz");


logModeloCarro.call(superCar,"123","456");//los parametros pueden enviarse uno tras otro a diferencia del apply
logModeloCarro.apply(superCar,["678","789"]); //apply solo espera dos parametros [] -> en el arreglo se meten los parametros "123" "456" 
//apply es util cuando no sabemos la cantidad de parametros que ocupara la funcion 



//funciones prestadas
console.log(superCar.imprimir.call(superCar2));


console.log("Fin clase 43");



console.log("clase 44 if... else");

var axyz = 10;
var bxyz = 20;

var xcc = ( axyz > bxyz ) ?  axyz : bxyz ;


console.log(xcc);

var vnew =  ( axyz > bxyz) ? function(){
	console.log("A es mayor a B");
	return axyz;
}() : function(){
	console.log("B es mayor a A");
	return bxyz;
}();


console.log(vnew);



var kopx =  10;
var bopsx = undefined;
 var xttt =  kopx || bopsx ; //toma el que no esta en undefined

console.log(xttt);



function superGetNombre(nombre){
	var nombs = nombre || "<sin nombre>"; //se pueden evaluar mas de tres veces  nombre || null || "<sin nombre>"
	console.log(nombs);
}
superGetNombre();


console.log("Fin clase 44");



console.log("clase 45 switch");

var meszz = 40;

switch(meszz){

	case (10 > 5) ? 40:1:
		console.log("Enero");
		break;
	case 2:
		console.log("Febrero");
		break;	
   case 3:
		console.log("Marzo");
        break;
	case 4:
		console.log("Abril");	
		break;
	default: 
		console.log("cuqluier mes");	

}

console.log("Fin clase 45");


console.log("clase 46 json");

var objJSX = {
	nombre:"FERNANDO",
	edad:"30"
}

console.log("objeto literal",objJSX);

var jsonString = JSON.stringify(objJSX);


console.log(jsonString);

var objetoDesdeJSON = JSON.parse(jsonString);

console.log(objetoDesdeJSON.nombre);
console.log(objetoDesdeJSON.edad);

console.log("Fin clase 46");


console.log("clase 47 while - do while");


var ixp = 1;
while( ixp<=10 ){
	console.log(ixp);
	ixp++;

	if(ixp === 5){
		break;
		//continue; con la palabra continue no imprime console.log("fin while");
	}

	console.log("fin while");
}


do{
	i++;
}while( i<= 10 );


console.log("Fin clase 47");


console.log("clase 48  ciclo For  y For in");
//i+=3 aumentar de tres en tres

var PersonXXZU = function(objeto ){

	this.nombre = objeto.nombre;
	this.edad = objeto.edad;
	this.apellido = objeto.apellido;

};


//FOR IN

var juanlxz = new PersonXXZU({
	nombre:"FERNANDO",
	edad:30,
	apellido:"PINEDA"
});


PersonXXZU.prototype.direccion = "San JOSE";


for( prop in  juanlxz){

	console.log( juanlxz.hasOwnProperty(prop) );
	console.log( prop, juanlxz[prop]);
}



[1,2,3,4,5,6,7,8,9,10].forEach(function(val){
	console.log(val);
});
console.log("Fin clase 48");

console.log("clase 50  funciones de tiempo");

	setTimeout( function(){

		console.log("paso un segundo");
	},1000); //1000 cantidad en milisegundos

	var xSegundos = 0;

	/*
	setInterval(function(){ //lo va a realizar la funcion cada 1000 segundos se imprimira xSegundos
		xSegundos++;
		console.log("segundo", xSegundos);
	},1000);
	*/

	var superIntervalo = setInterval(function(){ //setInterval lo va a realizar la funcion cada 1000 segundos se imprimira xSegundos

		xSegundos++;

		console.log("segundo", xSegundos);

		if(xSegundos === 3){
			clearInterval(superIntervalo); //el clearInterval lo para y en este caso solo lo hace tres veces
		}

	},1000);


	var xCead = {
		nombre: "JUANxxx",
		edad: 30,
		imprimir: function(){

			var self = this;
			setTimeout(function(){
				console.log(self.nombre, self.edad);
			},1000);
			
		}
	};

	xCead.imprimir();

console.log("Fin clase 50");

console.log("clase 51  funciones de tiempo");

	function supermegaEvento(arg){
		console.log("Me dispare");
		console.log(arg);
		//console.log(arg.x,arg.y);
	}

var objetoInput = document.getElementById("objDemo");	
//agregar eventos desde javascript

objetoInput.addEventListener("keypress",supermegaEvento);


var objetoInputBoton = document.getElementById("objDemoBoton");


function supermegaEventoDos(arg){
	    console.log("Me dispare");
		console.log(arg);
		console.log(arg.x,arg.y);
}

objetoInputBoton.addEventListener("click",supermegaEventoDos);

console.log("Fin clase 51");


console.log("clase 54  cajas de dialogo");

//var aceptxxx = confirm("estas seguro que deseas irte?"); //manda un booleano al confirmar

//console.log(aceptxxx);


//var aceptxxx = prompt("Ingrese su nombre?","aceptxxx"); //pide en la alerta un campo y lo asigna a la variable
 
//console.log(aceptxxx); 

console.log("Fin clase 54");


console.log("clase 55  modo estricto");
//la palabra "use strict" hace que java sript sea mas riguroso al compilar el codigo y en el caso de que se use se pone al principio del archivo pero tambien pueden ir en la funciones
function getNombreNuevo(){
	"use strict";
	nombre22222 = "Juan"
	return nombre22222
}

console.log("Fin clase 55");
