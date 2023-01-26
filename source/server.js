/* eslint-disable camelcase */
import router from 'fmihel-php-router-client';

export default class server {
    /** предварительное сохранение данных на сервер,
     *  в then передает объект, содержащий ID (идентификатор сохраняемого блока)  - {ID:integer}
     * @param {string} info - сохраняемая информация
     * @param {array} addition - дополнительные параметры (не используется)
     * @return {Promise} Promise */
    static async prepare(info, ...addition) {
        return router.send({
            to: 'api/prepare',
            data: { info, ...addition },
        });
    }

    /** возвращает хэш сумму предыдущего сохранения
     *  в then передает объект, содержащий HASH (значение хэш-суммы предыдущего сохранения) - {HASH:string}
     *  @param {int}  ID идентификатор текущей записи
     *  @return {Promise} Promise
     */
    static async getPrevHash(ID) {
        return router.send({
            to: 'api/getPrevHash',
            data: { ID },
        });
    }

    /** Сохраняет хеш-сумму h и коэффициент k на сервевре (привязывает их к соотвествующим данным)
     *
     * @param {int} ID - идентификатор записи
     * @param {string} h - расчитанная хэш-сумма
     * @param {int} k - коэффициент блокчейна
     * @returns {Promise} Promise
     */
    static async commit(ID, h, k) {
        return router.send({
            to: 'api/commit',
            data: { ID, h, k },
        });
    }

    /** тест соединения с сервером, при успехе в then передает true,
     * в случае ошибки вызывает catch.
     * @return Promise
    */
    static async test() {
        return router.send({ to: 'api/test' })
            .then((out) => {
                if (out.test === 'ok') {
                    return true;
                }
                throw Error('ответ не распознан');
            });
    }

    /** загрузка списка блоков */
    static async load() {
        return router.send({ to: 'api/load' });
    }

    static async init() {
        return router.send({ to: 'api/init' });
    }

    static async findClients(clientName) {
        return router.send({
            to: 'api/findClients',
            data: { clientName },
        });
    }

    static async getListResult(ID_CLIENT) {
        return router.send({
            to: 'api/getListResult',
            data: { ID_CLIENT },
        });
    }

    static async getClients() {
        return router.send({
            to: 'api/getClients',
        });
    }

    static async createNewClient({ name1, name2, date_birth }) {
        return router.send({
            to: 'api/createNewClient',
            data: { name1, name2, date_birth },
        });
    }

    static async clearClients() {
        return router.send({
            to: 'api/clearClients',
        });
    }

    static async loadClientResults(ID_CLIENT) {
        return router.send({
            to: 'api/loadClientResults',
            data: { ID_CLIENT },
        });
    }

    static async saveNewResults(ID_CLIENT, INFO) {
        return router.send({
            to: 'api/saveNewResults',
            data: { ID_CLIENT, INFO },
        });
    }
}
