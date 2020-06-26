const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");

const answers = ["It will work!!", "May be!!", "May be not!!", "Don't Count on it", "Highly Likely", "Not gonna happen!", "Go for it"];
button.addEventListener('click', () => {
    let res = Math.floor(Math.random() * answers.length);
    message.innerText = question.value + " " + answers[res];
    question.value = "";
});