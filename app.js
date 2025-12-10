const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}   
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    return valueInYen;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen }

const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / 156.5) * 0.87;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }  
