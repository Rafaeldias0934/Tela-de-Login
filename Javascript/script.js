const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formAx = document.querySelector('.formAx');
const body = document.querySelector('body')

signupBtn.onclick = function(){
    formAx.classList.add('active')
    body.classList.add('active')
}

signinBtn.onclick = function(){
    formAx.classList.remove('active')
    body.classList.remove('active') 
}