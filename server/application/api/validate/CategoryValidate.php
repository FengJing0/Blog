<?php

namespace app\api\validate;

class CategoryValidate extends BaseValidate
{
    protected $rule = [
        'name' => 'require|isNotEmpty'
    ];
}