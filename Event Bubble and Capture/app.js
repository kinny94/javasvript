const outputEle = document.querySelector("section");
const els = document.querySelectorAll('div');
for (let i=0; i<els.length; i++) {
    els[i].style.border = "1px solid red";
    els[i].style.width = "100px";
    els[i].style.padding = "20px";
    els[i].v = i + 1;
    els[i].addEventListener("click", capture, true);
    els[i].addEventListener("click", bubble, true);
}

function output(msg) {
    outputEle.innerHTML += `${msg}<br>`;
}

function bubble() { 
    output('bubble:' + this.v );
}

function capture() {
    output('capture:' + this.v );
}