import './router.config';
import 'datatables/media/css/jquery.dataTables.min.css';
import 'jquery-ui/dist/themes/cupertino/jquery-ui.css';
import 'jquery-ui/dist/jquery-ui.min';
import './style/index.css';
import { createUI } from './utils/ui';
//import tabServer from './tabs/server';
//import tabTab from './tabs/tab';
import tabClients from './tabs/clients';
import tabJurnal from './tabs/jurnal';

$(() => {
    createUI(); 
    //tabServer();
    //tabTab();
    tabClients();
    tabJurnal();
});
