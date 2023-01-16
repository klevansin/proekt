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
    static async load({
        start = 0,
        count = 10,
    }) {
        return router.send({ to: 'api/load', data: { start, count } });
    }

    static async init() {
        return router.send({ to: 'api/init' });
    }

    static async prepare(info) {
        return router.send({
            to: 'api/prepare',
            data: { info },
        });
    }

    static async getPrevHash(ID) {
        return router.send({
            to: 'api/getPrevHash',
            data: { ID },
        });
    }

    static async commit(ID, h) {
        return router.send({
            to: 'api/commit',
            data: { ID, h },
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
