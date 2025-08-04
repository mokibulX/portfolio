let btn = document.querySelector('.main');
let inp = document.querySelector('#inp');

btn.addEventListener('click', () => {
let name = prompt ("Enter your name");
showAlert(name);

});

function showAlert(name) {
let para = document.createElement('p');
para.innerText = `hello ${name}`;
document.body.appendChild(para);

}