<?php

namespace app\api\model;

use think\Request;
use app\lib\enum\ScopeEnum;
class User extends BaseModel
{
    protected $hidden = ['password','ip','create_time','delete_time','update_time'];

    protected $autoWriteTimestamp = true;

    public function saveUser($user){
        $nickname = $user['nickname'];
        if (!$nickname) {
            $nickname = $user['username'];
        }
        $this->username = $user['username'];
        $this->password = md5($user['password']);
        $this->nickname = $nickname;
        $this->ip = Request::instance()->ip();
        $this->scope = ScopeEnum::User;
        $result = $this->save();

        if($result){
            return $this->get($this->getAttr('id'));
        }else{
            return false;
        }
    }
}