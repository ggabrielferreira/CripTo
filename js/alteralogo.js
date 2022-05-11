let larguraDoDispositivo = window.screen.width;
let logo = selecionarElemento("#logo");

window.addEventListener("load",function(){
    larguraDoDispositivo = window.screen.width;
    if(larguraDoDispositivo >= 900) {
        logo.setAttribute('src', 'images/cripTo.png');
        logo.setAttribute('alt', 'logo do site: CripTo com um gradiente verde. Logo embaixo, vários 0 e 1 com o mesmo gradiente');
    } else {
        logo.setAttribute('src', 'images/cripToIcon.png');
        logo.setAttribute('alt', 'logo do site: um grande c preenchindo com um gradiente verde, cortado na diagonal');
    }
})

window.addEventListener("resize",function(){
    larguraDoDispositivo = window.screen.width;
    if(larguraDoDispositivo >= 900) {
        logo.setAttribute('src', 'images/cripTo.png');
        logo.setAttribute('alt', 'logo do site: CripTo com um gradiente verde. Logo embaixo, vários 0 e 1 com o mesmo gradiente');
    } else {
        logo.setAttribute('src', 'images/cripToIcon.png');
        logo.setAttribute('alt', 'logo do site: um grande c preenchindo com um gradiente verde, cortado na diagonal');
    }
})
