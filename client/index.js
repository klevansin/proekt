import './lazy-load.config';
import { loadCSS } from 'fmihel-lazy-load';
import './style/index.scss';
import './router.config';
import server from '../source/server';

loadCSS('style/index.css');

$(() => {
    $('#test').on('click', () => {
        server.test().then(() => {
            console.log('тест пройден');
        }).catch((e) => {
            console.log('тест НЕ пройден, ошибка...');
            console.error(e);
        });
    });
    $('#load').on('click', () => {
        server.load({}).then((list) => {
            console.log('load', list);
        }).catch((e) => {
            console.error(e);
        });
    });
});
