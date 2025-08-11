import { barcelona, roma, paris, londres } from "./ciudades.js";

let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let Elementos = document.querySelectorAll("a");

Elementos.forEach(function (elemento) {

    elemento.addEventListener("click", function(){

        Elementos.forEach(function (elemento){
            elemento.classList.remove("active");
        });

        this.classList.add("active");

        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });

});

function obtenerContenido(parametros){
    let contenido ={
        "Roma" : roma,
        "Londres" : londres,
        "París" : paris,
        "Barcelona" : barcelona
    };
    return contenido[parametros];
}