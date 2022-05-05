let botaoCopia = selecionarElemento("#botaoCopia");

botaoCopia.addEventListener("click", function(){
    copiar(saida);
});

function copiar(saida) {
    let textoCopiado = saida;
    textoCopiado.focus();
    navigator.clipboard.writeText(textoCopiado.textContent);
}