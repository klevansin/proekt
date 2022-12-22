/* eslint-disable camelcase */
/* eslint-disable no-undef */
function test_hash() {
    console.log('------------------------------------');
    const msg = 'тест hash(..)';
    console.log(msg);

    for (let num = 0; num < 13; num++) {
        const h = hash(num, 8);
        console.log('число = ', num, 'хэш = ', h);
    }
}

function test_massivToHash() {
    console.log('------------------------------------');
    const msg = 'тест massivToHash(..)';
    console.log(msg);

    const massiv = [1, 4, 24, 20, 78, 3];
    const result = massivToHash(massiv);
    console.log(massiv, '=>', result);
}

function test_strToMassiv() {
    console.log('------------------------------------');
    const msg = 'тест strToMassiv(..)';
    console.log(msg);

    let str = 'пробная строка abcd';
    let result = strToMassiv(str);
    console.log(`"${str}"`, '=>', result);

    str = ' ';
    result = strToMassiv(str);
    console.log(`"${str}"`, '=>', result);
}

function test_strToHash() {
    console.log('------------------------------------');
    const msg = 'тест strToHash(..)';
    console.log(msg);

    let str = 'пробная строка abcd';
    let result = strToHash(str);
    console.log(`"${str}"`, '=>', result);

    str = '0';
    result = strToHash(str);
    console.log(`"${str}"`, '=>', result);

    str = ' ';
    result = strToHash(str);
    console.log(`"${str}"`, '=>', result);

    str = '  ';
    result = strToHash(str);
    console.log(`"${str}"`, '=>', result);
}

// запуск тестов
test_hash();
test_massivToHash();
test_strToMassiv();
test_strToHash();
