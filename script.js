// Selección de elementos del DOM
const divNoEncontrado = document.querySelector('#muñeco');
const divEncontrado = document.querySelector('#textoEncontrado');
const botonEncriptador = document.querySelector('#encriptar');
const botonDesencriptador = document.querySelector('#desencriptar');
const textoEntrada = document.querySelector('textarea');  // Este selector debería ser más específico
const textoSalida = document.querySelector('#textoSalida');
const copia = document.querySelector('#copiar');
const aviso = document.querySelector('#textoCopiado');
var prohibidos = /[A-ZáéíóúÁÉÍÓÚ]/;

// Función de encriptación
function encriptar(texto){
    return texto.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
}

// Función para manejar el clic en el botón de encriptar
function clickBotonEncriptar(){
    const textoPuro = textoEntrada.value;
    if(prohibidos.test(textoPuro)){
        alert("Por favor ingrese un texto que contenga solamente letras minúsculas sin acentos.");
        divNoEncontrado.querySelector('img').src = "./imagenes/Encriptado.png";
    }
    else{
        divNoEncontrado.style.display = 'none';
        divEncontrado.style.display = 'inline-block';
        var textoEncriptado = encriptar(textoPuro);
        textoSalida.value = textoEncriptado;  // Cambié textContent a value
    }
}

// Función de desencriptación
function desencriptar(texto){
    return texto.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g, 'u');
}

// Función para manejar el clic en el botón de desencriptar
function clickBotonDesencriptar(){
    let textoPuro = textoEntrada.value;
    if(prohibidos.test(textoPuro)){
        alert("Por favor ingrese un texto que contenga solamente letras minúsculas sin acentos.");
        divNoEncontrado.querySelector('img').src = "./imagenes/Desencriptado.png";
    }
    else{
        divNoEncontrado.style.display = 'none';
        divEncontrado.style.display = 'inline-block';
        var textoDesencriptado = desencriptar(textoPuro);
        textoSalida.value = textoDesencriptado;  // Cambié textContent a value
    }
}

// Función para mostrar el muñeco si no hay texto
function mostrarMuñeco(){
    if(textoEntrada.value == ""){
        divNoEncontrado.style.display = 'inline-block';
        divEncontrado.style.display = 'none';
    }
}

// Función para copiar texto al portapapeles
function botonCopiar(){
    navigator.clipboard.writeText(textoSalida.value);  // Cambié textContent a value
    aviso.style.opacity = '1';
    setTimeout(() => {aviso.style.opacity = '0';}, 700);
}

setInterval(mostrarMuñeco, 100);

botonEncriptador.onclick = clickBotonEncriptar;
botonDesencriptador.onclick = clickBotonDesencriptar;
copia.onclick = botonCopiar;
