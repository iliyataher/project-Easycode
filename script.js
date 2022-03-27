const menunavbar = document.querySelector('.menunavbar');
const navbar = document.querySelector('.navbar');
const itmenavbar1 = document.querySelector('.bar1');
const itmenavbar2 = document.querySelector('.bar2');
const itmenavbar3 = document.querySelector('.bar3');
const itmenavbar4 = document.querySelector('.bar4');
const closemenu = document.querySelector('.closenavbarmenu');


menunavbar.addEventListener('click' , clickmenunavbar);

function clickmenunavbar(){
    navbar.style.width="100%";
    navbar.style.backgroundColor="gold"
    closemenu.style.display="block";
    itmenavbar1.style.display="block";
    itmenavbar2.style.display="block";
    itmenavbar3.style.display="block";
    itmenavbar4.style.display="block";
}

closemenu.addEventListener('click' , clickclosemenunavbar);

function clickclosemenunavbar(){
    navbar.style.width="0%";
    navbar.style.backgroundColor="white"
    closemenu.style.display="none";
    itmenavbar1.style.display="none";
    itmenavbar2.style.display="none";
    itmenavbar3.style.display="none";
    itmenavbar4.style.display="none";
}

