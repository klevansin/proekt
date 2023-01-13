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
}
