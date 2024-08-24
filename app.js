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


function encriptar(texto) {
    return texto
        .replaceAll(letraE, encriptacionE)
        .replaceAll(letraI, encriptacionI)
        .replaceAll(letraA, encriptacionA)
        .replaceAll(letraO, encriptacionO)
        .replaceAll(letraU, encriptacionU);
}


function desencriptar(texto) {
    return texto
        .replace(new RegExp(encriptacionU, 'g'), letraU)
        .replace(new RegExp(encriptacionO, 'g'), letraO)
        .replace(new RegExp(encriptacionA, 'g'), letraA)
        .replace(new RegExp(encriptacionI, 'g'), letraI)
        .replace(new RegExp(encriptacionE, 'g'), letraE);
}

function manejarEncriptado() {
    const inputTexto = document.getElementById("texto").value;
    if (validarTexto(inputTexto)) {
        const resultado = encriptar(inputTexto);
        mostrarResultado(resultado);
    }
}

function manejarDesencriptado() {
    const inputTexto = document.getElementById("texto").value;
    if (validarTexto(inputTexto)) {
        const resultado = desencriptar(inputTexto);
        mostrarResultado(resultado);
    }
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("mensaje__por__defecto").style.display = "none";
    document.getElementById("submensaje__por__defecto").style.display = "none";
    document.querySelector("img").style.display = "none";
    document.getElementById("copiar").style.display = "block";
}

function copiarTexto() {
    const resultadoTexto = document.getElementById("resultado").textContent;
    if (resultadoTexto) {
        navigator.clipboard.writeText(resultadoTexto).then(() => {
            alert("Texto copiado");
        });
    }
}

document.getElementById("encriptar").addEventListener("click", manejarEncriptado);
document.getElementById("desencriptar").addEventListener("click", manejarDesencriptado);
document.getElementById("copiar").addEventListener("click", copiarTexto);
