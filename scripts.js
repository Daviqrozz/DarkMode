const html = document.querySelector('html')
const button = document.querySelector('#button')
var click = 0

button.addEventListener('click', () => {
   MudarCor()
})

function MudarCor(){
    const atr = html.getAttribute('data-contexto')
    if (atr == 'white') {
        html.setAttribute('data-contexto', 'black');
        
    } else {
        html.setAttribute('data-contexto', 'white');
}}
