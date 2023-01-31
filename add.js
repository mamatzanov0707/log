const container = document.querySelector('.container')
let a = 504
const on = document.querySelector('.on')
const off = document.querySelector('.off')


for (let i = 0; i < a; i++) {
    const circle = document.createElement('div')
    container.append(circle)
    circle.classList.add('circle')

    circle.addEventListener('mouseenter', () => {
        circle.style.background = randomColor(circle)
        circle.style.transform = 'rotate(360deg)'
    })

    circle.addEventListener('mouseleave', () => {
        circle.style.background = ''
    })
    on.addEventListener('click', () => {
        circle.style.background = randomColor(circle)
        on.style.margin = '25px 0'
        container.style.animation = 'anim 4s ease-out'

    })
    off.addEventListener('click', () => {
        circle.style.background = ''
    })
}


function randomColor() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
    }
    return color
}


const camelCase = (https) => {
    return (name) => {
        return (hosting) => {
            return (domain) => {
                return (page) => {
                    return `${https}://${name}.${hosting}.${domain}/${page}`
                }
            }
        }
    }
}
console.log(camelCase('https')('zamir777')('777')('com'))
