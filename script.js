const leftAmount = document.querySelector('.amount-one')
const rightAmount = document.querySelector('.amount-two')
const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
    
    // Klucz API pod linkiem https://exchangeratesapi.io/

    fetch(`=${currencyOne.value}&to=${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
        const currency1 = currencyOne.value
        const currency2 = currencyTwo.value

        const rate = data.info.rate

        rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`
        
        rightAmount.value = (leftAmount.value * rate).toFixed(2)
    })
}

const swap = () => { 
    let temporary = currencyTwo.value
    currencyTwo.value = currencyOne.value
    currencyOne.value = temporary
    
    let temporaryA = rightAmount.value
    rightAmount.value = leftAmount.value
    leftAmount.value = temporaryA
    
}
currencyOne.addEventListener('change',calculate)
currencyTwo.addEventListener('change',calculate)
leftAmount.addEventListener('input', calculate)
swapBtn.addEventListener('click', swap)

calculate()