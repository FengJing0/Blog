<?php

namespace app\api\model;

use think\Request;

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
        $this->password = $user['password'];
        $this->nickname = $nickname;
        $this->ip = Request::instance()->ip();
        $result = $this->save();

        if($result){
            return $this->get($this->getAttr('id'));
        }else{
            return false;
        }
    }
}