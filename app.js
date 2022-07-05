const options=["Heads","Tails"]
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const resset = document.querySelector(".reset")
let ps = 0;
let cs = 0;
const playerSelection = document.getElementById("player-selection")
const computerSelection = document.getElementById("computer-selection")
const winner = document.getElementById("winner")
const image = document.getElementById("image")
const btns = document.querySelectorAll(".btn")
function coin(a){
    let randomm = Math.floor((Math.random() * 2))
    const mainn = options[randomm]
    if(a==3){
        displayRandom(randomm)
    }
    return mainn
}

btns.forEach(ebtn => {
    ebtn.addEventListener("click",()=>{

        const userChoice = ebtn.textContent
        playerSelection.textContent=userChoice

        const computerChoice = coin(1)
        computerSelection.textContent=computerChoice

        const result = coin(3)
        compare(userChoice,computerChoice,result)

    })
});

function compare(user,comp,res){
    if(user==res && comp==res){
        console.log(user,comp,res,"draw")
    }
    else if(user==res){
        ps++
        playerScore.textContent=ps
        console.log(user,comp,res,"user wins")
        score("Player",ps)


    }else if(comp==res){
        cs++
        computerScore.textContent=cs
        console.log(user,comp,res,"computer wins")
        score("Computer",cs)

    }else{
        console.log(user,comp,res,"no winner")
    }
}


function score(a,number){
    if(number==5){
        winner.textContent=`${a} wins!`
        resset.style.visibility = "visible"
        btns[0].disabled = true;
        btns[1].disabled = true;
    }
}


resset.addEventListener("click",()=>{
        winner.textContent=""
        resset.style.visibility = "hidden"

        btns[0].disabled = false;
        btns[1].disabled = false;

        ps=0
        cs=0

        computerSelection.textContent=""
        playerSelection.textContent=""

        playerScore.textContent=0
        computerScore.textContent=0
})

function displayRandom(random){
    const displayResult = document.querySelector('#image');
    
        if (random === 0){
            displayResult.style.backgroundImage =  "url('./heads.png')";
            
        } else {
            displayResult.style.backgroundImage =  "url('./tails.png')";
        }    
}