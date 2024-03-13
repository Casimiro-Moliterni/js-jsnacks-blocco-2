// Chiedi un numero di 4 cifre all’utente 
// e calcola la  somma di tutte le cifre  
// che compongono il numero 

const userNumber = prompt('scrivi un numero di 4 cifre');

let sum = 0;
for (let i = 0 ; i < userNumber.length ; i++){
    const thisNumber = parseInt(userNumber[i]);
    console.log(thisNumber)

    sum += thisNumber ;
}

console.log(sum)