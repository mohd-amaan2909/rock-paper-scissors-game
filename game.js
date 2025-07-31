let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const option = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random()*option.length);
    return option[randomIndex];
}
const isDraw = () =>{
    console.log("it was a draw");
}
const showWinner = () =>{
    
}
const playGame =(userChoice) =>{
    console.log("User-Choice= ", userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Computer-choice= ", compChoice);
    let isWin = true;
    if(userChoice===compChoice){
        //draw
        isDraw();
    } else if(userChoice==="rock"){
        //paper, scissors
        isWin = compChoice == "scissors"?true:false;
    }else if(userChoice==="paper"){
        //rock,scissors
        isWin = compChoice =="rock"?false:true;
    }else{
        //rock,paper
        isWin = compChoice =="rock"?false:true;
    }
    showWinner();
}
choices.forEach(choice => {
    choice.addEventListener("click" ,() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
});