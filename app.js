let btn = document.querySelector('.main');
let inp = document.querySelector('#inp');
let secondaryBtn = document.querySelector('.secondary');

btn.addEventListener('click', () => {
let name = prompt ("Enter your name");
showAlert(name);

});
function showAlert(name) {
let para = document.createElement('p');
para.innerText = `Hello ${name} You have clicked the button!`;
document.body.appendChild(para);

}

