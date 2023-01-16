<?php

use fmihel\base\Base;
use fmihel\console;
use fmihel\router;

$ID = router::$data['ID'];
$h  = router::$data['h'];
$k  = router::$data['k'];


try {


    Base::startTransaction('bc');

    $prep = Base::preparing(
        'update TEST_BC set STATE=?STATE,HASH=?HASH,K=?K where ID=?ID',
        ['ID'=>$ID,'STATE'=>'ready','HASH'=>$h,'K'=>$k]
    );
    $res = Base::execute($prep,'bc');

    Base::commit('bc');

    router::out(1);
        
} catch (\Exception $e) {
    
    Base::rollback('bc');
    console::error($e);
};

router::out(0);

