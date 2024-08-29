// Función para mostrar temporalmente una imagen antes de mostrar el resultado
function mostrarTransicion(imagenId, callback) {
    // Mostrar la imagen de transición
    document.getElementById(imagenId).style.display = "block";

    // Ocultar todos los demás elementos durante la transición
    document.getElementById("imagenMuñeco").style.display = "none";
    document.getElementById("textoEncontrado").style.display = "none";
    document.getElementById("textoNoEncontrado").style.display = "none";

    // Después de 1.5 segundos (1500 milisegundos), ocultar la imagen de transición y ejecutar el callback
    setTimeout(function() {
        document.getElementById(imagenId).style.display = "none";
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
        // Mostrar la imagen de encriptado y luego mostrar el texto encriptado
        mostrarTransicion("imagenEncriptado", function() {
            document.getElementById("textoSalida").value = textoCifrado;
            document.getElementById("textoEncontrado").style.display = "block";
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
        // Mostrar la imagen de desencriptado y luego mostrar el texto desencriptado
        mostrarTransicion("imagenDesencriptado", function() {
            document.getElementById("textoSalida").value = textoCifrado;
            document.getElementById("textoEncontrado").style.display = "block";
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
    alert("Texto copiado al portapapeles");
}
