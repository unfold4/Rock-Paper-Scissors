function getComputerChoice(){
  const randomN=Math.floor(Math.random()*3);
  if(randomN==0) return "rock";
  else if(randomN==1) return "paper";
  else return "scissors";
}


function getHumanChoice(){
  document.querySelector(".humanarea").addEventListener("click",(e)=>{
  //prblm , when u add an event listener , make sure you remove it too before calling the function again
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


  if(humanChoice===computerChoice) {flag=0;}

  else if(computerChoice==="rock"){
    if(humanChoice==="paper") {flag=1;humanScore++;}
    else if(humanChoice==="scissors") {flag=-1; computerScore++}
  }

  else if (computerChoice==="paper") {
    if(humanChoice==="rock") {flag=-1;computerScore++}
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

const img1 = document.createElement("img");
img1.src = `images_used/${computerChoice}.png`;
document.querySelector(".pcarea").appendChild(img1);

const img2 = document.createElement("img");
img2.src = `images_used/${humanChoice}.png`;
document.querySelector(".humanarea").appendChild(img2);

const nxtRndBox = document.createElement("div");
nxtRndBox.classList.add("nxtBox");
document.querySelector(".ground").appendChild(nxtRndBox);


const nxtRound = document.createElement("button");
nxtRound.classList.add("nxtrnd");
nxtRound.textContent="play next round";
document.querySelector(".nxtBox").appendChild(nxtRound);



nxtRound.addEventListener("click",()=>{
    document.querySelector(".humanarea").removeEventListener("click",(e)=>{
    switch(e.target.id){
      case "rock" : decide("rock",getComputerChoice());
      break;
      case "paper" : decide("paper",getComputerChoice());
      break;
      case "scissors" : decide("scissors",getComputerChoice());
    }
  });
    document.querySelector(".humanarea").remove();
    document.querySelector(".ground").remove();

    roundNo++;
    // 0 ---> should be 4
    if(roundNo<=9)playRound();
    else {
      displayResults();
      
//recreating the initial HTML 
const header = document.createElement("div");
header.classList.add("header");
const headerSpan = document.createElement("span");
header.appendChild(headerSpan);
const spanEm = document.createElement("em");
spanEm.textContent="Rock,Paper and Scissors";
headerSpan.appendChild(spanEm);
header.appendChild(headerSpan);
document.querySelector("body").insertBefore(header,document.querySelector("script"));


const maincontent = document.createElement("div");
maincontent.classList.add("maincontent");
const mainstuff = document.createElement("div");
mainstuff.classList.add("mainstuff");
const mainstuffspan = document.createElement("span");
mainstuffspan.textContent='Click "Begin" to start the game!';
const mainstuffbuttons = document.createElement("div");
mainstuffbuttons.classList.add('btns');
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
btn1.classList.add("begin");
btn2.classList.add("cancel");
btn1.textContent="Begin";
btn2.textContent="Cancel";
mainstuffbuttons.appendChild(btn1);
mainstuffbuttons.appendChild(btn2);
maincontent.appendChild(mainstuff);
mainstuff.appendChild(mainstuffspan);

mainstuff.appendChild(mainstuffbuttons);
document.querySelector("body").insertBefore(maincontent,document.querySelector("script"));

loadFirstPage();
    }
});
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





function displayResults(){
  if(humanScore>computerScore) alert("You Won the game with the scores of:\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore);
  else if(humanScore<computerScore) alert("You Lost the game with the scores :\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore);
  else{alert("The Game was Draw With the Scores :\nYour Score: "+humanScore+"\n"+"Computer Score: "+computerScore)}

}


function playGame(){

      playRound();

nxtRound.addEventListener("click",()=>{
  document.querySelector(".ground").remove();
});


    displayResults();
}

function loadFirstPage(){
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
})}


let humanScore=0;
let computerScore=0;
let roundNo=0;

loadFirstPage();
