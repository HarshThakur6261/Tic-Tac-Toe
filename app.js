let game_button = document.querySelectorAll(".game-button");
let reset_button = document.querySelector("#footer-button");
let msg_conatiner = document.querySelector(".msg-container");
let new_game_button = document.querySelector("#new_game");
let msg = document.querySelector("#msg")
console.log(game_button);


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
let turnO = true;
let count = 0;
const checkwinner = () =>{
    for(let pattern of winPatterns){
     
      let post1 = game_button[pattern[0]].innerText;
      let post2 = game_button[pattern[1]].innerText;
      let post3 = game_button[pattern[2]].innerText;
      console.log(post1 , post2 , post3)
      if(post1 == post2 && post1 == post3 && post1 == "X" ||post1 == post2 && post1 == post3 && post1 == "O"){
          console.log("winner found")
          ShowWinner(post1);
          return true ;
      }
    }
  }
game_button.forEach((button) =>{

    
    button.addEventListener("click" , () =>{
        console.log("button clicked");
        if(turnO){
            button.innerText ="O"
            turnO = false;
        }else{
            button.innerText = "X"
            turnO = true;
        }
        button.disabled = true;
        count++;
        console.log(count)
      checkwinner()
      if(count == 9 && !checkwinner()){
             gamedraw();
      }
    })
})
const gamedraw = () =>{
    msg.innerText = `Game was a Draw.`;
   msg_conatiner.classList.remove("hide");
    disableAll();
}
const enableAll = () =>{
    game_button.forEach((button) =>{
        button.disabled = false;
    })
}

const resetgame = () =>{
    msg_conatiner.classList.add("hide");
    enableAll();
    game_button.forEach((button) =>{
        button.innerText ="";
    })
    turnO = true;
    count =0;
}


const disableAll = () =>{
    game_button.forEach((button) =>{
        button.disabled = true;
    })
}

const ShowWinner = (post1) =>{
    msg.innerText = `winner ${post1}`;
    msg_conatiner.classList.remove("hide");
    disableAll(); 
}


new_game_button.addEventListener("click" , resetgame);
reset_button.addEventListener("click" , resetgame);