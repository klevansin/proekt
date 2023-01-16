<?php

use fmihel\base\Base;
use fmihel\router;


$rows = Base::rows("SELECT * FROM TEST_BC ORDER BY ID ",'bc','utf-8');

router::out($rows);