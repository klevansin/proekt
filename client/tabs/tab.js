import { createTable, clearTable, addToTable } from '../utils/table';
import { ui } from '../utils/ui';
import { data } from '../data';

export default () => {
    const $table = createTable({
        id: 'table-test-1',
        $parent: $('#for-table-test'),
        ...data().test,

    });

    $table.on('select', (e, dt, type, indexes) => {
        if (type === 'row') {
            const row = $table.row(indexes[0]).data();
            console.log('select', row);
        }
    });

    ui['btn-create-table'].on('click', () => {
    });

    ui['btn-clear-table'].on('click', () => {
        console.log('clear-table', ui['table-test-1']);
        clearTable(ui['table-test-1']);
    });

    ui['btn-add-row'].on('click', () => {
        console.log('add-table');
        addToTable(ui['table-test-1'], test.rows);
    });
};
