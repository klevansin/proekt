<?php

use fmihel\base\Base;
use fmihel\router;

Base::startTransaction('bc');
try {
    $uuid = Base::uuid();
    Base::query("insert into TEST_BC (UUID) VALUES ('$uuid')",'bc','utf8');
    $ID = Base::value("select ID from TEST_BC where UUID='$uuid'",'bc');
    
    $prep = Base::preparing(
        'update TEST_BC set INFO=?INFO,STATE=?STATE,ID_CLIENT=?ID_CLIENT where ID=?ID',
        [
            'ID'=>$ID,
            'INFO'=>router::$data['info'],
            'ID_CLIENT'=>router::$data['ID_CLIENT'],
            'STATE'=>'prepare'
            ]
    );
    $res = Base::execute($prep,'bc');
    
    Base::commit('bc');

    router::out(['ID'=>$ID]);

} catch (\Exception $e) {
    Base::rollback('bc');
    throw $e;
};
