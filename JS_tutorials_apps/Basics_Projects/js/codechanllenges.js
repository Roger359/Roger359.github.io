// reverseArray() function example

// Write your code here:

/// first option with built-in method 
// const reverseArray = array => array.reverse()

/// second option using for loop, it creates a void array becases the function no returned a blank array for default

// const reverseArray = obj => {
//   reversed = [];
//   for (let i = obj.length-1; i>=0; i--) {
//     reversed.push(obj[i]);
//   }
//   return reversed;
// }

/// other way for solution
// /third option using Iterator forEach to travel de array and then using unshi method for arrays to apply the reverse ant returning a array 
/// because the funtion dosent do it for itself

function reverseArray(list) {
  array = [];
  list.forEach(stack);
  return array;
}

function stack(item) {
  array.unshift(item);
}
let array;

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// greetAliens() function Example

// Write your code here:
// first way using for loop

// function greetAliens(arr){
// const array = []
// for (let i = 0; i < arr.length; i++){
// console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
// }
// return array
// }

/// The forEach() method executes a provided function once for each array element.

const greetAliens = arr => arr.forEach(arr => console.log(`Oh powerful ${arr}, we humans offer our unconditional surrender!`))

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

/// convertToBaby() example

// Write your code here:
// first option using  for loop way

// function convertToBaby(arr){
// const newArray = [];
// for(let i = 0; i < arr.length;i++){
//    newArray.push('baby '+ arr[i])
// }
// return newArray;
// }

/// The map() method creates a new array populated with 
/// the results of calling a provided function on every 
/// element in the calling array.

const convertToBaby = arr => arr.map(arr => 'baby ' + arr)

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))

///
/// We wrote a function, smallestPowerOfTwo(), which takes in an array.
/// 
/// Within our function, we create a new array results. We loop through the argument array
/// and push in the smallest power of two which is greater than the current element.
/// 
/// It’s not doing what we want. Can you fix our code, please?

// const numbers = [5, 3, 9, 30];
// const smallestPowerOfTwo = arr => {
//       let results = [];
//       // The 'outer' for loop - loops through each element in the array
//       for (let i = 0; i < arr.length; i++) {
//             number = arr[i];
//             console.log(i)

//      // The 'inner' while loop - searches for smallest power of 2 greater than the given number
//           i = 1;
//             console.log(i)
//             while (i < number) {
//                   i = i * 2;
//                   console.log(i)
//             }
//             results.push(i);
//       }
//       return results
// }

const log2 = Math.log2;
const ceil = Math.ceil;
const numbers = [5, 3, 9, 30];
const smallestPowerOfTwo = arr => {
  let results = [];
  arr.forEach(x => results.push(2 ** ceil(log2(x))));
  return results;
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8] 

///  declineEverything() and acceptEverything() Code Challenges from codecademy
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(arr) {
  arr.forEach(politelyDecline)
}
// const declineEverything = arr => arr.forEach(politelyDecline)
declineEverything(veggies)

function acceptEverything(arr) {
  for (const i of arr) {
    console.log(`Ok, I guess I will eat some ${i}.`);
  }
}
acceptEverything(veggies);

/// squareNums() Code Challenges example from codecademy
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
function squareNums(arr) {
  const newArray = arr.map(ele => toSquare(ele))
  return newArray
}
console.log(squareNums(numbers))

/// shoutGreetings() code challenge from codecademy 
// Write your code here:
function shoutGreetings(arr) {
  const newArray = arr.map(ele => ele.toUpperCase() + '!')
  return newArray
}

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

/// sortYears() code challege form codecademy 
// Write your code here:
/// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. 
function sortYears(arr) {
  const checkYears = (year1, year2) => year1 < year2
  return arr.sort(checkYears)

}

// Feel free to uncomment the below code to test your function:
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/// justCoolStuff() code challenge from codecademy

/// Write a function justCoolStuff() that takes in two arrays of strings,
/// and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

function justCoolStuff(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item))
}

// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

///  isTheDinnerVegan() code challenge example

// Write your code here:
/// The every() method tests whether all elements in the array pass the test implemented 
/// by the provided function. It returns a Boolean value.

// const isTheDinnerVegan = arr => arr.every(food => food.source === ‘plant’);

function isTheDinnerVegan(arr){
  return arr.every(food => food.source === 'plant')
  }
  
  // Feel free to comment out the code below to test your function
  
  const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  
  console.log(isTheDinnerVegan(dinner))
  // Should print false

  /// sortSpeciesByTeeth() code challenge example
  const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
function sortSpeciesByTeeth(arr){
  const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
  return arr.sort(compareTeeth)
}
// form 2
const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)
// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

///  findMyKeys() example 

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

/// dogFactory() exercise
// Write your code here:
function dogFactory(name,breed,weight){
  return {
    _name: name,
    _breed: breed,
    _weight:weight,
    get name(){
      return this._name
    },
    set name(nameIn){
      this._name = nameIn
    },
    get breed(){
      return this._breed
    },
    set breed(breedIn){
      this._breed = breedIn
    },
    get weight(){
      return this._weight
    },
    set weight(weightIn){
      this._weight = weightIn
    },
    bark(){
      return 'ruff! ruff!'
    },
    eatTooManyTreats(){
      return this._weight++
    }
  }
}

