// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


// let amigos = [];

// function asignarMensajeElemento(texto,elemento) {
//     let titulo = document.querySelector(elemento);
//     titulo.innerHTML = texto;
// }

// function agregarAmigo() {
    //     const inputAmigo = document.getElementById('amigo');
    //     const nombreAmigo = inputAmigo.value.trim();
    
    //     if (nombreAmigo === '') {
        //         asignarMensajeElemento('Por favor, ingresá un nombre válido','h2');
        //     } else {
            //         asignarMensajeElemento('Digite el nombre de sus amigos','h2')
            //         amigos.push(nombreAmigo);
            //     }
            //     console.log(amigos);
            //     limpiarInput();
            // }
            
            // function limpiarInput() {
                //     let inputLimpio = document.getElementById('amigo')
                //     inputLimpio.value = '';
                // }
                
//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];


//En lugar del alert,se da la información al usuario mediante la etiqueta h2 y el método 'querySelector'.
function asignarMensajeElemento(texto, selector) {
    let elemento = document.querySelector(selector);
    elemento.innerHTML = texto;
}

/*Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado 
por el usuario.
Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."*/

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === '') {
        asignarMensajeElemento('Por favor, ingresá un nombre válido', 'h2');
    }else {
        asignarMensajeElemento('Ingresá otro nombre o presiona el botón "Sortear amigo"', 'h2');
    } 
    amigos.push(nombreAmigo);
    amigos = amigos.filter(amigo => amigo.trim() !== '');
    
    console.log(amigos);
    limpiarInput();
    actualizarAmigos(nombreAmigo);
    return;
}
//Limpiar input luego de elegir el nombre

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos
function actualizarAmigos(nombreAmigo) {
    const lista = document.getElementById('listaAmigos');
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = nombreAmigo;
    lista.appendChild(nuevoItem);
  
}

//agregar esta condición dentro de la función "Sortear amigo"

function sortearAmigo() {
    const sorteo = Math.floor((Math.random)*amigos.length)
    if (amigos.length < 2) {
        asignarMensajeElemento('Por favor ingresar al menos dos nombres a la lista', 'h2')
    } else {
        asignarMensajeElemento (`La persona afortunada es ${sorteo}`,'h2')
    }
    return
}
// if (amigos.length < 2){
//     asignarMensajeElemento('ingresá al menos un nombre más a la lista','h2');
// }