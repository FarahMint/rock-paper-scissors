/* grab everything we need from the dom
- all icon have class of option -> put in node list like array
*/
const options= document.querySelectorAll('.option');
const optionsLength= document.querySelectorAll('.option').length;

// grab score span 
let userScore = document.querySelector('.user__score') ;
let computerScore = document.querySelector('.computer__score') ;

const score = document.querySelector('#score') 
  result = document.querySelector('#result')
  restart = document.querySelector('#restart')
 message = document.querySelector('.container h2');

/**scoreboard object  */

const scoreboard={
    user:0,
    computer:0
}

// playgame function attached to event listener

function playGame(e){
    // target the playeroption choosen by the user -- e.target.id -- and take the first char
    const userOption=e.target.id.slice(0,1);
    // clear class text
    removeClassText()
    //  as soon as user click show restart button
    restart.style.display='inline'
    // generate an option for computer hand
    const computerOption= getComputerOption();
 const winner = getWinner(userOption, computerOption )

};

/**
 * r = rock
 * p=paper
 * s= scissors
 */

// computer play
function getComputerOption(){
    const choices= ['r', 'p', 's'];
    // genarate random num no more than 3  
    const randomOption =  Math.floor(Math.random() * optionsLength)
    // return one of the 3 char mentionned above  r, p or s
    return choices[randomOption]
};

// winner function
function getWinner(user, computer ){


/**
 * USER win
 * rs= rock (user choice) scissors (computer choice)
 * pr= paper rock
 * sp = scissors paper
 * 
 * UserLose
 * 'rp': rock paper
* 'ps': paper scissors
 *'sr': scissors rock
 * 
 * Draw
 *   'rr': rorock rock
  * 'pp': paper paper 
  * 'ss': scissors scissors
 */


// join user and computer choice
switch (user + computer) {
    case 'rs':
    case 'pr':
    case 'sp':
        win(user, computer);
  
        break;
        case 'rp':
        case 'ps':
        case 'sr':
        lose(user, computer)
     
    break;
    case 'rr':
    case 'pp':
    case 'ss':
        draw(user, computer);

    default:
        break;
}
}

// tans form char to the  corresponding word
function convertBacKToWord(letter){
 let gameItems= {
     'r':'rock',
     'p':'paper',
     's':'scissors'
 }  
//  sreate array from string
// map for each char find the corresponding word
 return letter.split('').map(items => gameItems[items]);
 
}

function win(user, computer){
    // grab div selected by user
    const userChoiceDiv =document.querySelector(`#${convertBacKToWord(user)}`);
    // update score
    scoreboard.user++;
    userScore.innerHTML=scoreboard.user; 

//  dispay  win message 
 message.innerHTML= `${convertBacKToWord(user)} beats ${convertBacKToWord(computer)}. You win!`;

//use css class predifine in the stylesheet to highligh user choice
message.classList.add('text-win');
    userChoiceDiv.classList.add('green-glow');
setTimeout(()=>{
    // remove highlight after 2 sec
    userChoiceDiv.classList.remove('green-glow');
 
}, 2000)

 
 
}
function lose(user, computer){
      // grab div selected by user
    const userChoiceDiv =document.querySelector(`#${convertBacKToWord(user)}`);
      // update score
    scoreboard.computer++;
    computerScore.innerHTML= scoreboard.computer;
    //  dispay  lose message 
    message.innerHTML= `${convertBacKToWord(user)} beats ${convertBacKToWord(computer)}. You lose!`;

   //use css class predifine in the stylesheet to highligh user choice and msg
   message.classList.add('text-lose');
    userChoiceDiv.classList.add('red-glow');
    setTimeout(()=>{
        // remove highlight after 2 sec
        userChoiceDiv.classList.remove('red-glow');
      
    }, 2000)


}
function draw(user, computer){
    const userChoiceDiv =document.querySelector(`#${convertBacKToWord(user)}`);
      //  dispay draw message 
    message.innerHTML= `${convertBacKToWord(user)} is equal ${convertBacKToWord(computer)}. it's a draw!`;
   
  //use css class predifine in the stylesheet to highligh user choice
 
  userChoiceDiv.classList.add('grey-glow');
  setTimeout(()=>{
      // remove highlight after 2 sec
    userChoiceDiv.classList.remove('grey-glow');
  

}, 2000)
}

// restart the game
function restartGame(e){
    // reset the score board
    scoreboard.user= '0';
    scoreboard.computer = '0';

    // change the ui
    computerScore.innerHTML= '0';
    userScore.innerHTML= '0';
    // remove class text color for messages
    removeClassText()

    message.innerHTML=`Let's start`;
// hide the restart btn fromui
    restart.style.display='none';
}

// reset message h2  text css class
function removeClassText(){
    if(message.classList.contains("text-lose") ){
        message.classList.remove("text-lose");
    }else  if(message.classList.contains("text-win") ){
        message.classList.remove("text-win");
    }
}

// event listener
options.forEach( choice => choice.addEventListener('click', playGame)); 
restart.addEventListener('click', restartGame); 
