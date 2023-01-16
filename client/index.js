import './router.config';
import server from '../source/server';
import 'datatables/media/css/jquery.dataTables.min.css';
// import 'jquery-ui/dist/themes/base/jquery-ui.css';
import 'jquery-ui/dist/themes/cupertino/jquery-ui.css';
// import 'jquery-ui/dist/themes/overcast/jquery-ui.css';
// import 'jquery-ui/dist/themes/redmond/jquery-ui.min.css';
// import 'jquery-ui/dist/themes/swanky-purse/jquery-ui.css';
// import 'jquery-ui/dist/themes/vader/jquery-ui.css';
import 'jquery-ui/dist/jquery-ui.min';
import './style/index.css';
import { createTable, clearTable, addToTable } from './utils/table';
import { createUI } from './utils/ui';
import dialog from './utils/dialog';
import { clients, results, test } from './data';

$(() => {
    const ui = createUI();

    ui['btn-init'].on('click', () => {
        server.init().then(() => {
            dialog('table init ok');
        }).catch((e) => {
            dialog(e);
        });
    });

    ui['btn-create-table'].on('click', () => {
        const $table = createTable({
            id: 'table-test-1',
            $parent: $('#for-table-test'),
            data: test.data,
            columns: test.columns,
        });

        $table.on('select', (e, dt, type, indexes) => {
            if (type === 'row') {
                const data = $table.row(indexes[0]).data();
                console.log('select', data);
            }
        });
    });

    ui['btn-clear-table'].on('click', () => {
        console.log('clear-table', ui['table-test-1']);
        clearTable(ui['table-test-1']);
    });

    ui['btn-prepare'].on('click', () => {
        const info = ui['test-info'].val();
        server.prepare(info)
            .then((res) => {
                console.log(res);
            });
    });

    ui['btn-add-row'].on('click', () => {
        console.log('add-table');
        addToTable(ui['table-test-1'], test.rows);
    });

    ui['btn-search-client'].on('click', () => {
        createTable({
            id: 'clients',
            ...clients,
            $parent: $('#search-list'),
        }).on('click', () => {
            ui['client-name'].val('Mike');
            createTable({
                ...results,
                $parent: ui.results,
            });
        });
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
});
