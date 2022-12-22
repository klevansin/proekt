/* eslint-disable no-constant-condition */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/** алгоритмы расчета хешсуммы определенного вида (майнинг) */

/**
 * Проверка соотвествия хэшсуммы определенному виду
 * в данном случае хэшсумма считается правильной, если
 * она содержит не меньше чем count чисел 2
 *( старое название usl)
 * @param {string} hash - анализируемая хэшсумма
 * @returns {bool}
 */
function isHashValid(hash) {
    const hashStr = `${hash}`;
    let count = 3;
    for (let i = 0; i < hashStr.length; i++) {
        if (hashStr[i] === '2') {
            count -= 1;
        }
        if (count === 0) {
            return true;
        }
    }
    return false;
}

/**
 * ф-ция поиска хэшсуммы определенного вида, т.е.
 * той, для которой выполняется условие isHashValid
 *
 * @param {string} str - хэшируемая строка
 * @param {int} k - длина хэшсуммы
 * @returns объект с двумя свойствами {hash,k} ,  hash - найденная хэшсумма, к - коэффициент приращения,
 * при котором для хэшсуммы isHashValid возвращает true
 */
function mine(str, k = 8) {
    for (let i = 0; 1 > 0; i++) { // бесконечный цикл
        const hash = strToHash(str + (i === 0 ? '' : i), k);
        if (isHashValid(hash) === true) {
            return { hash, i };
        }
    }
}
