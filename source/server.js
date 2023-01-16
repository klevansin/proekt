import router from 'fmihel-php-router-client';

export default class server {
    /** тест соединения с сервером, вызывает catch в случае ошибки */
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

    static async prepare(info, ...addition) {
        return router.send({
            to: 'api/prepare',
            data: { info, ...addition },
        });
    }

    static async getPrevHash(ID) {
        return router.send({
            to: 'api/getPrevHash',
            data: { ID },
        });
    }

    static async commit(ID, h, k) {
        return router.send({
            to: 'api/commit',
            data: { ID, h, k },
        });
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
}
