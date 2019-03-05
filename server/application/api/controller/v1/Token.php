<?php

namespace app\api\controller\v1;


use app\api\service\AppToken;
use app\api\service\Token as TokenService;
use app\lib\exception\ParameterException;

class Token
{
    public function verifyToken($token = ''){
        if(!$token){
            throw new ParameterException([
               'msg'=>'token不允许为空'
            ]);
        }
        $valid = TokenService::verifyToken($token);
        return [
            'isValid' => $valid
        ];
    }

    public function getAppToken($ac = '',$se = ''){
        (new AppTokenGet())->goCheck();
        $app = new AppToken();
        $token = $app->get($ac,$se);
        return [
            'token' => $token
        ];
    }
}