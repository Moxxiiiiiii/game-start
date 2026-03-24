// Save selements to variables
let saveButton = document.getElementById(".save-button");
let loadButton = document.getElementById(".load-button");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const choice5 = document.getElementById("choice5");
const choice6 = document.getElementById("choice6");
const choice7 = document.getElementById("choice7");
const choice8 = document.getElementById("choice8");
let contextText = document.getElementById("context-box-text");

let charName = undefined;
// Define Functions

// Depending on Choice, return playerRace as saved choice.
// Races have to be defined in global to parse.
let Felynx = 1;
let Human = 2;
let Slyme = 3;
let Vulpine = 4;
let Equine = 5;
function newPlayerRace(playerRaceChoice) {
    if (playerRaceChoice == 1) {
        playerRace = "Felynx"; 
    } else if (playerRaceChoice == 2) {
        playerRace = "Human";
    } else if (playerRaceChoice == 3) {
        playerRace = "Slyme";
    } else if (playerRaceChoice == 4) {
        playerRace = "Vulpine";
    } else if (playerRaceChoice == 5) {
        playerRace = "Equine";
    }
    console.log(playerRace);
    return playerRace;
} 

// Start new game, ask for player name and save it.
function newGame() {
    //If Else statement to take name and allow single retry.
    charName = prompt("Before we begin your new life here in Tarin, can you tell me your name..?");
    if (charName == false) {
        charName = prompt("Try again!");
        contextText.innerHTML = (`So, your name is ${charName}? That's wonderful! <br><br>The sun rises, it's rays of light beaming through the clear glass window hanging just above your bed. It's round, with no visible bars or decorations between - set within a white metallic wall.
Your room is decorated fairly plainly, having only been adopted here a month ago by your new caretaker. Your head is too foggy to think much of it right now, so you pick yourself up from your bed and head towards
the bathroom. <br>Doors open and shut automatically as you approach. Despite being made of well varnished wood, you can barely hear them open and shut on their magnetic tracks - leaving only your footsteps populating
the wooden hallway and echoey bathroom as head on your way. <br><br>You disrobe sluggishly, getting a good look of yourself in the mirror:`);
    } else {
        contextText.innerHTML = (`So, your name is ${charName}? That's wonderful! <br><br>The sun rises, it's rays of light beaming through the clear glass window hanging just above your bed. It's round, with no visible bars or decorations between - set within a white metallic wall.
Your room is decorated fairly plainly, having only been adopted here a month ago by your new caretaker. Your head is too foggy to think much of it right now, so you pick yourself up from your bed and head towards
the bathroom. <br>Doors open and shut automatically as you approach. Despite being made of well varnished wood, you can barely hear them open and shut on their magnetic tracks - leaving only your footsteps populating
the wooden hallway and echoey bathroom as head on your way. <br><br>You disrobe sluggishly, getting a good look of yourself in the mirror:`);
    }

    //Remove New Game and Load Game
    choice1.removeEventListener("click", newGame);

    //Change HTML of choices 
    choice1.innerHTML = ("Felynx");
    choice2.innerHTML = ("Human");
    choice3.innerHTML = ("Slyme");
    choice4.innerHTML = ("Vulpine");
    choice5.innerHTML = ("Equine");

    //Add event listeners to choose Race
    choice1.addEventListener("click", newPlayerRace);
    choice2.addEventListener("click", newPlayerRace);
    choice3.addEventListener("click", newPlayerRace);
    choice4.addEventListener("click", newPlayerRace);
    choice5.addEventListener("click", newPlayerRace);

    //Return charName, next Func
    console.log(charName);
    return charName;
}




// Add response to clicking new game.
choice1.addEventListener("click", newGame);
