<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use app\api\validate\UserValidate;
use app\api\model\User as UserModel;
class User extends BaseController
{
    public function register($username='',$password=''){
        (new UserValidate())->goCheck();
        $result = UserModel::where('username',$username)->find();
        return $result;
    }
}