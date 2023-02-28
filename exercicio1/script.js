const body = document.querySelector('body')
const homem = document.querySelector('img')

let posicao = 0
let imagem = 1

const andar = () => {
    if (posicao <= body.offsetWidth - 400) {
        if (imagem > 8) {
            imagem = 1
        }
        homem.style.left = `${posicao}px`
        posicao += 50
        homem.src = `assets/${imagem}.png`
        imagem++
    }
}

setInterval(andar, 100)


