// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.



const fristText = prompt('scrivi una parola');
const SecondText = prompt('scrivi una parola');

if(fristText.length > SecondText.length){
    console.log(SecondText + ' '+ fristText)
}else if ( SecondText.length > fristText.length ){
    console.log(fristText + ' ' + SecondText)

}else{
    console.log('le parole hanno la stessa lunghezza')
}