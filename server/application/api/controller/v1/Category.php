<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use app\api\model\Category as CategoryModel;
use app\api\validate\CategoryValidate;
use app\lib\exception\CategoryException;

class Category extends BaseController
{
    public function getAll(){
        $types = CategoryModel::all();
        if($types->isEmpty()){
            throw new CategoryException();
        }
        return $types;
    }

    public function addCategory($name=''){
        (new CategoryValidate())->goCheck();
        $result = CategoryModel::where('name','=',$name)->find();
        if($result){
            throw new CategoryException([
                'code'=>403,
                'msg'=>'该分类已存在'
            ]);
        }
        $category = new CategoryModel(['name'=>$name]);
        $category->save();

        return $this->getAll();
    }
}