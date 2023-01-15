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
import 'datatables/media/js/jquery.dataTables.min';
import './style/index.css';
import { createTable } from './utils/table';
import { $$, createUI } from './utils/ui';
import { clients, results } from './data';

$(() => {
    createUI();

    $$['btn-search-client'].on('click', () => {
        createTable({
            id: 'clients',
            ...clients,
            $parent: $('#search-list'),
        }).on('click', () => {
            $$['client-name'].val('Mike');
            createTable({
                ...results,
                $parent: $$.results,
            });
        });
    });

    $$['btn-test'].on('click', () => {
        server.test().then(() => {
            console.log('тест пройден');
        }).catch((e) => {
            console.log('тест НЕ пройден, ошибка...');
            console.error(e);
        });
    });
    $$['btn-load'].on('click', () => {
        server.load({}).then((list) => {
            console.log('load', list);
        }).catch((e) => {
            console.error(e);
        });
    });

    $$['btn-set-data'].on('click', () => {
        const data = [
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                salary: '$3,120',
                start_date: '2011/04/25',
                office: 'Edinburgh',
                extn: '5421',
            },
            {
                name: 'Garrett Winters',
                position: 'Director',
                salary: '$5,300',
                start_date: '2011/07/25',
                office: 'Edinburgh',
                extn: '8422',
            },
        ];
        const columns = [
            { data: 'name', title: 'Name' },
            { data: 'position', title: 'pos' },
            { data: 'salary', title: 'al' },
            { data: 'office', title: 'off' },
        ];

        createTable({
            id: 'table-1',
            $parent: $('#for-table'),
            data,
            columns,
        });
    });
});
