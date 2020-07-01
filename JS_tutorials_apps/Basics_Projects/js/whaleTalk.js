// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
//There are a few simple rules for translating text to whale language:

//There are no consonants. Only vowels excluding “y”.
//The u‘s and e‘s are extra long, so we must double them ///in our program.

const input = 'turpentine and turtles'
const vowels = ['a', 'e', 'i', 'o', 'u']
const resultArray = []
// nested for loop exercise
// outer for loop
for (let i = 0; i < input.length; i++) {
  // inner for loop
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
  }
  if (input[i] === 'e') {
    resultArray.push(input[i])
  } else if (input[i] === 'u') {
    resultArray.push(input[i])
  }
}

console.log(resultArray.join('').toUpperCase())