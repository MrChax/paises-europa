import { barcelona, roma, paris, londres } from "./ciudades.js"; //desestructuracion (obtengo objetos que estan en otro archivo js)


let enlaces = document.querySelectorAll('a');

const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');
const parrafo = document.getElementById('parrafo');

/*enlaces[0].addEventListener('click',  ()=>{
    titulo.innerHTML = barcelona.titulo;
    subtitulo.innerHTML = barcelona.subtitulo;
    parrafo.innerHTML = barcelona.parrafo;
})

enlaces[1].addEventListener('click',  ()=>{
    titulo.innerHTML = roma.titulo;
    subtitulo.innerHTML = roma.subtitulo;
    parrafo.innerHTML = roma.parrafo;
})

enlaces[2].addEventListener('click',  ()=>{
    titulo.innerHTML = paris.titulo;
    subtitulo.innerHTML = paris.subtitulo;
    parrafo.innerHTML = paris.parrafo;
})

enlaces[3].addEventListener('click',  ()=>{
    titulo.innerHTML = londres.titulo;
    subtitulo.innerHTML = londres.subtitulo;
    parrafo.innerHTML = londres.parrafo;
})*/



///////////////////////// FORMA 2 ////////////////////
/*
// Almacena los objetos de las ciudades en un array
const ciudades = [barcelona, roma, paris, londres];

// Asigna un identificador único a cada enlace
enlaces.forEach((enlace, index) => {
    enlace.setAttribute('data-ciudad', index); // Usamos el índice del enlace como identificador
    enlace.addEventListener('click', () => {
        // Obtenemos el índice de la ciudad desde el atributo 'data-ciudad' del enlace
        let ciudadIndex = parseInt(enlace.getAttribute('data-ciudad'));
        // Accedemos al objeto de la ciudad correspondiente usando el índice obtenido
        let ciudad = ciudades[ciudadIndex];
        // Actualizamos los elementos HTML con los datos de la ciudad
        titulo.innerHTML = ciudad.titulo;
        subtitulo.innerHTML = ciudad.subtitulo;
        parrafo.innerHTML = ciudad.parrafo;
    });
});
*/


////////////////// FROMA 3 ////////////////////

//Agrego evento Click a cada enlace
enlaces.forEach((enlace)=> {
    enlace.addEventListener('click', ()=>{
        enlaces.forEach((enlace) => {
            //1Remuevo el activo de todos los enlaces en el mismo momento que hago click
            enlace.classList.remove('active');
        })
        //2 Despues de remover cuando ya hice click y se removieron se ejecuta esto con el mismo click y se agrega al active al que corresponda
        enlace.classList.add('active');

        //3 obtengo el objeto que corresponde a la eleccion que hice
        let objeto = obtenerObjeto(enlace.innerHTML);

        //4 Muestro contenido en el dom
        titulo.innerHTML = objeto.titulo;
        subtitulo.innerHTML = objeto.subtitulo;
        parrafo.innerHTML = objeto.parrafo;
    })
    

})
    
const obtenerObjeto = (enlace) => {
    const objeto = {
        Barcelona : barcelona,
        Roma : roma,
        París : paris,
        Londres : londres
    }

    return objeto[enlace];
}

