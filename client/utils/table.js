import { $$ } from './ui';

export function createTable({
    id,
    data,
    columns,
    $parent,
    ...params
}) {
    $parent.append(`<table id='${id}'><thead></thead><tbody></tbody></table>`);
    const $table = $parent.find(`#${id}`);

    $$[id] = $table.DataTable({
        paging: false,
        ordering: false,
        info: false,
        searching: false,
        // scrollY: 200,
        ...params,
        data,
        columns,
    });

    return $$[id];
}