/* eslint-disable no-unused-vars */
/** библиотека расчета хеша */

/**
 * простая ф-ция расчета хеш-суммы для целого числа num
 * (старое название hesh)
 * @param {int} num - число
 * @param {int} len - длина получаемой суммы
 * @returns {int}
 */
function hash(num, len = 8) {
    const a = ((num ** 3.2) / Math.sqrt(num));
    const h = Math.round((Math.abs(a - Math.round(a))) * (10 ** len));
    return h;
}

/**
 * преобразует массив чисел в соответсвующий ему хэш
 * (старое название hesh2)
 * @param {array} massiv - массив чисел
 * @param {int} k  - длина получаемого хэша
 * @returns {int}
 */
function massivToHash(massiv, k) {
    let out = 0;
    for (let i = 0; i < massiv.length; i++) {
        out += hash(massiv[i], k);
    }
    return Math.round(out / massiv.length);
}

/**
 * преобразование строки в массив где каждый элемент соотвествует коду символа в строке
 * (старое название bukvi)
 * @param {string} str
 * @returns {array}
 */
function strToMassiv(str) {
    const out = [];
    const index = 0;
    for (let i = 0; i < str.length; i++) {
        out.push(str[i].charCodeAt(index) + i);// i - немного искажаем код на каждом шаге, что-бы исключить повторяющиеся символы
    }
    return out;
}
/**
 * преобразование строки в соотвествующую хеш-сумму
 * (старое название allHash)
 * @param {string} str
 * @param {int} k
 * @returns {int}
 */
export function strToHash(str, k) {
    const massiv = strToMassiv(`${str}`);
    const g = massivToHash(massiv, k);
    return g;
}
