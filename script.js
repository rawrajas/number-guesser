let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates random integer between 0 & 9
const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
};

/*Determines which player (human or computer) wins based on which guess is closest to the target.
If both players are tied, the human user should win.
 */

const compareGuesses = (humanGuess, computerGuess, secretTarget) =>{
  if (humanGuess === secretTarget){
      return true
  }  else if (computerGuess === secretTarget) {
      return false
  }
};

