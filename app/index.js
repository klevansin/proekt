import './lazy-load.config';
import { loadCSS } from 'fmihel-lazy-load';
import './style/index.scss';

loadCSS('style/index.css');

$(() => {
    console.log('ok');
});
