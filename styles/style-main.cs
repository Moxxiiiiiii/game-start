/* These blocks define the body and main two elements in which the game is played */
body {
    background-color: #616060;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
}

.contain-all {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
}

/* These two blocks make use of the defined body space, seperating the game into two re-sizeable blocks */
.left-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFEABF;
    padding: 0;
    height: inherit;
    width: 300px;
    margin-right: 30px;
    margin-bottom: 8px;
}

.right-side {
    display: flex;
    flex-grow: 4;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFEABF;
    height: inhreit;
    width: 600px;
    margin-bottom: 8px;
}

/* This is where we style the portrait and info blocks */

.portrait {
    height: 28%;
    background-color: #FFBFFC;
}

.info-block {
    height: 68%;
    background-color: #E2BFFF;

}

.date-time-block {
    height: 10%;
    background-color: #BFFCFF;
}

.stats-block {
    height: 80%;
    background-color: #BFFFC2;
}

.save-load-block {
    display: flex;
    flex-direction: row;
    height: 10%;
    background-color: #BFFCFF;
}

#save-button {
    background-color: #EDEDED;
    width: 50%;
}

#load-button {
    background-color: #1A1A1A;
    width: 50%;
}

/* This is where we define style the context and input blocks */

.context-box {
    height: 63%;
    background-color: #9CD4FF;
}

.choice-box {
    height: 33%;
    background-color: #C79CFF;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.top-choices {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 46%;
}

.bottom-choices {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 46%;
}

.choice1, .choice2, .choice3, .choice4, .choice5, .choice6, .choice7, .choice8 {
    width: 22%;
    background-color: #A3FF9C;
}