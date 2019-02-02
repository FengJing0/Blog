<?php

namespace app\api\model;

use think\Db;
use think\Exception;
use think\Request;
use app\lib\enum\ScopeEnum;
class User extends BaseModel
{
    protected $hidden = ['password','ip','create_time','delete_time','update_time'];

    protected $autoWriteTimestamp = true;

    public function saveUser($username,$password,$nickname){
        if (!$nickname) {
            $nickname = $username;
        }
        Db::startTrans();
        try{
            $this->username = $username;
            $this->password = md5($password);
            $this->nickname = $nickname;
            $this->ip = Request::instance()->ip();
            $this->scope = ScopeEnum::User;
            $this->save();

            $id = $this->get($this->getAttr('id'));
            Db::commit();

            return $id;
        }catch (Exception $e){
            Db::rollback();
            throw $e;
        }

    }

    public static function check($username,$password){
        return self::where('username','=',$username)->where('password','=',md5($password))->find();
    }
}