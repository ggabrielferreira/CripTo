let botaoCopia = selecionarElemento("#botaoCopia");

botaoCopia.addEventListener("click", function(){
    copiar(saida);
});

entrada.addEventListener("paste", function(){
    botaoCopia.classList.remove("copiado");
    botaoCopia.textContent = "Copiar"
});

function copiar(saida) {
    let textoCopiado = saida;
    textoCopiado.focus();
    navigator.clipboard.writeText(textoCopiado.textContent);
    botaoCopia.classList.add("copiado");
    botaoCopia.textContent = "Copiado!"
}