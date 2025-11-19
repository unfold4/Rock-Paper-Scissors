function getComputerChoice(){
  const randomN=Math.floor(Math.random()*100)+1;
  if(randomN<33) return "rock";
  else if(randomN<66) return "paper";
  else if(randomN<99 ) return "scissors";
  else return getComputerChoice();
}




function getHumanChoice(){
  document.querySelector(".humanarea").addEventListener("click",(e)=>{

    switch(e.target.id){
      case "rock" : decide("rock",getComputerChoice());
      break;
      case "paper" : decide("paper",getComputerChoice());
      break;
      case "scissors" : decide("scissors",getComputerChoice());
    }

  });

}
  
function decide(humanChoice,computerChoice){
  let flag ;
  let color;
  let antiColor;

  document.querySelector("#rock").remove();
  document.querySelector("#paper").remove();
  document.querySelector("#scissors").remove();
  document.querySelector(".pcarea span").remove();



  if(humanChoice===computerChoice) {flag=0;  }

  else if(computerChoice==="rock"){
    if(humanChoice==="paper") {flag=1;humanScore++;}
    else if(humanChoice==="scissors") {flag=-1; computerScore++}
  }

  else if (computerChoice==="paper") {
    if(humanChoice==="rock") {alert(flag=-1);computerScore++}
    else if(humanChoice==="scissors") {flag=1;humanScore++}
  }

  else if (computerChoice==="scissors") {
    if(humanChoice==="rock") {flag=1; humanScore++;}
    else if(humanChoice==="paper") {flag=-1;computerScore++;}
  }

  if(flag===1) {color="green";antiColor="red";}
  else if(flag===-1) {color="red";antiColor="green";}
  else if(flag===0){color="yellow";antiColor="yellow";}


document.querySelector(".pc span").style.color = antiColor;
document.querySelector(".human span").style.color = color;

const pcTxt = document.createElement("span");
pcTxt.textContent="The Computer chose "+computerChoice; 
document.querySelector(".pcarea").appendChild(pcTxt);


const humanTxt = document.createElement("span");
humanTxt.textContent="You chose "+humanChoice; 
document.querySelector(".humanarea").appendChild(humanTxt);

}


function playRound(){
  const playGround = document.createElement("div");
  playGround.classList.add("ground");
  document.querySelector("body").appendChild(playGround);
  const Theader = document.createElement("div");
  Theader.classList.add("Theader");
  playGround.appendChild(Theader);
  const pc = document.createElement("div");
  pc.classList.add("pc");
  Theader.appendChild(pc);
  const human = document.createElement("div");
  human.classList.add("human");
  Theader.appendChild(human);
  const pcTxt = document.createElement("span");
  const humanTxt = document.createElement("span");
  pcTxt.textContent="Computer";
  humanTxt.textContent="You";
  pc.appendChild(pcTxt);
  human.appendChild(humanTxt);
  const field = document.createElement("div");
  field.classList.add("field");
  playGround.appendChild(field);
  const pcarea = document.createElement("div");
  pcarea.classList.add("pcarea");
  field.appendChild(pcarea);
  const humanarea = document.createElement("div");
  humanarea.classList.add("humanarea");
  field.appendChild(humanarea);
  humanarea.textContent="";
  const computerareaTxt=document.createElement("span")
  computerareaTxt.textContent="Waiting for a response...";
  pcarea.appendChild(computerareaTxt);

const rockBtn = document.createElement("button");
rockBtn.setAttribute("id","rock");
const paperBtn = document.createElement("button");
paperBtn.setAttribute("id","paper");
const ScissorsBtn = document.createElement("button");
ScissorsBtn.setAttribute("id","scissors");
rockBtn.textContent="Rock";
paperBtn.textContent="Paper";
ScissorsBtn.textContent="Scissors";

document.querySelector(".humanarea").appendChild(rockBtn);
document.querySelector(".humanarea").appendChild(paperBtn);
document.querySelector(".humanarea").appendChild(ScissorsBtn);

getHumanChoice();


  }





// function displayResults(humanScore,computerScore){
//   if(humanScore>computerScore) alert("You Won the game with the scores of:\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore);
//   else if(humanScore<computerScore) alert("You Lost the game with the scores :\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore);
//   else{alert("The Game was Draw With the Scores :\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore)}

// }


function playGame(){
    playRound();
    displayResults(humanScore,computerScore);
}


let humanScore=0;
let computerScore=0;


const mainstuff = document.querySelector(".maincontent .mainstuff");
const beginBtn = document.querySelector(".maincontent .mainstuff .btns .begin");
const cancelBtn = document.querySelector(".maincontent .mainstuff .btns .cancel");

cancelBtn.addEventListener("click",()=>{
mainstuff.remove();
document.querySelector(".header").remove();
const gayTxt = document.createElement("span");
gayTxt.textContent="GAY";
gayTxt.classList.add("gay");
gayTxt.style.fontSize="200px";
document.querySelector(".maincontent").textContent="Go fuck yourself,you";
document.querySelector(".maincontent").style.fontSize="100px";
document.querySelector(".maincontent").style.color="black";
document.querySelector("body").style.backgroundImage="url('images_used/gay.png')";
document.querySelector(".maincontent").appendChild(gayTxt);
})



beginBtn.addEventListener("click",()=>{
document.querySelector(".maincontent").remove();
mainstuff.remove();
document.querySelector(".header").remove();
playGame();

})

beginBtn.click();



