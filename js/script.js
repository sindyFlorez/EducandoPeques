console.log('hola')
document.getElementById('enviar').onclick= function enviar (){
//var usuario= document.getElementById('usuario')
//var contraseña= document.getElementById('contraseña')
var nombre= document.getElementById('nombre').value
var correo= document.getElementById('correo').value


if(nombre.length > 15){

alert("tu nombre es demasiado largo");

return false;
}

console.log(nombre.length)
console.log(nombre)



	console.log("Enviando formulario...");
	var mensajeError = [];

	if(nombre.length >15){
		mensajeError.push('Tu nombre es muy largo')
	}

	
	



	return false;
}
