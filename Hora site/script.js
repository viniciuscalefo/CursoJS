function carregar(){
    var msg =window.document.getElementById('msg')
    var img = document.getElementById('foto')
    var data =new Date()
   // var hora = data.getHours()
   hora= 4
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora>=0 && hora <12) {
        img.src= 'manha.jpg'
    } else if(hora>=12 && hora <=18) {
        img.src= 'tarde.jpg'
    } else{
        img.src= 'noite.jpg'
    }
}
