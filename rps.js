
// created an array with our three options, rock, paper, scissors
var options = ["r", "s", "p"];
// function to prompt user to input one of their choices
var tie_count = 0;
var win_count = 0;
var lose_count = 0;

var playGame = function () {
    let userChoice = prompt("r,p, or s");

    //check to see if they just hit cancelled or not
    if(!userChoice) {
        return;
       }
    // creates a random # 0,1,2 to match the indexing of options rock, paper, or scissors. 
    const randomNum = Math.floor(Math.random() * options.length);
    // Takes a random number and finds the index based on the numnber in the array of options;
    const compChoice = options[randomNum];
      //tells the user what they chose and what the computer chose  
      console.log(`you chose ${userChoice} and I chose ${compChoice}`)
      window.alert(`you chose ${userChoice} and I chose ${compChoice}` ); 
      
      
      
      // If there is a tie: add 1 to the tie counter
    if (userChoice === compChoice) {
        console.log(`tie`);  
        tie_count++;
        window.alert(`It was a tie!`);
       
       return;
    }

    // If I chose rock
    if (userChoice == "r"){
        // ... and comp chooses paper, I lose. Add 1 to lose_count
        if (compChoice == "p") {
            console.log(`lost`)
            lose_count++;
            window.alert(`you lost!`);
        }
        // ... if not, else I win. add 1 to win_count
        else { 
            console.log(`won`);
            win_count++;
            window.alert(`you won!`)
        }
    
    }
        // if I chose paper
    if (userChoice == "p") {
        // ... and comp choses rock, I win. add 1 to win_count
        if (compChoice == "r"){
            console.log(`won`);
            win_count++;
            window.alert(`you won!`);
         }   
         // ... if not, else I lose. add 1 to lose_count
        else {
            console.log(`lost`);
            lose_count++;
            window.alert(`you lost!`);       
        }
    }
        // if I scissors
    if (userChoice == "s") {
        
        if (compChoice == "r"){
        // ... and comp choses rock, I lose. add 1 to lose_ count
        console.log(`lost`);
        lose_count++;
        window.alert(`You lost!`);
        return;
        }
    
        else {
        // .. else I win. add 1 to win_count
        console.log(`won`);
        win_count++;
        window.alert(`You Win!`)

        }
    }      
}

// a function to ask the user if they want to play again. 
var again = function () {
    let playAgain =prompt("Would you like to play again?");

    if (playAgain == "yes") {
        playGame();
        return;
    }
    if (playAgain =="no") {
        window.alert("Ok! Thank you for playing Rock, Paper, Scissors!");
        return;  
    }
    else {
        window.alert(`that is not a acceptable response`)
        return;
    }
}

//Play game 

playGame();
// Shows the stats of the games
    
console.log(`Wins: ${win_count}; Loses: ${lose_count}; Ties: ${tie_count}`);
window.alert(`Wins: ${win_count}; Loses: ${lose_count}; Ties: ${tie_count}`);
// calls function again
again();






