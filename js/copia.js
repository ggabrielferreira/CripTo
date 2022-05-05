let botaoCopia = selecionarElemento("#botaoCopia");
let textoCopiado = selecionarElemento("#textoCopiado")

botaoCopia.addEventListener("click", function(){
    copiar(saida);
    textoCopiado.classList.remove("hidden");
});

function copiar(saida) {
    let textoCopiado = saida;
    textoCopiado.focus();
    navigator.clipboard.writeText(textoCopiado.textContent);
}