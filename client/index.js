import './router.config';
import server from '../source/server';
import 'jquery-ui/dist/jquery-ui.min';
// import 'jquery-ui/dist/themes/base/jquery-ui.css';
import 'jquery-ui/dist/themes/cupertino/jquery-ui.css';
// import 'jquery-ui/dist/themes/overcast/jquery-ui.css';
// import 'jquery-ui/dist/themes/redmond/jquery-ui.min.css';
// import 'jquery-ui/dist/themes/swanky-purse/jquery-ui.css';
// import 'jquery-ui/dist/themes/vader/jquery-ui.css';
import './style/index.css';

function ui(...ids) {
    ids.map((id) => {
        if (id.indexOf('dlg-') === 0) {
            const widg = $(`#${id}`);
            widg.dialog();
            widg.dialog('close');
        }
        if (id.indexOf('btn-') === 0) {
            const widg = $(`#${id}`);
            widg.button();
        }
        return undefined;
    });
}

$(() => {
    ui('dlg-test', 'btn-1', 'btn-test', 'btn-load');

    $('#btn-test').on('click', () => {
        server.test().then(() => {
            console.log('тест пройден');
        }).catch((e) => {
            console.log('тест НЕ пройден, ошибка...');
            console.error(e);
        });
    });
    $('#btn-load').on('click', () => {
        server.load({}).then((list) => {
            console.log('load', list);
        }).catch((e) => {
            console.error(e);
        });
    });
});
