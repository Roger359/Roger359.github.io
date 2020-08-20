// MESSAGE MIXER  

// Message Mixer is a messaging service that allows you to perform an action on input text and display
// the output of that behavior to the console. For example, with the current functions defined in Message Mixer, you can:

// count the characters in a message
// apitalize the first character of words
// everse a message’s words in place
// eversing characters in place
// eplace the first occurrence of a string
// eplace all occurrences of a string
// ncode text by swapping certain characters for other characters

// At present, Message Mixer runs as a program in a single file. 
// This single file includes functions that define behavior as well as the output. 
// Message Mixer knows that by extracting the functions into a module, logic can be reused in different parts of our application.

export function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

export function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};

export function reverseWord(word) {
  return word.split("").reverse().join("");
};

export function reverseAllWords(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};


export function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

export function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

export function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};
export function palindrome(string){
  return `${string} ${reverseWord(string)}`
}

export function pigLatin(sentence,character ){
 return sentence.split(' ').join(character + ' ');
}


