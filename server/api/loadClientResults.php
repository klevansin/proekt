<?php

use fmihel\base\Base;
use fmihel\router;

$ID_CLIENT = router::$data['ID_CLIENT'];
$results = Base::rows("select * from TEST_BC where ID_CLIENT = $ID_CLIENT",'bc','utf8');

router::out(['results'=>$results]);