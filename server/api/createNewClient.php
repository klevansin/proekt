<?php

use fmihel\console;
use fmihel\router;
use fmihel\base\Base;

$NAME1 = router::$data['name1'];  
$NAME2 = router::$data['name2'];
$DATE_BIRTH = router::$data['date_birth'];

Base::startTransaction('bc');
try {

    $uuid = Base::uuid();
    Base::query("insert into TEST_BC_CLIENTS (UUID) VALUES ('$uuid')",'bc','utf8');
    $ID = Base::value("select ID_CLIENT from TEST_BC_CLIENTS where UUID='$uuid'",'bc');
    
    $prep = Base::preparing(
        'update TEST_BC_CLIENTS set NAME1=?NAME1,NAME2=?NAME2,DATE_BIRTH=?DATE_BIRTH where ID_CLIENT=?ID',
        ['ID'=>$ID,
        'NAME1'=>$NAME1,
        'NAME2'=>$NAME2,
        'DATE_BIRTH'=>$DATE_BIRTH
        ]
    );
    $res = Base::execute($prep,'bc');
    
    Base::commit('bc');

    router::out(['ID_CLIENT'=>$ID]);
    
} catch (\Exception $e) {
    Base::rollback('bc');
    throw $e;
};

