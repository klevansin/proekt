<?php

use fmihel\base\Base;
use fmihel\console;
use fmihel\router;

Base::startTransaction('bc');
try {
    $uuid = Base::uuid();
    Base::query("insert into TEST_BC (UUID) VALUES ('$uuid')",'bc','utf8');
    $ID = Base::value("select ID from TEST_BC where UUID='$uuid'",'bc');
    
    $prep = Base::preparing(
        'update TEST_BC set INFO=?INFO,STATE=?STATE where ID=?ID',
        ['ID'=>$ID,'INFO'=>router::$data['info'],'STATE'=>'prepare']
    );
    $res = Base::execute($prep,'bc');
    console::log('prepare',$res);
    
    Base::commit('bc');

    router::out(['ID'=>$ID]);

} catch (\Exception $e) {
    Base::rollback('bc');
    throw $e;
};
