
const userForm = document.querySelector('.js-username-form');
const usernameInput = document.querySelector('.username-input');
const userGreeting =  document.querySelector('.user-greeting');
const USERNAME  = 'username';
function paintInput(){
    userForm.classList.remove('hidden');
    userGreeting.classList.add('hidden');
}
function helloUser(username){
    userGreeting.innerText = `Hello ${username}`;
    userForm.classList.add('hidden');
    userGreeting.classList.remove('hidden');
}
function loadUserName(){
    const username = localStorage.getItem('username');
    if(username === null){
        paintInput();
    }else{
        helloUser(username);
    }
}

function handleSubmit(event){
    event.preventDefault();
    const userName = usernameInput.value;
    localStorage.setItem(USERNAME,userName);
    helloUser(userName);
}
function init(){
    loadUserName();
    userForm.addEventListener('submit', handleSubmit);
}

init();