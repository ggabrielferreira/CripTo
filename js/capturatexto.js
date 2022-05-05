let entrada = selecionarElemento("#entrada"); 
let textoCapturado = "";

entrada.addEventListener("input", function(){
    capturarTexto(entrada);
});

function capturarTexto(campoDeTexto) {
    textoCapturado = campoDeTexto.value;
    return textoCapturado;
}