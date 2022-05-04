let interactivo;
let logged = false;

window.onload = function()
{
    personajes = document.getElementById("interactivo");
    personajes.addEventListener("click",evaluarLogin);
    cambiarSesion(JSON.parse(localStorage.getItem("logeado")));
}

function evaluarLogin(evento)
{
    if (logged)
    {
        location.href = "interactivo.html"
    }
    else
    {
        location.href = "login.html"
        window.alert("No estás logeado");
    }
}

function cambiarSesion(bandera)
{
    logged = bandera;
    localStorage.setItem("logeado",logged);

}