const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const rergisterLink=document.querySelector('.register-link');

rergisterLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})

