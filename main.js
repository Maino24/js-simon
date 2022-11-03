//creo array vuoto
array = []

//creo un ciclo for
for ( i = 0; i < 5; i++){
    
    //genero numero random
    numeroRandom = Math.floor(Math.random()* 100 ) + 1;
    //inserisco numeri random generati nell'array
    array.push(numeroRandom)
    document.getElementById(`outputNumeri`).innerHTML = `${array}`

}

console.log(array)
