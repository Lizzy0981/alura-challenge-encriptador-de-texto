// Función para mostrar temporalmente una imagen antes de mostrar el resultado
function mostrarTransicion(imagenId, callback) {
    document.getElementById(imagenId).style.display = "block";
    document.getElementById(imagenId).classList.add('fade-in');

    document.getElementById("imagenMuñeco").style.display = "none";
    document.getElementById("textoEncontrado").style.display = "none";
    document.getElementById("textoNoEncontrado").style.display = "none";

    setTimeout(function() {
        document.getElementById(imagenId).style.display = "none";
        document.getElementById(imagenId).classList.remove('fade-in');
        callback();
    }, 1500);
}

// Función para encriptar el texto ingresado
function encriptar() {
    let texto = document.getElementById("textoIngreso").value;
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        mostrarTransicion("imagenEncriptado", function() {
            document.getElementById("textoSalida").value = textoCifrado;
            document.getElementById("textoEncontrado").style.display = "block";
            document.getElementById("textoEncontrado").classList.add('fade-in');
        });
    } else {
        alert("Debes ingresar algún texto");
    }
}

// Función para desencriptar el texto ingresado
function desencriptar() {
    let texto = document.getElementById("textoIngreso").value;
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        mostrarTransicion("imagenDesencriptado", function() {
            document.getElementById("textoSalida").value = textoCifrado;
            document.getElementById("textoEncontrado").style.display = "block";
            document.getElementById("textoEncontrado").classList.add('fade-in');
        });
    } else {
        alert("Debes ingresar algún texto");
    }
}

// Función para copiar el texto
function copiarTexto() {
    let textoCopiado = document.getElementById("textoSalida");
    textoCopiado.select();
    document.execCommand("copy");
    
    let mensajeCopiado = document.getElementById("textoCopiado");
    mensajeCopiado.style.display = "block";
    mensajeCopiado.style.opacity = "1";
    
    setTimeout(function() {
        mensajeCopiado.style.opacity = "0";
        setTimeout(function() {
            mensajeCopiado.style.display = "none";
        }, 500);
    }, 2000);
}

// Función para limpiar los datos
function limpiar() {
    document.getElementById("textoIngreso").value = "";
    document.getElementById("textoSalida").value = "";
    document.getElementById("imagenMuñeco").style.display = "block";
    document.getElementById("textoNoEncontrado").style.display = "block";
    document.getElementById("textoEncontrado").style.display = "none";
    document.getElementById("imagenEncriptado").style.display = "none";
    document.getElementById("imagenDesencriptado").style.display = "none";
}

// Función para cambiar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    document.getElementById('darkModeToggle').textContent = isDarkMode ? '☀️' : '🌙';
}

// Event Listeners
document.getElementById("encriptar").addEventListener("click", encriptar);
document.getElementById("desencriptar").addEventListener("click", desencriptar);
document.getElementById("copiar").addEventListener("click", copiarTexto);
document.getElementById("limpiar").addEventListener("click", limpiar);
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// Verificar el modo oscuro al cargar la página
document.addEventListener('DOMContentLoaded', (event) => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').textContent = '☀️';
    }
});
