const wording = ["Do you like JavaScript as much as I Do?", "Hope you are having fun!!", "Let's do something interesting!"];

let startTime, endTime;

const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener('click', () => {

    console.log(button.innerText);

    if (button.innerText === "Start") {
        playText.disabled = false;
        playGame();
    } else {
        playText.disabled = true;
        button.innerText = "Start";
        endTest();
    }
}); 

function playGame() {
    let randomNum = Math.floor(Math.random() * wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
}

function endTest() {
    let date = new Date();
    endTime = date.getTime();
    let totaltime = ((endTime - startTime) / 1000);
    let str = playText.value;
    let wordCount = str.split(" ").length;
    let speed = Math.round((wordCount / totaltime) * 60);
    let finalMessage = `You typed at ${speed} words per minute`;

    compareWords(message.innerText, str);
    if (str !== message.innerText) {
        finalMessage += "<br>There were some typing mistakes!!</br>";
    } else {
        finalMessage += "<br>" + compareWords(message.innerText, str);
    }
    message.innerHTML = finalMessage;
}

function compareWords(str1, str2) {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;
    words1.forEach((item, index) => {
        if (item == words2[index]) {
            count++;
        }
    });

    return `${count} + correct out of ${words1.length}`;
}