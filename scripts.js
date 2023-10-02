const html = document.querySelector('html')
const button = document.querySelector('#button')
var click = 0

button.addEventListener('click',() => {
    click += 1;
    console.log(click)
})