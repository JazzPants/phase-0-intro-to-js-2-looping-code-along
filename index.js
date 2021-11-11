// Code your solutions in this file
/*
for ([initialization]; [condition]; [iteration]) {
    [loop body]
  }
 */ 

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     //debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }



// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         return (`Wrapped ${gifts[i]} and added a bow!`); 
//     }
//     return gifts;
// }
// console.log(wrapGifts(gifts));

//FOR LOOP
array1 = ["ada", "brendan", "ali"]

function writeCards(array, event) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    debugger;
    }
    return newArray;
}

console.log(writeCards(array1, "welcome"));

//WHILE LOOP

function countDown(x) {
    while (x>=0) {
        console.log(x--)
    }
}

//if you use x > 0, then you need to print 0 (to pass the npm test):
/*
function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber ); //prints 0 after all iterations executed, that is, starting number reaches 0
}
*/

countDown(10);