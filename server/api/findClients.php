<?php

use fmihel\base\Base;
use fmihel\router;

$find = router::$data['clientName'].'';
if (strlen($find)>0){
    $query = "select * from TEST_BC_CLIENTS where NAME1 LIKE '%$find%' OR NAME2 LIKE '%$find%' ORDER BY ID_CLIENT";
    $finds = Base::rows($query,'bc','utf8');
}else{
    $finds = [];
}

router::out(['finds'=>$finds]);