const main = document.getElementById('main')
const HEX_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const HEX_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F']
const RGB = {
    red: 0,
    green: 0,
    blue: 0
}
const NORMAL_COLORS = ['blue', 'yellow', 'red', 'black', 'white']


const btnChange = document.getElementById('btn_change') 
const btnHex = document.getElementById('hexadecimal')
const btnSimple = document.getElementById('simple_color')
const colorText = document.getElementById('color_text')

//option default
localStorage.setItem('option', 'hex')


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const generateRamdonHEX = () => {

    const arrHex = HEX_NUMBERS.concat(HEX_ALPHABET)
    const arrColorHexValue = []

    for (let i = 0; i < 6; i++) {

        const number = getRandomInt(0, 16)
        arrColorHexValue.push( arrHex[number] )

    }

    console.log(arrColorHexValue)

    return '#' + arrColorHexValue.join("")
    
}

const getColorNormal = () => {
    const numberRamdon = getRandomInt(0, 5)
    const color = NORMAL_COLORS[numberRamdon]
    return color
}

const getColorRGB = () => {
    
    const copyOBJ = JSON.parse( JSON.stringify(RGB) )

    for(let key in RGB) {
        const number = getRandomInt(0, 255)
        RGB[key] = number 
    }
    
    return copyOBJ
}

btnChange.addEventListener('click', (e) => {

    const number = getRandomInt(0, 2)
    const ramdonEjecution = [getColorNormal, getColorRGB]

    localStorage.setItem('hex', generateRamdonHEX() )
    localStorage.setItem('simple', JSON.stringify( ramdonEjecution[number]() ) )

    if (localStorage.getItem('option') === 'hex') {
        
        if (localStorage.getItem('hex') !== null) {
            main.style.backgroundColor = localStorage.getItem('hex')
            localStorage.setItem('current', localStorage.getItem('hex'))
            colorText.textContent = localStorage.getItem('current')
        }

    }

    if (localStorage.getItem('option') === 'simple') {

        if (localStorage.getItem('simple') !== null) {
            const getData= JSON.parse( localStorage.getItem('simple') )
            const result =  typeof getData === 'object'
                ? `rgb(${getData.red}, ${getData.green}, ${getData.blue})`
                : getData 
            console.log(result)
            main.style.backgroundColor = result
            localStorage.setItem('current', result)
            colorText.textContent = localStorage.getItem('current')
        }
    }


})

btnHex.addEventListener( 'click', e => {
    btnHex.style.backgroundColor = 'black'
    btnHex.style.color = 'white'

    btnSimple.style.backgroundColor = "rgb(239, 239, 239)"
    btnSimple.style.color = "black"


    localStorage.setItem('option', 'hex')
})

btnSimple.addEventListener('click', e => {

    btnHex.style.backgroundColor = 'rgb(239, 239, 239)'
    btnHex.style.color = 'black'

    btnSimple.style.backgroundColor = 'black' 
    btnSimple.style.color = 'white'

    localStorage.setItem('option', 'simple')
})

main.style.backgroundColor = localStorage.getItem('current')
colorText.textContent = localStorage.getItem('current')
