let parent = document.querySelector('#parent');
let form = document.querySelector('#form');
let button = document.querySelector('#btn');


/// at first remove the comment...
button.addEventListener('click', listen);
form.addEventListener('click', listen);
parent.addEventListener('click', listen);

Js Bubbling...
Here atfirst come child element then parent element..
function listen (enent) {
    console.log(event.currentTarget);
}

function listen (event){
    console.log(this.tagName);
}

//Js Capturing...
It just reverse the tag name. parent parent come first then child...

button.addEventListener('click', listen, {
    capture: true,
});
form.addEventListener('click', listen, {
    capture: true,
});
parent.addEventListener('click', listen, {
    capture: true,
});

function listen (){
    console.log(this.tagName);
}

let button = document.querySelector('#btn');
button.addEventListener('click', (e)=>{
    let key = [];
    if(e.shiftKey)key.push('Shift');
    if(e.altKey)key.push('Alt');
    if(e.ctrlKey)key.push('Ctrl');

    let mess = document.querySelector('#message');
    mess.innerHTML = `Keys are ${key.join('+')}`;
});


//movemove event

let bgColor = document.querySelector('#bg');
bgColor.addEventListener('mousemove', (e)=>{
    let mess = document.querySelector('#mess');
    mess.innerHTML = `
    Screen is ${e.screenX}, ${e.screenY}`
    let messa = document.querySelector('#messa');
    messa.innerHTML = `Client is ${e.clientX}, ${e.clientY}`;
})
