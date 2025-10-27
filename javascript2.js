function getComputerChoice(){
  const randomN=Math.floor(Math.random()*100)+1;
  if(randomN<33) return "Rock";
  else if(randomN<66) return "Paper";
  else if(randomN<99 ) return "Scissors";
  else return getComputerChoice();
}


function formatChoice(humanChoice){
  return humanChoice[0].toUpperCase()+(humanChoice.slice(1)).toLowerCase();
}


function getHumanChoice(){
  let humanChoice;
  do{
  humanChoice=prompt("chose from 'Rock' ,'Paper' and 'Scissors'");
  humanChoice=formatChoice(humanChoice);
  }while(!(humanChoice==="Rock" || humanChoice==="Paper" || humanChoice==="Scissors"));

  return humanChoice;
}
  
function playRound(humanChoice,computerChoice){
  if(humanChoice===computerChoice) {alert("Draw!");  }

  else if(computerChoice==="Rock"){
    if(humanChoice==="Paper") {alert("You Won! ,Paper beats Rock!");humanScore++;}
    else if(humanChoice==="Scissors") {alert("You Lost! Rock beats Scissors!"); computerScore++}
  }

  else if (computerChoice==="Paper") {
    if(humanChoice==="Rock") {alert("You Lost! ,Paper beats Rock!");computerScore++}
    else if(humanChoice==="Scissors") {alert("You Won! ,Scissors beats paper!");humanScore++}

  }

  else if (computerChoice==="Scissors") {
    if(humanChoice==="Rock") {alert("You Won! ,Rock beats Scissors!"); humanScore++;}
    else if(humanChoice==="Paper") {alert("You Lost! ,Scissors beats paper!");computerScore++;}

  }
}


function displayResults(humanScore,computerScore){
  if(humanScore>computerScore) alert("You Won the game with the scores of:\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore);
  else if(humanScore<computerScore) alert("You Lost the game with the scores :\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore);
  else{alert("The Game was Draw With the Scores :\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore)}

}

function playGame(){
  for(let k=0;k<5;k++){
    playRound(getHumanChoice(),getComputerChoice());
  }

  displayResults(humanScore,computerScore);
}


let humanScore=0;
let computerScore=0;

playGame();

