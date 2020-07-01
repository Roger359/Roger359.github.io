const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard 

while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random()*4)]
  console.log(currentCard)
}

// 1. an initialization starts the loop and can also be used to declare the iterator variable.
// 2. a stopping condition is the condition that the iterator variable is evaluated against—
// if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
// 3. an iteration statement is used to update the iterator variable on each loop.

// for(let counterOne = 1; counterOne < 4; counterOne++){
//   console.log(counterOne)
// }

// while Loop that Prints 1,2 and 3
// let counterTwo = 1;
// while(counterTwo < 4){
//   console.log(counterTwo)
//   counterTwo++;
// }

/**
 * Nested Loops
 */
// Write your code below


// const  bobsFollowers = ['roger','darianela','veronica','jorge']
// const tinasFollowers = ['roger','darianela','pepe']
// const mutualFollowers = []

// for(let i = 0; i < bobsFollowers.length; i++)
// {
//   for(let j = 0; j < tinasFollowers.length; j++)
//   {
//     if(bobsFollowers[i] === tinasFollowers[j] ){
//       mutualFollowers.push(bobsFollowers[i])
     
//     }
//   }

// }
// console.log(mutualFollowers)

let cupsOfSugarNeeded = 6
let cupsAdded = 0

do{
cupsAdded++;
}while(cupsAdded < cupsOfSugarNeeded)


console.log(cupsAdded)

/**
 * Example for break keyword in for loops
 */
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i = 0; i < rapperArray.length;i++){
  console.log(rapperArray[i])
  if(rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.")