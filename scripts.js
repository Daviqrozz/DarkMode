const html = document.querySelector('html')
const button = document.querySelector('#button')
var checkbox = document.getElementById("checkbox");
button.addEventListener('click', () => {
    MudarCor()
})

checkbox.addEventListener('change',() => {
    MudarCor()
})

function MudarCor() {
    const atr = html.getAttribute('data-contexto')
    if (atr == 'white') {
        html.setAttribute('data-contexto', 'black');
        button.classList.add('active');
        check.classList.add('text-success')
        console.log('O site esta escuro')

    } else {
        html.setAttribute('data-contexto', 'white');
        button.classList.remove('active');
        check.classList.remove('text-success')
        console.log('O site esta claro')

    }
}
