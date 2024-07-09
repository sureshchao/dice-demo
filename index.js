function spinDice() {
    let num = 0;
    num = Math.floor(Math.random() * 6) + 1
    switch (num) {
        case 1: return "./images/dice1.png";
        case 2: return "./images/dice2.png";
        case 3: return "./images/dice3.png";
        case 4: return "./images/dice4.png";
        case 5: return "./images/dice5.png";
        case 6: return "./images/dice6.png";
    }
    return "";
}

function mySolutionOne(_players) {
    if (_players != null) {
        console.log("spin");
        var p0 = spinDice();
        var p1 = spinDice();
        _players[0].setAttribute("src", p0);
        _players[1].setAttribute("src", p1);

        if (p0 > p1)
            document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
        else if (p0 < p1)
            document.querySelector("h1").textContent = "🚩 Play 2 Wins!";
        else
            document.querySelector("h1").textContent = "🚩 Draw!";
    }
    else
        console.log("players null bro");
}

function spinDiceVersionTwo() {
    let num = 0;
    num = Math.floor(Math.random() * 6) + 1;

    return "./images/dice" + String(num) + ".png";
}

function mySolutionTwo(_players) {
    if (_players != null) {
        console.log("spin");
        var p0 = spinDiceVersionTwo();
        var p1 = spinDiceVersionTwo();
        _players[0].setAttribute("src", p0);
        _players[1].setAttribute("src", p1);

        if (p0 > p1)
            document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
        else if (p0 < p1)
            document.querySelector("h1").textContent = "🚩 Play 2 Wins!";
        else
            document.querySelector("h1").textContent = "🚩 Draw!";
    }
    else
        console.log("players null bro");
}

var players = document.querySelectorAll(".dice img");

mySolutionTwo(players);
