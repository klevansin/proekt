import { addToTable, clearTable, createTable } from '../utils/table';
import { data, onChange } from '../data';
import server from '../../source/server';
import { ui } from '../utils/ui';
import dialog from '../utils/dialog';

onChange(() => {
    clearTable(ui['clients-list']);
    addToTable(ui['clients-list'], data().clients.data);
});

const updateClientsList = () => {
    server.getClients().then(({ clients }) => {
        data({ clients: { ...data().clients, data: clients } });
    });
};

export default () => {
    createTable({
        id: 'clients-list',
        $parent: $('#for-clients-list'),
        ...data().clients,
    });

    ui['btn-update-clients-list'].on('click', () => {
        updateClientsList();
    });

    ui['btn-add-new-client'].on('click', () => {
        server.createNewClient({
            name1: ui.name1.val(),
            name2: ui.name2.val(),
            date_birth: ui['date-birth'].val(),
        }).then(({ ID_CLIENT }) => {
            ui.name1.val('');
            ui.name2.val('');
            ui['date-birth'].val('');

            dialog(`create client ${ID_CLIENT}`);
        });
    });
};
