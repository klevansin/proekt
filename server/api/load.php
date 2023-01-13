<?php

use fmihel\base\Base;
use fmihel\router;

$start = router::$data['start'];
$count = router::$data['count'];

$rows = Base::rows("SELECT * FROM TEST_BC ORDER BY ID LIMIT $start , $count",'bc','utf-8');

router::out($rows);