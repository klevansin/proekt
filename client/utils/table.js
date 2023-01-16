import { ui } from './ui';
import 'datatables/media/js/jquery.dataTables.min';
import 'datatables-select';

export function createTable({
    id,
    data,
    columns,
    $parent,
    ...params
}) {
    $parent.append(`<table id='${id}' style="width:100%"><thead></thead><tbody></tbody></table>`);
    const $table = $parent.find(`#${id}`);

    ui[id] = $table.DataTable({
        paging: false,
        ordering: false,
        info: false,
        searching: false,
        // scrollY: 200,
        ...params,
        data,
        columns,
        select: true,

    });

    return ui[id];
}

export function clearTable($table) {
    $table.clear().draw();
}

export function addToTable($table, rows) {
    $table.rows.add(rows).draw();
}
