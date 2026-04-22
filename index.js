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

//Js Encapsulation...

class Person{
    constructor (naam){
        this.naam = naam;
    }
    getNaam(){
        return this.naam;
    }
}

let newPeson = new Person('Nazib');
console.log(newPeson.getNaam());

class std{
    constructor (name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(newName){
        newName = newName.trim();//Here use trim() because it removes the free space in any kind of string.
        if(newName===""){
            throw 'This name cannot be empty';
        }
        this.name = newName;
    }
}
let newStd = new std('Nazib');
console.log(newStd.getName());

newStd.setName('Nazib ul Alam');
console.log(newStd.getName());

let taskParent = document.getElementById('items');
let taskChild = taskParent.getElementsByClassName('item');
for(let i=0; i<taskChild.length; i++){
    taskChild[i].style.color = 'red';
}

//using DOM to create a table..
const table = document.createElement('table');
table.style.border = '2px solid black';

for(let i = 0; i<2; i++){
    const row = document.createElement('tr');

    for(let j = 0; j<2; j++){
        const col = document.createElement('td');
        col.textContent = '1st cell';
        col.style.border = '1px solid red';
        col.style.padding = '10px';
        row.appendChild(col);
    }
    table.appendChild(row);
}
document.body.appendChild(table);
///Second Type problem..
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';

for (let i = 0; i < 2; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 2; j++) {
        const cell = row.insertCell(j);
        cell.textContent = `Row ${j} Cell ${j}`;
        cell.style.padding = '10px';
        cell.style.border = '1px solid green';
    }
    table.appendChild(row);
}

const addNote = document.createElement('h2');
addNote.insertAdjacentText('beforeend', 'This is a new note');

const insertRow = table.insertRow(0);
for (let k = 0; k < 2; k++) {
    const newCell = insertRow.insertCell(k);
    newCell.textContent = 'New Header note';
    newCell.style.padding = '10px';
    newCell.style.border = '1px solid green';
}

document.body.appendChild(table);

