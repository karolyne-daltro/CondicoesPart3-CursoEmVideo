function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = 'log-html-dia2.png'
    document.body.style.background = '#b3acbd'
}else if (hora >= 12 && hora < 18) {
    //Boa Tarde!
    img.src = 'log-html-tarde2.png'
    document.body.style.background = '#c6a493'
}else {
    //Boa noite!
    img.src = 'log-html-noite2.png'
    document.body.style.background = '#6198c6'
}
}