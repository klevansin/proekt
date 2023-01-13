import router from 'fmihel-php-router-client';

router.global = {
    ...router.global,
    host: WEBPACK_MODE === 'production' ? './' : 'http://work/klevansin/proekt/server/index.php',

    method: 'POST',
    mode: 'cors', // no-cors, cors, same-origin
    cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, omit
    headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, follow, error
    referrerPolicy: 'no-referrer', // no-referrer, client

};
