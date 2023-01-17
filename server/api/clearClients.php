<?php

use fmihel\base\Base;
use fmihel\console;
use fmihel\router;


Base::startTransaction('bc');
try {
    Base::query('TRUNCATE `TEST_BC_CLIENTS`','bc');
    Base::commit('bc');

    router::out(1);
    
} catch (\Exception $e) {
    Base::rollback('bc');
    throw $e;
};
