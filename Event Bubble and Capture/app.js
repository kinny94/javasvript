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

let player =  {
    speed: 100,
    x: 100,
    y: 100
}

window.addEventListener('DOMContentLoaded', build);
document.addEventListener('keydown', function(event) {
    let key = event.keyCode;
    console.log(key);

    if (key === 37) {
        player.x -= player.speed
    }

    if (key === 38) {
        player.y -= player.speed
    }

    if (key === 39) {
        player.x += player.speed
    }

    if (key === 40) {
        player.y += player.speed
    }

    player.el.style.left = player.x + "px";
    player.el.style.top = player.y + "px";
});

function build() {
    player.el = document.createElement('div');
    player.x = 100;
    player.y = 100;
    player.el.style.position = "absolute";
    player.el.style.width = "100px";
    player.el.style.height = "100px";
    player.el.style.backgroundColor = "red";
    player.el.style.top = player.x + "px";
    player.el.style.left = player.y + "px";
    document.body.appendChild(player.el);
}