let textoValido = true;
let erro = "";
let caixaAlta = new RegExp("[A-Z]");
let caracterEsp = new RegExp("[^a-zA-Z 0-9]");

function validar(entrada) {

    if (caixaAlta.test(entrada.value)) {
        erro = "caixa alta"
        exibirErro(erro);
        textoValido = false;
    } else if (caracterEsp.test(entrada.value)) {
        erro = "caracter especial"
        exibirErro(erro);
        textoValido = false;
    } else if(entrada.value == ""){
        erro = "sem entrada"
        exibirErro(erro);
        textoValido = false;
    } else {
        erro = "";
        exibirErro(erro);
        textoValido = true;
    }

    return textoValido;
};