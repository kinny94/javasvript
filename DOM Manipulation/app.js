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