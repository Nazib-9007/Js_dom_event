let button = document.querySelector('#btn');
button.addEventListener('click', (e)=>{
    let key = [];
    if(e.shiftKey)key.push('Shift');
    if(e.altKey)key.push('Alt');
    if(e.ctrlKey)key.push('Ctrl');

    let mess = document.querySelector('#message');
    mess.innerHTML = `Keys are ${key.join('+')}`;
});