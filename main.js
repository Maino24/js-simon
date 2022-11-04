let arrayNumeri = [];
let arrayNumeriGiusti = [];
let limiteNumeri = 5;
let numeriRandomHtml = document.getElementById(`numeriRandomHtml`);
let risultato = document.getElementById(`risultato`);


function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while( arrayNumeri.length < limiteNumeri ){

    arrayNumeri.push(getRandomInt(1, 100))

}

console.log(arrayNumeri);
for (i=0; i < arrayNumeri.length; i++){

    numeriRandomHtml.innerHTML += `<div class="box">${arrayNumeri[i]}</div>`

}



setTimeout( function(){

    numeriRandomHtml.style.display = `none`

    //OPPURE numeriRanodmHtml.innerHTML = ``

}, 3000);


setTimeout( function(){
    //chiedere numeri con i prompt
    for( let y=0; y < 5; y++){

        let numeroUtente = parseInt( prompt(`scrivi un numero di quelli memorizzati`));
        
        if(arrayNumeri.includes(numeroUtente)){
            //se la risposta è si pushare il numero in array secondario
            arrayNumeriGiusti.push(numeroUtente); 
        }


    }

    numeriRandomHtml.style.display= `flex`
    risultato.innerHTML = `Il tuo punteggio è: ${arrayNumeriGiusti.length}, i numeri che hai indovinato sono: ${(arrayNumeriGiusti)}`
    console.log(arrayNumeriGiusti)
}, 4000);




/*
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
    console.log(arrayRicordati)
}
    


numeriIndovinati = []

if (array.includes(arrayRicordati[i])) {
    
    numeriIndovinati.push(arrayRicordati[i])
    document.getElementById(`outputNumeriIndovinati`).innerHTML= `${numeriIndovinati}`
}else{

}


console.log(numeriIndovinati)

*/








