<?php

use fmihel\base\Base;
use fmihel\router;

$rows = Base::rows('select ID,HASH from TEST_BC where ID<='.router::$data['ID'].' order by ID desc limit 0,2','bc','utf8');

router::out(count($rows)>1? $rows[1]['HASH']:'');
