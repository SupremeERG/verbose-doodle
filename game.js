// steps

/*
1. Make options available
2. Make computer choose an option
3. Check round winner
4. change round number
5. end game and choose final winner
*/


var options = ['p','r','s'];
var myHand = options[Math.floor(Math.random()*options.length)]
var roundnum = document.getElementById('round')
num = 1

function checkRoundWinner(userHand, myHand) {
    // check if its a tie
    if(myHand == userHand) return null;
    // check scissors myhand
    else if(myHand == 'p' && userHand == 'r') return false;
    else if(myHand == 'p' && userHand == 's') return true;
    // check rock myhand
    else if(myHand == 'r' && userHand == 'p') return true;
    else if(myHand == 'r' && userHand == 's') return false;
    // check scissors myhand
    else if(myHand == 's' && userHand == 'p') return false;
    else if(myHand == 's' && userHand == 'r') return false;

}

document.onkeyup = function(event) {
    var key = event.key;
    if(options.indexOf(key) == -1) alert('This was not a valid option')
    else {
        if (roundnum.innerHTML == "Round 3") roundnum.innerHTML = "Game Over"
        if (checkRoundWinner(key, myHand) == false) alert('You lost!')
        else alert("You won!")
        num += 1
        roundnum.innerHTML = "Round " + num;
    }
}