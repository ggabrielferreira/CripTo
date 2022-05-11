let larguraDoDispositivo = window.screen.width;
let logo = selecionarElemento("#logo");

window.addEventListener("load",function(){
    larguraDoDispositivo = window.screen.width;
    if(larguraDoDispositivo >= 900) {
        logo.setAttribute('src', 'images/cripthis.png');
    } else {
        logo.setAttribute('src', 'images/cripToIcon.png');
    }
})

window.addEventListener("resize",function(){
    larguraDoDispositivo = window.screen.width;
    if(larguraDoDispositivo >= 900) {
        logo.setAttribute('src', 'images/cripthis.png');
    } else {
        logo.setAttribute('src', 'images/cripToIcon.png');
    }
})
