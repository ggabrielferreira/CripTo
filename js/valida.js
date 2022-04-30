let textoValido = true;
let caixaAlta = new RegExp("[A-Z]");
let caracterEsp = new RegExp("[^a-zA-Z 0-9]");

function validar(entrada) {

    if (caixaAlta.test(entrada.value)) {
        alert("Texto inválido!");
        textoValido = false;
    } else if (caracterEsp.test(entrada.value)) {
        alert("Texto Inválido!");
        textoValido = false;
    } else {
        textoValido = true;
    }

    return textoValido;

};