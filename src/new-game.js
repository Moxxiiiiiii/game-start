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
let choices = document.getElementsByClassName("choice")

// Races have to be defined in global to parse.
let Felynx = 1;
let Human = 2;
let Slyme = 3;
let Vulpine = 4;
let Equine = 5;

let charName = undefined;
let playerRace = undefined;
let playerHeight = undefined;

// Predefine Abort Controller for Anonymous event listeners
const controller = new AbortController();
const { signal } = controller;

// Define Functions
// Depending on Choice, return player
function getPlayerHeight(playerHeightChoice) {
    playerHeight = playerHeightChoice;
    console.log(playerHeight);
    return playerHeight;
}

// Depending on Choice, return playerRace as saved choice.
function newPlayerRace(playerRaceChoice) {
    if (playerRaceChoice == 1) {
        playerRace = "Felynx";
        contextText.innerHTML = (`A cat like race of humanoids, sporting fuzzy ears and human-like skin. Felynx's are typically short and flexible often found with tails as well as barbed pricks (if they have any).<br>
    They have hair on top of their fur atop their head much like a humans along with humanoid hands - however their lower paws are more feline-esque allowing for increased agility and their eyes are cat like
    as you'd expect.<br><br> But the question remains... How tall are you?`);
        choices.innerHTML = (` `);
        choice1.innerHTML = (`4'0"`);
        choice1.addEventListener("click", () => {
            getPlayerHeight(40);
        }, { signal });
        choice2.innerHTML = (`4'2"`);
        choice2.addEventListener("click", () => {
            getPlayerHeight(42);
        }, { signal });
        choice3.innerHTML = (`4'4"`);
        choice3.addEventListener("click", () => {
            getPlayerHeight(44);
        }, { signal });
        choice4.innerHTML = (`4'6"`);
        choice4.addEventListener("click", () => {
            getPlayerHeight(46);
        }, { signal });
        choice5.innerHTML = (`4'8"`);
        choice5.addEventListener("click", () => {
            getPlayerHeight(48);
        }, { signal });
        choice6.innerHTML = (`4'10"`);
        choice6.addEventListener("click", () => {
            getPlayerHeight(410);
        }, { signal });
        choice7.innerHTML = (`5'0"`);
        choice7.addEventListener("click", () => {
            getPlayerHeight(50);
        }, { signal });

    } else if (playerRaceChoice == 2) {
        playerRace = "Human";
        contextText.innerHTML = (`Straightforward as they come, humans are average in height, abilities and tendencies. <br><br> But the question remains... How tall are you?`);
        choices.innerHTML = (` `);
        choice1.innerHTML = (`5'0"`);
        choice2.innerHTML = (`5'2"`);
        choice3.innerHTML = (`5'4"`);
        choice4.innerHTML = (`5'6"`);
        choice5.innerHTML = (`5'8"`);
        choice6.innerHTML = (`5'10"`);
        choice7.innerHTML = (`6'0"`);

    } else if (playerRaceChoice == 3) {
        playerRace = "Slyme";
        contextText.innerHTML = (`A gooey race of people known for their voluptuous, shifting bodies and high libido. They can be almost any size, and feed off of the essence of other creatures.
            <br><br> But the question remains... How tall are you?`);
        choices.innerHTML = (` `);
        choice1.innerHTML = (`3'0"`);
        choice2.innerHTML = (`4'0"`);
        choice3.innerHTML = (`5'0"`);
        choice4.innerHTML = (`6'0"`);
        choice5.innerHTML = (`7'0"`);

    } else if (playerRaceChoice == 4) {
        playerRace = "Vulpine";
        contextText.innerHTML = (`A sly, fox like race! Fox kin are known for their sharp wit and cunning. Their body's sport fluffy ears and even fluffier tails, and those with members find themselves with large knots.
            <br><br> But the question remains... How tall are you?`);
        choices.innerHTML = (` `);
        choice1.innerHTML = (`4'0"`);
        choice2.innerHTML = (`4'4"`);
        choice3.innerHTML = (`4'8"`);
        choice4.innerHTML = (`5'0"`);
        choice5.innerHTML = (`5'4"`);
        choice6.innerHTML = (`5'8"`);
        choice7.innerHTML = (`6'0"`);

    } else if (playerRaceChoice == 5) {
        playerRace = "Equine";
        contextText.innerHTML = (`A large, bulky horse-like race. Endowed and blessed in every way, they are known to be gentle in society today despite their impressive assets and constitution. 
            <br><br> But the question remains... How tall are you?`);
        choices.innerHTML = (` `);
        choice1.innerHTML = (`6'0"`);
        choice2.innerHTML = (`6'2"`);
        choice3.innerHTML = (`6'4"`);
        choice4.innerHTML = (`6'6"`);
        choice5.innerHTML = (`6'8"`);
        choice6.innerHTML = (`6'10"`);
        choice7.innerHTML = (`7'0"`);
    }

    console.log(playerRace);
    controller.abort();
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
the wooden hallway and echoey bathroom as head on your way. <br><br>You disrobe sluggishly, getting a good look of yourself in the mirror... <br>Who are you?`);
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
    choice1.addEventListener("click", () => {
        newPlayerRace(1);
    }, { signal });
    choice2.addEventListener("click", () => {
        newPlayerRace(2);
    }, { signal });
    choice3.addEventListener("click", () => {
        newPlayerRace(3);
    }, { signal });
    choice4.addEventListener("click", () => {
        newPlayerRace(4);
    }, { signal });
    choice5.addEventListener("click", () => {
        newPlayerRace(5);
    }, { signal });

    //Return charName, next Func
    console.log(charName);
    return charName;
}

// Add response to clicking new game.
choice1.addEventListener("click", newGame);
