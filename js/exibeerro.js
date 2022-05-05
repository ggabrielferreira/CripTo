let aviso = selecionarElemento("#aviso");
let textoAviso = selecionarElemento("#textoAviso");
let textoNaoEncontrado = selecionarElemento("#textoNaoEncontrado");
let textoEncontrado = selecionarElemento("#textoEncontrado");

function exibirErro(erro) {
    if(erro == "caixa alta") {
        aviso.classList.remove("hidden");
        textoAviso.textContent = "Apenas caracteres minúsculos"
    } else if(erro == "caracter especial") {
        aviso.classList.remove("hidden");
        textoAviso.textContent = "Caracteres especiais não são permitidos"
    } else if(erro == "sem entrada") {
        aviso.classList.remove("hidden");
        textoAviso.textContent = "Por favor, digite algum texto antes"
    } else {
        aviso.classList.add("hidden");
        textoNaoEncontrado.classList.add("hidden");
        textoEncontrado.classList.remove("hidden");
    }
}