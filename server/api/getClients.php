<?php

use fmihel\base\Base;
use fmihel\router;

$clients = Base::rows('select * from TEST_BC_CLIENTS order by ID_CLIENT','bc','utf8');

router::out(['clients'=>$clients]);