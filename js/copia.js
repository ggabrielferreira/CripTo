function copiar(saida) {
    let textoCopiado = saida;
    textoCopiado.focus();
    navigator.clipboard.writeText(textoCopiado.value);
}