let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = 0;
    random=Math.random()*10;
    if(random < 10/3){
        return "ROCK";
    }
    else if(random > 10/3 && random < 20/3){
        return "PAPER";
    }
    else return "SCISSORS";

}

function getHumanChoice(){
    let selection = prompt("Do you choose rock, paper or scissors?")
    return selection.toUpperCase();
}

const content = document.querySelector("div");

    function playRound(){
        computerSelection = getComputerChoice();
        const div = document.createElement("p");
        
        if (computerSelection == "ROCK" && humanSelection == "PAPER" ||
            computerSelection == "PAPER" && humanSelection == "SCISSORS" ||
            computerSelection == "SCISSORS" && humanSelection == "ROCK"){
                div.textContent = "You win this round! " + humanSelection + " beats "+ computerSelection;
                humanScore++;
        }
        else 
        if (computerSelection == "ROCK" && humanSelection == "SCISSORS" ||
            computerSelection == "PAPER" && humanSelection == "ROCK" ||
            computerSelection == "SCISSORS" && humanSelection == "PAPER"){
                div.textContent = "You lose this round! " + computerSelection + " beats "+ humanSelection;
                computerScore ++;
        }
        else {div.textContent = "Its a tie! You both picked " + humanSelection;}
    content.appendChild(div);
    }
        
// function disableAllButtons() {
//     buttons.forEach((button) => {
//         button.disabled = true;
//     });
// }

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        humanSelection = button.textContent;
            playRound();
            if(humanScore == 5 || computerScore == 5){
                const div = document.createElement("p");
                if(humanScore > computerScore){
                    div.textContent = "You won " + humanScore + " - " + computerScore;
                }
                else if(humanScore < computerScore){
                    div.textContent = "You lost " + computerScore + " - " + humanScore;
                }
                content.appendChild(div);
                humanScore = 0;
                computerScore = 0;
                // disableAllButtons();
                }
                        
    });
});

    



