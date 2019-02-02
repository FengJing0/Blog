<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use app\api\validate\UserValidate;
use app\api\model\User as UserModel;
use app\lib\exception\UserException;
use app\lib\exception\SuccessMessage;
use think\Exception;
use think\Request;

class User extends BaseController
{
    public function register($username = '', $password = '', $nickname = '')
    {
        (new UserValidate())->goCheck();
        $user = UserModel::where('username', $username)->find();
        if ($user) {
            throw new UserException();
        }
        $result = (new UserModel())->saveUser($username,$password,$nickname);
        if($result){
            return json(new SuccessMessage(),201);
        }else{
            throw new Exception('注册失败');
        }
    }

    public function login($username = '', $password = ''){
        (new UserValidate())->goCheck();
        $user = UserModel::check($username,$password);
        if(!$user){
            throw new UserException(['msg'=>'帐号密码错误','code'=>404]);
        }
        $user->ip = Request::instance()->ip();
        $user->save();
        return $user;
    }
}