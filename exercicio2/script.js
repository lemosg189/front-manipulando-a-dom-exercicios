const red = document.querySelector('.red')
const azul = document.querySelector('.blue')
const roxo = document.querySelector('.purple')
const laranja = document.querySelector('.orange')
const btnSortear = document.querySelector('button')

let colorSelected = ''

const desmarcar = () => {
    red.classList.remove('selected')
    azul.classList.remove('selected')
    roxo.classList.remove('selected')
    laranja.classList.remove('selected')
}

red.onclick = () => {
    desmarcar()
    red.classList.add('selected')
    colorSelected = 'red'
}
azul.onclick = () => {
    desmarcar()
    azul.classList.toggle('selected')
    colorSelected = 'azul'
}
roxo.onclick = () => {
    desmarcar()
    roxo.classList.toggle('selected')
    colorSelected = 'roxo'
}
laranja.onclick = () => {
    desmarcar()
    laranja.classList.toggle('selected')
    colorSelected = 'laranja'
}

btnSortear.onclick = () => {
    const cores = ['red', 'azul', 'roxo', 'laranja']
    const aleatoryPosition = Math.floor(Math.random() * 4)
    let resultado = cores[aleatoryPosition]

    if (colorSelected === resultado) {
        console.log('Parabéns você acertou!')

    } else {
        console.log('Tente novamente!')
    }
}
