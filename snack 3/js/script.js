const number = [8,89,80,98,78,77,66,67,607,3,4];

const redDiv = document.querySelector('#red');
const greenDiv = document.querySelector('#green');

for( let i = 0 ; i < number.length ; i++){
    const thisNumber = number[i];
    console.log(thisNumber)

    if( thisNumber % 2 === 0){
        greenDiv.innerHTML += thisNumber + ' ';
    } else {
        redDiv.innerHTML += thisNumber + ' ';
    }
}