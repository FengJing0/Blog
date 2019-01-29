<?php

namespace app\api\validate;

class UserValidate extends BaseValidate
{
    protected $rule = [
        'username' => 'require|isNotEmpty',
        'password' => 'require|isNotEmpty'
    ];


}