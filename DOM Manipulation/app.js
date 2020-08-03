document.querySelector("h1").innerHTML = "Changed using dom.js";

let eleList = document.getElementsByClassName("first");
console.log(eleList); // HTML Element colleciton
eleList = document.getElementsByTagName("span");
console.log(eleList);
eleList = document.querySelectorAll("span");

for (let i=0; i<eleList.length; i++) {
    let el = eleList[i];
    console.log(el.textContent);
    el.textContent = 'Span dom.js => ' + i + "  ";   
}

eleList.forEach((element, index) => {
    console.log(index);
    element.textContent = `${index} - updated with forEach`;
    element.style.backgroundColor = "red";
});

setTimeout(() => {
    eleList.forEach((element, index) => {
        console.log(index);
        element.textContent = `Span ${index} `;
        element.style.backgroundColor = "white";
    });
    return;
}, 1000);

const temp = document.querySelector('h1');
temp.innerText = "Hello World";
temp.setAttribute('class', 'red');

setTimeout(() => {
    temp.removeAttribute('class');
    return;
}, 1000);

const links = document.querySelectorAll('a');
links.forEach((el) => {
    console.log(el);
});

setTimeout(() => {
    links.forEach((element, count) => {
        element.setAttribute('href', 'www.google.com');
        element.textContent = `Item ${count} `;
    });

    return;
}, 1000);

const listItems = document.querySelectorAll('li');
listItems.forEach((element, index) => {
    console.log(element.className);
    element.textContent = element.className ? element.className : 'No Class';
    element.classList.add('test');
    console.log(element.classList.contains('test'));
});

setTimeout(() => {
    listItems.forEach((element, index) => {
        element.textContent = `Item ${index} `;
        element.classList.remove('test');
        console.log(element.classList.contains('test'));
    });
    return;
}, 1000);

// youncannot loop over the children function, but you can over the childNodes 
const elements = document.querySelector('div.first');
console.log(elements.children);

setTimeout(() => {
    const div = document.createElement('div');
    div.style.backgroundColor = "yellow";
    div.id = "newOne";
    div.textContent = "Created a new HTML element";

    const textInside = document.createTextNode("Nested text");
    div.append(textInside);
    document.body.appendChild(div);
    return;
}, 2000);

const h1 = document.getElementById("myID");
h1.addEventListener("click", () => {
    console.log("Clicked!");     
});

h1.addEventListener("mouseover", () => {
    console.log('mouse up event!');
});

const eleList2 = document.querySelectorAll("li");
for (let i=0; i<eleList2.length;i++) {
    console.log(eleList2[i]);
    eleList2[i].style.backgroundColor = "yellow";
    eleList2[i].style.padding = "5px";
    eleList2[i].addEventListener('click', makeItRed);
}

function makeItRed() {
    console.log(this);
    let temp = this.classList.toggle("red");
    console.log(temp);
}

const imgList = document.querySelectorAll('img');
for (let i=0; i<imgList.length; i++) {
    imgList[i].addEventListener('click', () => {
        console.log(imgList[i].src);
        window.open(imgList[i].src, "myImage", "resizable=yes,width=500,height=500");
    });
}

const mainList = document.querySelector("ul");
const inputEle = document.querySelector('input');
const clicker = document.querySelector('button');
clicker.addEventListener('click', () => {
    let li = document.createElement('li');
    let tempText = document.createTextNode(inputEle.value);
    li.appendChild(tempText);
    mainList.appendChild(li);
});

const btn = document.querySelector('.bg');

btn.addEventListener('click', () => {
    console.log('color');
    let myColor = "rgb("+random(255)+"," + random(255)+"," + random(255)+")";
    console.log(myColor);
    document.body.style.backgroundColor = myColor;
});

function random(num) {
    return Math.floor(Math.random() * (num + 1));
}

const btn2 = document.querySelector('.bg');
btn2.addEventListener('click', (e) => {
    console.log(e);
})

const spans = document.querySelectorAll('span');
spans.forEach((el, index) => {
    console.log(el);
    el.style.border = "1px solid black";
    el.style.display = "block";
    el.style.padding = "5px";
    el.addEventListener('click', (e) => {
        console.log(e);
        e.target.style.backgroundColor = ranColor();
    });
});

function  ranColor() {
    return "rgb("+random(255)+"," + random(255)+"," + random(255)+")";
}

function random(num) {
    return Math.floor(Math.random() * (num + 1));   
}

const elementPress = document.querySelector("input");
elementPress.addEventListener("keypress", addItem);

function addItem(event) {
    console.log(event);
    document.querySelector("h1").textContent = elementPress.value;

    if (elementPress.value.length > 5) {
        elementPress.style.backgroundColor = "red";
    } else {
        elementPress.style.backgroundColor = "white";    
    }

    if (event.keyCode === 13 && elementPress.value.length > 1) {
        document.querySelector('h1').style.backgroundColor = "yellow";
    }
}

const ul2 = document.querySelector("ul");
document.addEventListener("keydown", (e) => {
    let li = document.createElement("li");
    let temp = e.key+"(" + e.keyCode + ")";
    let textC = document.createTextNode(temp);
    li.appendChild(textC);
    ul2.appendChild(li);
});

const lis = document.querySelectorAll('li');
for (let x=0; x<lis.length; x++) {
    console.log(lis[x]);
    lis[x].addEventListener("mouseover", function(e) {
        this.classList.add("red");
    });
    lis[x].addEventListener("mouseout", function(e) {
        this.classList.remove("red");
    });
}


const animals = document.querySelectorAll(".animal");
for (let i=0; i<animals.length; i++) {
    animals[i].addEventListener('click', () => {
        let animal = animals[i].innerHTML;
        let lowerAnimal = animal.toLowerCase();
        makeSound(lowerAnimal);
        addStyle(lowerAnimal);
    });
}

function addStyle(name) {
    let activeElement = document.querySelector("." + name);
    activeElement.classList.add("active");
    setTimeout(() => {
        activeElement.classList.remove('active');
    }, 1000);
}
    
function makeSound(name) {
    switch(name) {
        case "lion": 
            let sound1 = new Audio("sound/lion.mp3");
            sound1.play();
            break;

        case "dog": 
            let sound2 = new Audio("sound/dog.mp3");
            sound2.play();
            break;

        case "cougar":
            let sound3 = new Audio("sound/cougar.mp3");
            sound3.play();
            break;
    }
}
