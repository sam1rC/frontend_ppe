let btn_enviar, formulario;
let corre,clave,usuario;

window.onload = function()
{
	btn_enviar = document.getElementById("btn_enviar");
	correo = document.getElementById("correo");
	clave = document.getElementById("clave");
	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", procesarLogin);
}

function procesarLogin()
{
	let txt_correo, txt_clave;
	let str_usuario, md5_clave;
	let error = false;
	txt_correo = correo.value;
	txt_clave = md5(clave.value);

	str_usuario = localStorage.getItem("usuario");
	usuario = JSON.parse(str_usuario)
}