<?php

namespace app\api\validate;

class CollectionsValidate extends BaseValidate
{
    protected $rule = [
        'title' => 'require|isNotEmpty',
        'url' => 'require|isNotEmpty',
        'type' => 'require|isPositiveInteger'
    ];
}