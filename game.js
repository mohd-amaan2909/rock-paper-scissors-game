let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); 

const genCompChoice = () =>{
    const option = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random()*option.length);
    return option[randomIndex];
}
const isDraw = () =>{
        msg.innerText = ("It was a Draw");
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
}
const showWinner = (isWin, userChoice , compChoice) =>{
    if(isWin===true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = (`You win! your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor = "green";
        msg.style.color = "white"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = (`You lose; ${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}
const playGame =(userChoice) =>{
    //generate comp choice
    const compChoice = genCompChoice();
    
    if(userChoice===compChoice){
        //draw
        isDraw();
    } else{ 
        let isWin = true;
        if(userChoice==="rock"){
        //paper, scissors
        isWin = compChoice == "scissors"?true:false;
    }else if(userChoice==="paper"){
        //rock,scissors
        isWin = compChoice =="rock"?false:true;
    }else{
        //rock,paper
        isWin = compChoice =="rock"?false:true;
    }
    showWinner(isWin , userChoice , compChoice);
}
}
choices.forEach(choice => {
    choice.addEventListener("click" ,() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
});