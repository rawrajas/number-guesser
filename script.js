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
  if (humanGuess == secretTarget){
      return true
  }  else if (computerGuess == secretTarget) {
      return false
  }
};

//Updates the score based on the winner of the round
const updateScore = winner =>{
    if (winner === 'human'){
        humanScore += 1;
    } else if (winner === 'computer'){
        computerScore += 1;
    }
}

//Increases currentRoundNumber by 1
const advanceRound = () =>{
    currentRoundNumber += 1;
};
