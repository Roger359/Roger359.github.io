/**
 * forEach() iterator method
 */

 
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// iterate with arrow function syntaxis
fruits.forEach(fruitItem => console.log(`I want to eat a ${fruitItem}`))

// iterate with conventional function declaration

function printFruits(fruitItem){
console.log(fruitItem)
}
fruits.forEach(printFruits)

/**
 * .map() iterator Method
 */
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0]
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => {
  return num / 100
})
console.log(smallNumbers)

/**
 * filter() iterator method
 */
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})
console.log(smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(strings => {
  return strings.length > 7;
})
console.log(longFavoriteWords)

/**
 * findIndex iterator Method
 */
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal =>{
  return animal === 'elephant'
})
console.log(foundAnimal)

const startsWithS = animals.findIndex(s => {
  return s.charAt(0) === 's'
})
console.log(startsWithS)

/**
 * .reduce() iterator Method
 */
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10)
console.log(newSum)

/** 
 * .some( ) Iterator Metho and Filter Method Examples 
 * 
*/
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter(lessThanSix => {
  return lessThanSix.length > 5
})
console.log(interestingWords)

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => { 
  return word.length > 5
} ));