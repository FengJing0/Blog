<?php

namespace app\api\validate;

class BlogValidate extends BaseValidate
{
    protected $rule = [
        'content' => 'require|isNotEmpty',
        'category' => 'require|isNotEmpty'
    ];
}