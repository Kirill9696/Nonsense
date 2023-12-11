let block1 = document.querySelector(`#block1`);
let block2 = document.querySelector(`#block2`);
let block3 = document.querySelector(`#block3`);
let block4 = document.querySelector(`#block4`);
let block5 = document.querySelector(`#block5`);
let block6 = document.querySelector(`#block6`);

let field1Node = document.querySelector(`#field1`);
let field2Node = document.querySelector(`#field2`);
let field3Node = document.querySelector(`#field3`);
let field4Node = document.querySelector(`#field4`);
let field5Node = document.querySelector(`#field5`);
let field6Node = document.querySelector(`#field6`);
let nextNode = document.querySelector(`#next`);
let click = 0
let story = document.querySelector(`#story`);

nextNode.addEventListener(`click`, function() {
    click++;
    if (click == 1) {
    block1.classList.add(`d-none`);
    block2.classList.remove(`d-none`);
}
else if (click == 2) {
    block2.classList.add(`d-none`);
    block3.classList.remove(`d-none`);
}
else if (click == 3) {
    block3.classList.add(`d-none`);
    block4.classList.remove(`d-none`);
}
else if (click == 4) {
    block4.classList.add(`d-none`);
    block5.classList.remove(`d-none`);
}
else if (click == 5) {
    block5.classList.add(`d-none`);
    block6.classList.remove(`d-none`);
}
else if (click == 6) {
    block6.classList.add(`d-none`);
    nextNode.classList.add(`d-none`);
    story.innerHTML = (`${field1Node.value} ${field2Node.value} ${field3Node.value} ${field4Node.value} ${field5Node.value} ${field6Node.value}`);
}
})