let win = 0;
let i;

for (i = 0; i < 100000000; i++) {
    const randomNumber1 = Math.random();
    const correctCup = Math.floor(randomNumber1 * 3); // 0
    const cups = [ false, false, false ];
    cups[ correctCup ] = true; // [ true, false, false ] //0

    // Choosing a cup
    const randomNumber2 = Math.random();
    let chosenCup = Math.floor(randomNumber2 * 3); // 2


    let incorrectCup;
    while (true) {
        incorrectCup = Math.floor(Math.random() * 3); // 1
        if (incorrectCup !== chosenCup && cups[ incorrectCup ] === false) {
            break;
        }
    }

    if (chosenCup === 0 && incorrectCup === 1) {
        chosenCup = 2;
    } else if (chosenCup === 0 && incorrectCup === 2) {
        chosenCup = 1;
    } else if (chosenCup === 1 && incorrectCup === 0) {
        chosenCup = 2;
    } else if (chosenCup === 1 && incorrectCup === 2) {
        chosenCup = 0;
    } else if (chosenCup === 2 && incorrectCup === 0) {
        chosenCup = 1;
    } else if (chosenCup === 2 && incorrectCup === 1) {
        chosenCup = 0;
    }

    if (cups[ chosenCup ] === true) {
        win++;
    }

}

console.log(win);