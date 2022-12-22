/* eslint-disable camelcase */
/* eslint-disable no-undef */
function test_isHashValid() {
    console.log('------------------------------------');
    const msg = 'тест isHashValid(..)';
    console.log(msg);

    let hash = '8394789240';
    console.log(hash, '=>', isHashValid(hash));

    hash = '9958408934';
    console.log(hash, '=>', isHashValid(hash));
}

function test_mine() {
    console.log('------------------------------------');
    const msg = 'тест mine(..)';
    console.log(msg);

    let str = 'проверяемая строка';
    let hash = strToHash(str);
    let find = mine(str);
    console.log(str, '=>', hash, 'вычислено=>', find.hash, 'сделано шагов =>', find.i);

    str = 'is english string';
    hash = strToHash(str);
    find = mine(str);
    console.log(str, '=>', hash, 'вычислено=>', find.hash, 'сделано шагов =>', find.i);
}

test_isHashValid();
test_mine();
