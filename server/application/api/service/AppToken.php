<?php

namespace app\api\service;

use app\lib\exception\TokenException;
use app\api\model\User;
use think\Request;

class AppToken extends Token
{
    public function get($username,$password){
        $app = User::check($username,$password);
        if(!$app){
            throw new TokenException([
               'msg' => '授权失败',
               'errorCode' => 10004
            ]);
        }else{
            $app->ip = Request::instance()->ip();
            $app->save();
            $scope = $app->scope;
            $uid = $app->id;
            $values = [
                'scope' => $scope,
                'uid' => $uid
            ];
            $token = $this->saveToCache($values);
            $app -> token = $token;
            return $app;
        }
    }

    private function saveToCache($values){
        $token = self::generateToken();
        $expire_in = config('setting.token_expire_in');
        $result = cache($token,json_encode($values),$expire_in);
        if(!$result){
            throw new TokenException([
               'msg'=>'服务器缓存异常',
               'errorCode' => 10005
            ]);
        }
        return $token;
    }
}