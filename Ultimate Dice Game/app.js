const buttons = document.querySelector("button");
const player1 = document.querySelector ("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector("#output");
const dice = [[5], [1, 9], [1, 5, 9], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 3, 4, 6, 7, 9]];   

buttons.addEventListener('click', () => {
    // let rolls = [roll(6), roll(6)];
    // let temp;   
    // if (rolls[0] == rolls[1]) {
    //     temp = "It was a draw!";
    // } else if (rolls[0] > rolls[1]) {
    //     temp = "Player 1 wins!";
    // } else {
    //     temp = "Player 2 wins";
    // }

    let rollDice = roll(6);
    let holder = builder(rollDice);

    if (output.children[0]) {
        output.children[0].remove();
    }
    output.children[0].remove();
    output.appendChild(holder);

   //output.innerHTML = temp;
   // player1.innerHTML= rolls[0];
    //player2.innerHTML = rolls[1];
});


function builder(num) {
    let div = document.createElement("div");
    let dieArray = dice[num-1];
    for (let x=1; x<10; x++) {
        let span = document.createElement("div");
        span.setAttribute("class", "dot");
        if (dieArray.includes(x)) {
            span.classList.add("black");
        }
        div.appendChild(span);
    }
    div.setAttribute("class", "dicer");
    return div;
}
function roll(num) {
    let rNumber = Math.floor(Math.random() * num) + 1;
    let number = 9855 + rNumber;
    let char = `&#${number};`;
    return rNumber + " " + char;
}