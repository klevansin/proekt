import { createTable, clearTable, addToTable } from '../utils/table';
import { ui } from '../utils/ui';
import { data, onChange } from '../data';
import { isChange } from '../utils/isChange';
import server from '../../source/server';

onChange(() => {
    const d = data();
    if (d.finds.data.length > 0) {
        ui['for-clients-finds'].show(500);
        if (isChange('finds', d.finds.data)) {
            clearTable(ui['clients-finds']);
            addToTable(ui['clients-finds'], d.finds.data);
        }
    } else {
        ui['for-clients-finds'].hide(500);
    }

    if (d.current.ID_CLIENT === false) {
        ui['panel-results'].hide(500);
    } else {
        ui['panel-results'].show(500);
        ui['current-client-name'].val(`${d.current.NAME1} ${d.current.NAME2}`);

        if (isChange('results', d.results)) {
            clearTable(ui.results);
            addToTable(ui.results, d.results.data);
        }
    }
});
const updateClientResults = () => {
    server.loadClientResults(data().current.ID_CLIENT).then(({ results }) => {
        console.log('res', results);
        data({
            results: {
                columns: data().results.columns,
                data: results,
            },
        });
    });
};
export default () => {
    createTable({
        id: 'clients-finds',
        $parent: ui['for-clients-finds'],
        ...data().finds,
    }).on('select', (e, dt, type, indexes) => {
        if (type === 'row') {
            const row = ui['clients-finds'].row(indexes[0]).data();
            data({ current: row });
            updateClientResults();
        }
    });

    createTable({
        id: 'results',
        $parent: ui['for-results'],
        ...data().results,
    });

    ui['btn-search-client'].on('click', () => {
        server.findClients(ui['client-search-value'].val()).then(({ finds }) => {
            data({
                finds: { columns: data().finds.columns, data: finds },
                current: { ID_CLIENT: false },
            });
        });
    });
    ui['btn-add-result'].on('click', () => {
        server.saveNewResults(data().current.ID_CLIENT, ui['result-text'].val())
            .then(() => {
                updateClientResults();
            });
    });
};
