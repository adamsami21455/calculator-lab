/*-------------------------------- Constants --------------------------------*/
const numberElements = document.querySelectorAll(".number")
const operatorElements = document.querySelectorAll(".operator")
const equalsElement = document.querySelector(".equals")
const displayElement = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let number1 = ('')
let number2 = ('')
let operator = ('')
/*------------------------ Cached Element References ------------------------*/

console.log(numberElements)
console.log(operatorElements)
console.log(equalsElement)
/*----------------------------- Functions -----------------------------*/

function handleClickNumber(event) {
    console.log(event.target.textContent)

    if (!number1 && !number2 && !operator) {
        number1 = event.target.textContent
        displayElement.textContent = number1
    }
    else if (number1 && !number2 && !operator) {
        number1 += event.target.textContent
        displayElement.textContent = number1


    }

     else if (number1 && !number2 && operator) {
        number2 = event.target.textContent
        displayElement.textContent = number2


    }
        else if (number1 && number2 && operator) {
        number2 += event.target.textContent
        displayElement.textContent = number2


    }



    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operator}`)
}
function handleClickOperator(event) {
    console.log('Clicked on operator')

    if(event.target.textContent === 'C'){
        number1 = null
        number2 = null
        operator = null
        displayElement.textContent = ''
        return
    }

    if (number1 && !number2 && !operator) {
        operator = event.target.textContent
        displayElement.textContent = operator

    }
    else if (number1 && !number2 && !operator) {

        number1 += event.target.textContent
    }
    else if (number1 && !number2 && operator) {
        number2 = event.target.textContent
    }


    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operator}`)

}
function handleClickEquals() {
    if (operator === "+") {
        displayElement.textContent = Number(number1) + Number(number2)

    }
     else if (operator === "-") {
        displayElement.textContent = Number(number1) - Number(number2)
    }
     else if (operator === "*") {
        displayElement.textContent = Number(number1) * Number(number2)
    }
     else if (operator === "/") {
        displayElement.textContent = Number(number1) / Number(number2)
       
    }

    console.log()
    
    console.log('Clicked on equals')

    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
    console.log(`Operator: ${operator}`)
    

}

/* ----------------------------- Event Listeners ----------------------------- */

equalsElement.addEventListener('click', handleClickEquals)

for (let oneNumElement of numberElements) {
    oneNumElement.addEventListener('click', handleClickNumber)
}

for (let oneOperatorElement of operatorElements) {
    oneOperatorElement.addEventListener('click', handleClickOperator)
}