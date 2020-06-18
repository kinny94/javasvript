const button = document.querySelector("button");
const output = document.querySelector(".output")

console.log(button);
button.addEventListener('click', () => {
    const cost = document.querySelector("input").value;  
    let tip = (cost * 0.15).toFixed(2);
    let temp = `<h1>You should tip $${tip} on $${cost}</h1>`;
    output.innerHTML = temp ;
});