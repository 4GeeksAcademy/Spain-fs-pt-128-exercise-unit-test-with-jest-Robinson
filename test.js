// Importar la función sum del archivo app.js
const { sum } = require('./app.js');
// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('adds 12 + 5 to equal 17', () => {
    let total = sum(12, 5);
    expect(total).toBe(17);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dollar should be 146.19252336448598 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(1);
    // Si 1 euro son 156.5 yens, entonces 1 dollar debe ser (1 / 1.07 * 156.5)
    const expected = (1 / 1.07) * 156.5;
    // comparación 
    expect(fromDollarToYen(1)).toBeCloseTo(146.261);
});

test("One yen should be 0.005575221238938053 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1);
    // Si 1 euro son 0.87 pounds, entonces 1 yen debe ser (1 / 156.5 * 0.87)
    const expected = (1 / 156.5) * 0.87;
    // comparación 
    expect(fromYenToPound(1)).toBeCloseTo(0.0055);
});