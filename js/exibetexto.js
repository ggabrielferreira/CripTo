let entrada = selecionarElemento("#entrada"); 
let saida = selecionarElemento("#saida"); 
let botaoCript = selecionarElemento("#botaoCript");
let botaoDescript = selecionarElemento("#botaoDescript");
let botaoCopia = selecionarElemento("#botaoCopia");

entrada.addEventListener("input", function(){
    capturarTexto(entrada);
});

botaoCript.addEventListener("click", function(){
    validar(entrada);
    if(textoValido) criptografar(textoCapturado);
}); 

botaoDescript.addEventListener("click", function(){
    if(textoValido) descriptografar(textoCapturado);
}); 

botaoCopia.addEventListener("click", function(){
    copiar(saida);
});
