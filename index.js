//JS Function Tutorial...
//using normal function...
function findVowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
//using arrow function...
const searchVowel = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
//For each loop. it act's like a method...
let arr = [1,2,3,4,5];
arr.forEach(function printValue(val){
    console.log(val);
})
//For a given array of numbers, print the squeare of each value using foreach loop
let arr = [2,3,6,8,10];
arr.forEach((arr)=>{
    console.log(arr);
})
arr.forEach((arr)=>{
    console.log(arr**2);
});

//Function tutorial end...

//Js inserAdjacentHTML() methods...
// It has four values which is--> 'Beforebeing', 'afterbeing', 'beforend', 'afterend'....

let list = document.querySelector("#container");
list.insertAdjacentHTML('beforebegin', '<h2>This is beforebeing method</h2>');
list.insertAdjacentHTML('afterbegin', '<li>This is after being method</li>');
list.insertAdjacentHTML('beforeend', '<li>This is beforend method</li>');
list.insertAdjacentHTML('afterend', '<p>This is afterend method</p>');

//Js removechild() method...

let nav = document.querySelector("#container");
nav.removeChild(nav.lastElementChild);


//Dom method ---> 'prepend()'...
let app = document.getElementById('cont');
let arr = ['HTML', 'CSS', 'REACT'];
let myFunction = (lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});
arr.forEach(lang=>{
    app.prepend(myFunction(lang));
})

