/*Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. 
Además se implementan dos variables para evitar el ingreso de caracteres especiales o números
*/

let amigos = [];
let caracteresEspeciales = /[|°¬!"#$%&/()=¿?¡+*~¨{\ [\ ]^\-_.:;,<>@]/;
let numeros = /[0-9]/;
//let sorteo = Math.floor(Math.random()*amigos.length);

//En lugar del alert,se da la información al usuario mediante la etiqueta h2 y el método 'querySelector'.

function asignarMensajeElemento(texto, selector) {
    let elemento = document.querySelector(selector);
    elemento.innerHTML = texto;
}

/*Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado 
por el usuario.*/

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();     //Se utiliza el método "trim" para recortar posibles espacios en la palabra.
    
    /* Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. 
    Si está vacío, muestra un mensaje de error: "Por favor, ingresá un nombre válido" en el h2 */
    
    if (nombreAmigo === '' || caracteresEspeciales.test(nombreAmigo) || numeros.test(nombreAmigo)) {
        asignarMensajeElemento('Por favor, ingresá un nombre válido', 'h2');
        return;
    }
    amigos.push(nombreAmigo);
    amigos = amigos.filter(amigo => amigo.trim() !== '');
    
    if (amigos.length <2){
        asignarMensajeElemento('Ingresá otro nombre', 'h2');
    } else {
        asignarMensajeElemento('Ingresá otro nombre o presiona el botón "Sortear amigo"', 'h2');
    } 
    
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

//Se agrega la función "Sortear amigo" con la condición de que haya al menos dos nombres para sortear.

function sortearAmigo() {
    if (amigos.length < 2) {
        asignarMensajeElemento('Por favor ingresar al menos dos nombres a la lista', 'h2')
    } else {
        let sorteo = Math.floor(Math.random()*amigos.length);
        borrarListaAmigos();
        asignarMensajeElemento('El resultado del sorteo es...', 'h2');
        asignarMensajeElemento (`¡¡Felicidades ${amigos[sorteo]}, tu regalo está en camino!!`,'#resultado');
        
    }
    amigos = [];
    return;
}

// Actualiza la lista de amigos para mostrar solamente al ganador

function borrarListaAmigos (){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    return;
}


