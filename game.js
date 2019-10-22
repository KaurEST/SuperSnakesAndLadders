var player1, player2, dice, playerPosition1, playerPosition2, activePlayer, player1coins, player2coins;

activePlayer = 1;

playerPosition1 = 0;
playerPosition2 = 0;

player1coins = 0;
player2coins = 0;

var goingUp = new Audio('goinup.wav');
var goingDown = new Audio('goindown.wav');
var winSound = new Audio('win.wav');
var moveSound = new Audio('move.wav');
var coinSound = new Audio('coin.mp3');

document.querySelector(".pl1").addEventListener("click", function() {
    player1 = prompt("Name?");
    document.querySelector(".pl1").innerHTML = player1;
});

document.querySelector(".pl2").addEventListener("click", function() {
    player2 = prompt("Name?");
    document.querySelector(".pl2").innerHTML = player2;
});

document.querySelector("#nextPlayerBtn").disabled = true;

document.querySelector(".pl1").classList.add("activePlayer");


document.querySelector("#rollDice").addEventListener("click", function() {
    dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector(".dice");
    diceDOM.src = "dice-" + dice + ".png";
    
    
    var activePos;
    var activeCoins;
    
    if (activePlayer === 1) {
        activePos = playerPosition1;
        activeCoins = player1coins;
    } else {
        activePos = playerPosition2;
        activeCoins = player2coins;
    }
      
    //Liigume
    if (activePos !== 0) {document.querySelector("#cell" + activePos).classList.remove("player" + activePlayer);
    }
    
    activePos += dice;
    
    switch (activePos) {
        case 1: activeCoins += 3;
            coinSound.play();
            break;
        case 3: activePos = 40;
            goingUp.play();
            break;
        case 5: activePos = 27;
            goingUp.play();
            break;
        case 7: activeCoins += 1;
            coinSound.play();
            break;
        case 10: activeCoins += 1;
            coinSound.play();
            break;
        case 14: activeCoins += 1;
            coinSound.play();
            break;
        case 18: activePos = 43;
            goingUp.play();
            break;
        case 25: activePos = 4;
            goingDown.play();
            break;
        case 26: activeCoins += 1;
            coinSound.play();
            break;
        case 31: activePos = 54;
            goingUp.play();
            break;
        case 41: activePos = 82;
            goingUp.play();
            break;
        case 45: activePos = 66;
            goingUp.play();
            break;
        case 46: activePos = 13;
            goingDown.play();
            break;
        case 47: activeCoins += 3;
            coinSound.play();
            break;
        case 49: activePos = 33;
            goingDown.play();
            break;
        case 53: activePos = 89;
            goingUp.play();
            break;
        case 55: activeCoins += 1;
            coinSound.play();
            break;
        case 58: activePos = 76;
            goingUp.play();
            break;
        case 63: activePos = 42;
            goingDown.play();
            break;
        case 65: activeCoins += 1;
            coinSound.play();
            break;
        case 68: activeCoins += 2;
            coinSound.play();
            break;
        case 69: activePos = 50;
            goingDown.play();
            break;
        case 70: activeCoins += 2;
            coinSound.play();
            break;
        case 75: activeCoins += 3;
            coinSound.play();
            break;
        case 81: activePos = 62;
            goingDown.play();
            break;
        case 87: activeCoins += 1;
            coinSound.play();
            break;
        case 92: activePos = 74;
            goingDown.play();
            break;
        case 98: activeCoins += 1;
            coinSound.play();
            break;
        case 99: activePos = 44;
            goingDown.play();
            break;
        default: moveSound.play();
    }
    
    
    if (activePos > 99) { //Võit
        winSound.play();
        alert("Player" + activePlayer + " wins the game!");
        this.disabled = true;
        document.querySelector("#nextPlayerBtn").disabled = true;
    } else { // Kui võitu pole siis edasi
        document.querySelector("#cell" + activePos).classList.add("player" + activePlayer);
    
    if (activePlayer === 1) {
        playerPosition1 = activePos;
        player1coins = activeCoins;
    } else {
        playerPosition2 = activePos;
        player2coins = activeCoins;
    }
    this.disabled = true;
    document.querySelector("#nextPlayerBtn").disabled = false;
    }
    
    document.querySelector(".pl1CoinsAmount").innerHTML = player1coins;
    document.querySelector(".pl2CoinsAmount").innerHTML = player2coins;
     
});

// Next player button

document.querySelector("#nextPlayerBtn").addEventListener("click", function() {
    if (activePlayer === 1) {
        activePlayer = 2;
    } else {
        activePlayer = 1;
    }
    
    if (activePlayer === 1) {
    document.querySelector(".pl1").classList.add("activePlayer");
    document.querySelector(".pl2").classList.remove("activePlayer");
    } else {
    document.querySelector(".pl2").classList.add("activePlayer");
    document.querySelector(".pl1").classList.remove("activePlayer");
    }
    document.querySelector("#rollDice").disabled = false;
    this.disabled = true;
});


document.querySelector(".puRoll").addEventListener("click", function() {
    var usableCoins;
    
    if (activePlayer === 1) {
        usableCoins = player1coins;
    } else {
        usableCoins = player2coins;
    }
    
    if (usableCoins >= 5) {        
        if (activePlayer === 1) {
            player1coins = usableCoins - 5;
            } else {
            player2coins = usableCoins - 5;
            }
        document.querySelector("#rollDice").disabled = false;
        document.querySelector("#nextPlayerBtn").disabled = true;
    } else {
        alert("Not enough coins!");
    }
   
});

document.querySelector(".puOneStep").addEventListener("click", function() {
    var usableCoins;
    
    if (activePlayer === 1) {
        usableCoins = player1coins;
        activePos = playerPosition1
    } else {
        usableCoins = player2coins;
        activePos = playerPosition2;
    }
    
    if (usableCoins >= 2) {
        if (activePlayer === 1) {
            player1coins = usableCoins - 2;
            } else {
            player2coins = usableCoins - 2;
            }
        document.querySelector("#cell" + activePos).classList.remove("player" + activePlayer);
        activePos += 1;
        
        switch (activePos) {
        case 1: activeCoins += 3;
            coinSound.play();
            break;
        case 3: activePos = 40;
            goingUp.play();
            break;
        case 5: activePos = 27;
            goingUp.play();
            break;
        case 7: activeCoins += 1;
            coinSound.play();
            break;
        case 10: activeCoins += 1;
            coinSound.play();
            break;
        case 14: activeCoins += 1;
            coinSound.play();
            break;
        case 18: activePos = 43;
            goingUp.play();
            break;
        case 25: activePos = 4;
            goingDown.play();
            break;
        case 26: activeCoins += 1;
            coinSound.play();
            break;
        case 31: activePos = 54;
            goingUp.play();
            break;
        case 41: activePos = 82;
            goingUp.play();
            break;
        case 45: activePos = 66;
            goingUp.play();
            break;
        case 46: activePos = 13;
            goingDown.play();
            break;
        case 47: activeCoins += 3;
            coinSound.play();
            break;
        case 49: activePos = 33;
            goingDown.play();
            break;
        case 53: activePos = 89;
            goingUp.play();
            break;
        case 55: activeCoins += 1;
            coinSound.play();
            break;
        case 58: activePos = 76;
            goingUp.play();
            break;
        case 63: activePos = 42;
            goingDown.play();
            break;
        case 65: activeCoins += 1;
            coinSound.play();
            break;
        case 68: activeCoins += 2;
            coinSound.play();
            break;
        case 69: activePos = 50;
            goingDown.play();
            break;
        case 70: activeCoins += 2;
            coinSound.play();
            break;
        case 75: activeCoins += 3;
            coinSound.play();
            break;
        case 81: activePos = 62;
            goingDown.play();
            break;
        case 87: activeCoins += 1;
            coinSound.play();
            break;
        case 92: activePos = 74;
            goingDown.play();
            break;
        case 98: activeCoins += 1;
            coinSound.play();
            break;
        case 99: activePos = 44;
            goingDown.play();
            break;
        default: moveSound.play();
    }
        
        document.querySelector("#cell" + activePos).classList.add("player" + activePlayer);
        
            if (activePlayer === 1) {
                playerPosition1 = activePos;
            } else {
                playerPosition2 = activePos;
            }
    } else {
        alert("Not enough coins!");
    }
    

});

document.querySelector(".puThreeSteps").addEventListener("click", function() {
    var usableCoins;
    
    if (activePlayer === 1) {
        usableCoins = player1coins;
        activePos = playerPosition1
    } else {
        usableCoins = player2coins;
        activePos = playerPosition2;
    }
    
    if (usableCoins >= 2) {
        if (activePlayer === 1) {
            player1coins = usableCoins - 3;
            } else {
            player2coins = usableCoins - 3;
            }
        document.querySelector("#cell" + activePos).classList.remove("player" + activePlayer);
        activePos += 2;
        
        switch (activePos) {
        case 1: activeCoins += 3;
            coinSound.play();
            break;
        case 3: activePos = 40;
            goingUp.play();
            break;
        case 5: activePos = 27;
            goingUp.play();
            break;
        case 7: activeCoins += 1;
            coinSound.play();
            break;
        case 10: activeCoins += 1;
            coinSound.play();
            break;
        case 14: activeCoins += 1;
            coinSound.play();
            break;
        case 18: activePos = 43;
            goingUp.play();
            break;
        case 25: activePos = 4;
            goingDown.play();
            break;
        case 26: activeCoins += 1;
            coinSound.play();
            break;
        case 31: activePos = 54;
            goingUp.play();
            break;
        case 41: activePos = 82;
            goingUp.play();
            break;
        case 45: activePos = 66;
            goingUp.play();
            break;
        case 46: activePos = 13;
            goingDown.play();
            break;
        case 47: activeCoins += 3;
            coinSound.play();
            break;
        case 49: activePos = 33;
            goingDown.play();
            break;
        case 53: activePos = 89;
            goingUp.play();
            break;
        case 55: activeCoins += 1;
            coinSound.play();
            break;
        case 58: activePos = 76;
            goingUp.play();
            break;
        case 63: activePos = 42;
            goingDown.play();
            break;
        case 65: activeCoins += 1;
            coinSound.play();
            break;
        case 68: activeCoins += 2;
            coinSound.play();
            break;
        case 69: activePos = 50;
            goingDown.play();
            break;
        case 70: activeCoins += 2;
            coinSound.play();
            break;
        case 75: activeCoins += 3;
            coinSound.play();
            break;
        case 81: activePos = 62;
            goingDown.play();
            break;
        case 87: activeCoins += 1;
            coinSound.play();
            break;
        case 92: activePos = 74;
            goingDown.play();
            break;
        case 98: activeCoins += 1;
            coinSound.play();
            break;
        case 99: activePos = 44;
            goingDown.play();
            break;
        default: moveSound.play();
    }
        
        document.querySelector("#cell" + activePos).classList.add("player" + activePlayer);
        
            if (activePlayer === 1) {
                playerPosition1 = activePos;
            } else {
                playerPosition2 = activePos;
            }
    } else {
        alert("Not enough coins!");
    }
    

});


/*
    2. Better gaming pieces on board.
    4. Buy stuff with coins
*/


