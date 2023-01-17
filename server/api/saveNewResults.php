<?php

use fmihel\base\Base;
use fmihel\router;

$ID_CLIENT = router::$data['ID_CLIENT'];
$INFO = router::$data['INFO'];

Base::startTransaction('bc');
try {

    $uuid = Base::uuid();
    Base::query("insert into TEST_BC (UUID) VALUES ('$uuid')",'bc','utf8');
    $ID = Base::value("select ID from TEST_BC where UUID='$uuid'",'bc');
    
    $prep = Base::preparing(
        'update TEST_BC set INFO=?INFO,STATE=?STATE,HASH=?HASH,K=?K,ID_CLIENT=?ID_CLIENT where ID=?ID',
        ['ID'=>$ID,
        'ID_CLIENT'=>$ID_CLIENT,
        'INFO'=>$INFO,
        'STATE'=>'ready',
        'HASH'=>'NO_HASH',
        'K'=>0
        ]
    );
    $res = Base::execute($prep,'bc');
    
    Base::commit('bc');

    router::out(1);
    
} catch (\Exception $e) {
    Base::rollback('bc');
    throw $e;
};
