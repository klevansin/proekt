<?php

ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL & ~E_NOTICE);

if (file_exists(__DIR__.'/vendor/autoload.php')){
    require_once __DIR__.'/vendor/autoload.php';
}elseif (file_exists(__DIR__.'/../vendor/autoload.php')){
    require_once __DIR__.'/../vendor/autoload.php';
}else{
    die('autoload not exists');
};

use fmihel\router;
use fmihel\base\Base;
use fmihel\config\Config;
use fmihel\console;

console::log('in');

Base::connect(Config::get('deco'));


if (router::enabled()){
    try{
        router::init([
            'root'=>__DIR__,
            'before'=>function($pack){ return $pack; },
        ]);
        require_once router::module();
        router::done();
    
    }catch(\Exception $e){
        router::error($e);
    }

}else{
    echo file_get_contents(__DIR__.'/index.html');
}