var now = 12
console.log(`Agora são ${now} horas`)

if(now < 12 && now>=7) {
    console.log('Bom dia')
} else if (now >=12 && now<=18) {
    console.log(' Boa tarde')
} else if (now >=0 && now <=6){
    console.log('Madrugada')

}else{
    console.log('boa noite')
}


