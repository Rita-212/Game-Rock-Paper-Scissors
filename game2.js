let userScore = 0;
let compScore = 0;

const objects= document.querySelectorAll(".object");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice =() => {
   const options = ["rock", "paper","scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};

const drawGame = ()=>{
   msg.innerText ="Game was a Draw. Play again...";
   msg.style.backgroundColor="grey";
   msg.style.color="black";
};

const showWinner = (userWin,userChoice, compChoice) => {
   if(userWin){
      userScore++;
      userScorePara.innerText=userScore;
      msg.innerText =`You Won! Your ${userChoice} beat ${compChoice} !`;
      msg.style.backgroundColor="green";
      msg.style.color="white";
   }else{
      compScore++;
      compScorePara.innerText= compScore;
      msg.innerText=`You Lost! ${compChoice} beat your ${userChoice} !`;
      msg.style.backgroundColor="#CD1818";
      msg.style.color="white";
   }
};

const playGame=(userChoice) => {
   //generate computer choice
   const compChoice=genCompChoice();

   if(userChoice===compChoice){
      //Draw game
      drawGame();
   }else{
      let userWin = true;
      if(userChoice ==="rock"){
         //scissors,paper
         userWin = compChoice==="paper"?false :true ;
      }else if(userChoice===paper){
         //rock,sissors
         userWin = compChoice==="scissors"?false: true;
      }else{
         //rock,paper
         userWin= compChoice==="rock" ? false:true;
      }
      showWinner(userWin, userChoice, compChoice);
   }
};

objects.forEach((object) => {
   object.addEventListener("click", ()=>{
      console.log("object was clicked");
      const userChoice = object.getAttribute("id");
      playGame(userChoice);
   })
});