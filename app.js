const HEX_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const HEX_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F']
const RGB = {
    red: 0,
    green: 0,
    blue: 0
}
const NORMAL_COLORS = ['blue', 'yellow', 'red', 'black', 'white']


const btnChange = document.getElementById('btn_change') 


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
    
    console.log(generateRamdonHEX())
    console.log(getColorNormal())
    console.log(getColorRGB())

})