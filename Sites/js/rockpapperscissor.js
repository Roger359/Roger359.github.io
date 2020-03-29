const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock' ||  'paper' || 'scissor' || 'bomb'){
      return userInput;
    }
    else{
      console.log("Error!");
    }
  };
  
   const getComputerChoice = () => {
     const randomNumber = Math.floor(Math.random()* 3);
     if(randomNumber === 0){
       return 'rock';
     }else if(randomNumber === 1){
       return 'paper';
     }else if(randomNumber === 2){
       return 'scissor';
     }
   };
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb'){
      return "YOU WON !";
    }
    if(computerChoice === userChoice){
      return 'Tie';
    }
      if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return "The Computer Won!";
      }else{
        return "You won"
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissor'){
        return "The Computer Won!";
      }else{
        return "You Won!";
      }
    }
    if(userChoice === 'scissor'){
      if(computerChoice === 'rock'){
        return "The Computer Won!";
      }else{
        return "You Won";
      }
    }
   
      
   
    };
  
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You Chose:' + userChoice);
    console.log('Computer chose:' + computerChoice);
   
    
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();