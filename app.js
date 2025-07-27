let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function agregarAmigo(){
    let nombreusuario = document.getElementById('amigo').value.trim();
    if (nombreusuario === '') {
        alert('Por favor, ingrese un nombre valido.');
        return;
    }else if (listaAmigos.includes(nombreusuario)) {
        alert('El nombre ya está en la lista. Por favor, ingrese un nombre diferente.');
        return;
    } else{
            listaAmigos.push(nombreusuario);
    }
    //console.log(nombreusuario);
    //console.log(listaAmigos);
    asignarTextoElemento('#listaAmigos', listaAmigos.join('<br>'));
    limpiarCaja();
    return;
}
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Por favor, ingrese al menos dos amigos para realizar el sorteo.');
        return;
    } else {
        let sorteado = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[sorteado];
        asignarTextoElemento('#resultado', `El amigo secreto sorteado es: ${amigoSorteado}`);
        //console.log(sorteado);
        //console.log(amigoSorteado);
        asignarTextoElemento('#listaAmigos', '');
        document.getElementById('nuevoSorteo').removeAttribute('disabled');
        document.querySelector('#sortearAmigo').setAttribute('disabled','true');
        return amigoSorteado;
    }
    
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}


function nuevoSorteo() {
    listaAmigos = [];
    asignarTextoElemento('#listaAmigos', '');
    asignarTextoElemento('#resultado', '');
    document.getElementById('nuevoSorteo').setAttribute('disabled','true');
    document.querySelector('#sortearAmigo').removeAttribute('disabled');
    limpiarCaja();
}