<?php

use fmihel\base\Base;
use fmihel\router;

//if (router::$data === 'error'){
//    throw new \Exception('bebeb');
//}else
//    error_log(print_r(router::$data,true));
$rows = Base::rows('select * from TEST_BC where 1>0','deco','utf-8');

router::out($rows);