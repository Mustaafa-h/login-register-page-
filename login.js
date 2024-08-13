const wrap = document.querySelector('.wrap');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

const btnloginpopup = document.querySelector('.btnlogin-popup')

const iconclose = document.querySelector('.close')


registerlink.addEventListener('click',() => {
    wrap.classList.add('active');
});

loginlink.addEventListener('click',() => {
    wrap.classList.remove('active');
})

btnloginpopup.addEventListener('click',() => {
    wrap.classList.add('active-popup');
});

iconclose.addEventListener('click',() => {
    wrap.classList.remove('active-popup');
});