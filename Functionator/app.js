let myBlock;
let myFunctionList;
let funList = [];
const movement = ["right", "left", "up", "down"];

document.addEventListener('DOMContentLoaded', () => {
    myBlock = document.createElement("div");
    myBlock.textContent = "Hello World";
    myBlock.style.width = "100px";
    myBlock.style.height = "100px";
    myBlock.style.backgroundColor = "red";
    myBlock.style.color = "white";
    myBlock.style.lineHeight = "100px";
    myBlock.style.textAlign = "center";
    myBlock.style.position = "absolute";
    myBlock.style.top = "100px"; 
    myBlock.style.left = "150px";

    document.body.appendChild(myBlock);
    myFunctionList = document.createElement("div");
    document.body.appendChild(myFunctionList);
});

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.key);
    if (e.key === "ArrowLeft") {
        addFunc("left");
        goLeft();
    } else if (e.key === "ArrowRight") {
        addFunc("right");
        goRight();
    } else if (e.key === "ArrowUp") {
        addFunc("up");
        goUp();
    } else if (e.key === "ArrowDown") {
        addFunc("down");
        goDown();
    } else if (e.key === "Enter") {
        myBlock.style.backgroundColor = randonColor();
    } else if (e.key === " ") {
        mover();
    } else if (e.key === "r") {
        let temp = movement[Math.floor(Math.random() * movement.length)];
        addFunc(temp);
    }
});

function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px";
}

function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px";
}

function goUp() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + "px";
}

function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + "px";
}

function addFunc(val) {
    let span = document.createElement("span");
    span.textContent = "+"+val;
    span.style.padding = "10px";
    span.style.border = "1px solid #ddd";
    
    span.addEventListener('mouseover', () => {
        span.style.backgroundColor = "red";
        span.style.color = "white";
    });

    span.addEventListener('mouseout', () => {
        span.style.backgroundColor = "white";
        span.style.color = "black";
    });

    span.addEventListener("click", () => {
        let curIndex = funList.indexOf(span);
        let tempRemove = funList.splice(curIndex, 1);
        myFunctionList.removeChild(span);
    })
    myFunctionList.appendChild(span);
    funList.push(span);
}

function randonColor() {
    return "#"+Math.random().toString(16).substr(-6); 
}

function mover() {

    if (funList.length > 0) {
        let cur = myBlock.getBoundingClientRect();
        let el = funList.shift();
        let item = el.textContent.replace("+", "");
        myFunctionList.removeChild(el);
        myBlock.innerHTML = "Move: " + item;

        if (item == "left") {
            myBlock.style.left = cur.left - cur.width + "px";
        }

        if (item == "right") {
            myBlock.style.left = cur.left + cur.width + "px";
        }

        if (item == "up") {
            myBlock.style.top = cur.top - cur.height + "px";
        }

        if (item == "down") {
            myBlock.style.top = cur.top + cur.height + "px";
        }
        setTimeout(mover, 300);
    } else {
        myBlock.innerHTML = " Set Path";
        return;
    }
}