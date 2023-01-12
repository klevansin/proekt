import './lazy-load.config';
import { loadCSS } from 'fmihel-lazy-load';
import './style/index.scss';
import router from 'fmihel-php-router-client';
import './router.config';

loadCSS('style/index.css');

$(() => {
    $('#test').on('click', () => {
        router.send({
            to: 'api/test',
            data: [],
        }).then((out) => {
            console.log('test', out);
        });
    });
});
