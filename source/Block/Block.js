/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/**
 * Ячейка для хранения единицы информации
 */
class Block {
    constructor() {
        this.info = ''; // хранимая информаци
        this.hesh_prev = ''; // хеш-сумма предыдущего блока
        this.hesh_now = ''; // текущая хеш-сумма соотвествующая info
        this.k = '';// вычисленный коэффициент поиска для текщей суммы
    }

    /**
     * метод добавления информации
     * @param {string} info - информация
     * @param {string} hesh_prev - предыдущий хэш
     * @returns {bool} true - в случае если добавление прошло успешно
     */
    add(info, hesh_prev) {
        if ((this.hesh_now != '')) { // добавляем, тольо
            this.info = info;
            this.hesh_prev = hesh_prev;
            const hesh_mine = mine(this.info + this.hesh_prev);
            this.hesh_now = hesh_mine.hash;
            this.k = hesh_mine.k;
            return true;
        }
        return false;
    }

    /** проверка целостности данных */
    valid() {
        if (this.hesh_now === mine(this.info + this.hesh_prev).h) {
            return true;
        }
        return false;
    }
}
