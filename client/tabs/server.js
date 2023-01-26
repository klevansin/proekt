import { createTable, clearTable, addToTable } from '../utils/table';
import { ui, waiter } from '../utils/ui';
import server from '../../source/server';
import { data, onChange } from '../data';

onChange((d) => {
    console.log('change', d);
    server.load().then((rows) => {
        clearTable(ui['all-list']);
        addToTable(ui['all-list'], rows);
    });
});

/** обработчики вкладки server */
export default () => {
    ui['all-list'] = createTable({
        id: 'all-list',
        $parent: $('#for-all-list'),
        data: [],
        columns: [
            { data: 'ID', title: 'ID' },
            { data: 'INFO', title: 'INFO' },
            { data: 'STATE', title: 'STATE' },
            { data: 'HASH', title: 'h' },
            { data: 'K', title: 'k' },
            { data: 'DATE_MODIF', title: 'date' },
        ],
    });

    ui['btn-init'].on('click', () => {
        server.init().then(() => {
            data({ ID: false });
        }).catch((e) => console.error(e));
    });

    ui['btn-prepare'].on('click', () => {
        const info = ui['test-info'].val();
        server.prepare(info)
            .then((res) => {
                data(res);
            })
            .catch((e) => console.error(e));
    });

    ui['btn-get-prev-hash'].on('click', () => {
        server.getPrevHash(data().ID)
            .then((res) => {
                data({ PREV_HASH: res.HASH });
            })
            .catch((e) => console.error(e));
    });

    ui['btn-commit'].on('click', () => {
        const { ID, h, k } = data();
        server.commit(ID, h, k)
            .then((res) => {
                if (res == 1) {
                    data({ ID: false });
                }
            })
            .catch((e) => console.error(e));
    });

    ui['btn-test'].on('click', () => {
        server.test().then(() => {
            console.log('тест пройден');
        }).catch((e) => {
            console.log('тест НЕ пройден, ошибка...');
            console.error(e);
        });
    });

    ui['btn-load'].on('click', () => {
        server.load({}).then((list) => {
            console.log('load', list);
        }).catch((e) => {
            console.error(e);
        });
    });

    ui['btn-waiter'].on('click', () => {
        waiter('show');
        setTimeout(() => {
            waiter('hide');
        }, 5000);
    });
};
