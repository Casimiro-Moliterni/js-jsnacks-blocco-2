// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo


// scrivere prompt inserisci un numero 

const userNumber = parseInt(prompt('Scrivi un numero'));
console.log(userNumber)

// se il numero è pari stampalo altrimenti stampa il numero successivo 

let numberResult ;

if (userNumber % 2 == 0 ){
    numberResult = userNumber ;
    console.log(numberResult)
}else if (!userNumber % 2 == 0){
    numberResult = userNumber + 1;
    console.log(numberResult)
}