<?php

use fmihel\base\Base;
use fmihel\console;
use fmihel\router;


Base::startTransaction('bc');
try {
    Base::query('TRUNCATE `TEST_BC`','bc');

    $uuid = Base::uuid();
    Base::query("insert into TEST_BC (UUID) VALUES ('$uuid')",'bc','utf8');
    $ID = Base::value("select ID from TEST_BC where UUID='$uuid'",'bc');
    
    $prep = Base::preparing(
        'update TEST_BC set INFO=?INFO,STATE=?STATE,HASH=?HASH,K=?K where ID=?ID',
        ['ID'=>$ID,
        'INFO'=>'first record',
        'STATE'=>'ready',
        'HASH'=>'XXX-XXX-XXX-XXX',
        'K'=>0
        ]
    );
    $res = Base::execute($prep,'bc');
    console::log('init',$res);
    
    Base::commit('bc');

    router::out(1);
    
} catch (\Exception $e) {
    Base::rollback('bc');
    throw $e;
};
