import { createTable, clearTable, addToTable } from '../utils/table';
import { ui } from '../utils/ui';
import { clients, results } from '../data';

export default () => {
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
};
