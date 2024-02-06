let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("msg");

const getCompChoice=()=>{
    const options=["rock", "paper", "scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const drawGame=()=>{
    console.log("game was a draw")
    msg.innerText="DRAW!"
}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText="YOU WIN!"
    }else{
        console.log("You lose");
        msg.innerText="YOU LOSE!"
    }
}

const playGame=(userChoice)=>{
    console.log(userChoice);
    const compChoice=getCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper, scissor
            userWin=compChoice==="paper"?false:true;    
        }else if(userChoice==="paper"){
            //rock, scissor
            userWin=compChoice==="rock"?true:false;
        }else{
            //user->scissor
            //rock, paper
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})