const h4login = document.querySelector('.bargashtlogin');
const h4signup = document.querySelector('.bargashtsign-up');

const login = document.querySelector('.login');
const signup = document.querySelector('.sign-up');


h4signup.addEventListener('click' , clickh4signup);


function clickh4signup(){
    signup.style.display="block";
}


h4login.addEventListener('click' , clickh4login);

function clickh4login(){
    signup.style.display='none';
    login.style.display="block";
}