# rock-paper-scissors
 
    --user can choose between 3 options paper, rock or scissors
    -- computer choose ramdomly one of the 3 option
    -- score increment when win
    -- user can reset the score to 0 and restart
    -- message display to inform user of its status in the game 

    -- used object look up to determine between rock - paper and scissors

    <!-- take the first character of each word  - please see the logic below-->
/**
 * r = rock
 * p=paper
 * s= scissors
 */

<!-- rules to determine who win -->
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


<!-- main function -->
function playGame(e){};

<!-- computer play -generate random choices -->
function getComputerOption(){};

 
<!--  winner function determines who wins use switch statement as we can haveno more than of 3 outcome
win - lose or draw -->
function getWinner(user, computer ){switch (user + computer) {... }}



<!-- result trigger one of this function -->
function win(user, computer){}
function lose(user, computer){}
function draw(user, computer){}

// restart the game
function restartGame(e){}


<!-- utilities function help to clear style and format -->

// tansform char to the  corresponding word
function convertBacKToWord(letter){}

// reset message h2  text css class
function removeClassText(){}

// event listener
options.forEach( choice => choice.addEventListener('click', playGame)); 
// window.addEventListener('click', clearModal); 
restart.addEventListener('click', restartGame); 

// 1) UI at the beginning of the game
![Screen Shot 2019-06-24 at 11 06 46 PM](https://user-images.githubusercontent.com/18241226/60055724-7add4500-96d6-11e9-9a23-b28c76af834e.png)


// 2) UI when user win
![Screen Shot 2019-06-24 at 11 19 08 PM](https://user-images.githubusercontent.com/18241226/60055725-7c0e7200-96d6-11e9-81fa-c3d4bd1a0ee4.png)

// 3) UI  when user loose
![Screen Shot 2019-06-24 at 11 19 18 PM](https://user-images.githubusercontent.com/18241226/60055726-7ca70880-96d6-11e9-976c-b190e69373f2.png)

// 4) UI  when draw
![Screen Shot 2019-06-24 at 11 19 30 PM](https://user-images.githubusercontent.com/18241226/60055727-7ca70880-96d6-11e9-9c70-ad4c661d653e.png)