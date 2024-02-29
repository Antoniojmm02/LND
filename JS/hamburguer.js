const hamMenu =document.querySelector('.ham-menu');
const offScreenMenu =document.querySelector('.off-screen-menu');
const hambur= document.querySelector('.hambur');
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    hambur.classList.toggle('active')
});