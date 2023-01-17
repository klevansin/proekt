import { createTable, clearTable, addToTable } from '../utils/table';
import { ui } from '../utils/ui';
import { data, onChange } from '../data';
import { isChange } from '../utils/isChange';
import server from '../../source/server';

onChange(() => {
    const d = data();
    if (d.finds.data.length > 0) {
        ui['for-clients-finds'].show();
        if (isChange('finds', d.finds)) {
            clearTable(ui['clients-finds']);
            addToTable(ui['clients-finds'], d.finds.data);
        }
    } else {
        ui['for-clients-finds'].hide();
    }

    if (d.current.ID_CLIENT === false) {
        ui['panel-results'].hide();
    } else {
        ui['panel-results'].show();
        ui['current-client-name'].val(`${d.current.NAME1} ${d.current.NAME2}`);
    }
});

export default () => {
    createTable({
        id: 'clients-finds',
        $parent: ui['for-clients-finds'],
        ...data().finds,
    }).on('select', (e, dt, type, indexes) => {
        if (type === 'row') {
            const row = ui['clients-finds'].row(indexes[0]).data();
            data({ current: row });
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
};
