let saida = selecionarElemento("#saida"); 
let botaoCript = selecionarElemento("#botaoCript");

botaoCript.addEventListener("click", function(){
    validar(entrada);
    if(textoValido) criptografar(textoCapturado);
}); 

function criptografar(textoCapturado){
    let textoCripto = [];
    let textoFinal = "";

    // Percorre todo o texto capturado 
    for(letra = 0; letra < textoCapturado.length; letra++){  
        if(textoCapturado[letra] == "a") {textoCripto.push("ai");}
        else if(textoCapturado[letra] == "e") {textoCripto.push("enter");}
        else if(textoCapturado[letra] == "i") {textoCripto.push("imes");}
        else if(textoCapturado[letra] == "o") {textoCripto.push("ober");}
        else if(textoCapturado[letra] == "u") {textoCripto.push("ufat");}
        else {textoCripto.push(textoCapturado[letra]);}
    };
    
    // Percorre o array textoCripto, formando o texto final com a concatenção do valor de cada índice 
    for(i=0; i<textoCripto.length; i++){
        textoFinal += textoCripto[i];
    };    

    saida.textContent = textoFinal;

    return saida.textContent;
};