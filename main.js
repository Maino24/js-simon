//creo array vuoto
array = []

//creo condizione per funzione timing
setTimeout(functionScomparire, 10000)

//creo condizione per funzione prompt
setTimeout(functionprompt, 2000)


//creo un ciclo for
for ( i = 0; i < 5; i++){
    
    //genero numero random
    numeroRandom = Math.floor(Math.random()* 100 ) + 1;
    //inserisco numeri random generati nell'array
    array.push(numeroRandom)
    document.getElementById(`outputNumeri`).innerHTML = `${ array }`

}

console.log(array)

//funzione per far scomparire i numeri
function functionScomparire(){

    document.getElementById(`outputNumeri`).style.display=`none`


}