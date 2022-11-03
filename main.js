//creo array vuoto
array = []

//creo condizione per funzione timing
setTimeout(functionScomparire, 8000)

//creo condizione per funzione prompt
setTimeout(functionPrompt, 11000)


//creo un ciclo for
for ( i = 0; i < 5; i++){
    
    //genero numero random
    numeroRandom = Math.floor(Math.random()* 100 ) + 1;
    //inserisco numeri random generati nell'array
    array.push(numeroRandom)
    document.getElementById(`outputNumeri`).innerHTML = `${ array }`

}

console.log(array)

//array per inserire numeri ricordati
arrayRicordati = []

//funzione per far scomparire i numeri
function functionScomparire(){

    document.getElementById(`outputNumeri`).style.display=`none`
    
}





function functionPrompt(){

    for(i = 0; i < 5; i++){

        let numero = parseInt(prompt(`inerisci il primo numero`))
        arrayRicordati.push(numero)

    }

}
    console.log(arrayRicordati)


