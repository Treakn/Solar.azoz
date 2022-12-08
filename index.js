const sidenav = document.querySelector('.sidenav')
const toggle= document.querySelector('.toggle')

toggle.addEventListener('click', ()=>{
    sidenav.classList.toggle('active')
})

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const forth = document.querySelector('.forth')

first.addEventListener('click', ()=>{
    first.classList.toggle('active')
})
second.addEventListener('click', ()=>{
    second.classList.toggle('active')
})
third.addEventListener('click', ()=>{
    third.classList.toggle('active')
})
forth.addEventListener('click', ()=>{
    forth.classList.toggle('active')
})