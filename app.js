// Variables para las letras y sus equivalencias encriptadas
const letraE = "e";
const letraI = "i";
const letraA = "a";
const letraO = "o";
const letraU = "u";

const encriptacionE = "enter";
const encriptacionI = "imes";
const encriptacionA = "ai";
const encriptacionO = "ober";
const encriptacionU = "ufat";

// Función para validar si el texto tiene solo letras minúsculas y sin acentos
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        if (/[A-Z]/.test(texto)) {
            alert("Solo letras minúsculas");
        } else if (/[áéíóúÁÉÍÓÚ]/.test(texto)) {
            alert("Solo letras sin acentos");
        }
        return false;
    }
    return true;
}

// Función para encriptar el texto
function encriptar(texto) {
    let encriptado = texto
        .replaceAll(letraE, encriptacionE)
        .replaceAll(letraI, encriptacionI)
        .replaceAll(letraA, encriptacionA)
        .replaceAll(letraO, encriptacionO)
        .replaceAll(letraU, encriptacionU);
    return encriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let desencriptado = texto
        .replaceAll(encriptacionE, letraE)
        .replaceAll(encriptacionI, letraI)
        .replaceAll(encriptacionA, letraA)
        .replaceAll(encriptacionO, letraO)
        .replaceAll(encriptacionU, letraU);
    return desencriptado;
}

// Función para manejar el clic en el botón de encriptar
function manejarEncriptado() {
    const inputTexto = document.getElementById("texto").value;
    if (validarTexto(inputTexto)) {
        const resultado = encriptar(inputTexto);
        mostrarResultado(resultado);
    }
}

// Función para manejar el clic en el botón de desencriptar
function manejarDesencriptado() {
    const inputTexto = document.getElementById("texto").value;
    if (validarTexto(inputTexto)) {
        const resultado = desencriptar(inputTexto);
        mostrarResultado(resultado);
    }
}

// Función para mostrar el resultado y ocultar elementos predeterminados
function mostrarResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("mensaje__por__defecto").style.display = "none";
    document.getElementById("submensaje__por__defecto").style.display = "none";
    document.querySelector("img").style.display = "none";
    document.getElementById("copiar").style.display = "block";
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const resultadoTexto = document.getElementById("resultado").textContent;
    if (resultadoTexto) {
        navigator.clipboard.writeText(resultadoTexto).then(() => {
            alert("Texto copiado");
        });
    }
}

// Event listeners para los botones
document.getElementById("encriptar").addEventListener("click", manejarEncriptado);
document.getElementById("desencriptar").addEventListener("click", manejarDesencriptado);
document.getElementById("copiar").addEventListener("click", copiarTexto);
