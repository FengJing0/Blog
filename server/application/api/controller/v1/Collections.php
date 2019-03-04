<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use app\api\validate\CollectionsValidate;
use app\api\model\Collections as CollectionsModel;
use app\lib\exception\CollectionsException;
use app\lib\exception\SuccessMessage;
use think\Exception;

class Collections extends BaseController
{
    public function getAll(){
        return CollectionsModel::getAll();
    }

    public function addCollections($title='',$url='',$summary='',$category=0){
        (new CollectionsValidate())->goCheck();
        $collectionsModel = new CollectionsModel();
        $result = $collectionsModel->where('url','=',$url)->find();
        if($result){
           throw new CollectionsException();
        }
        $collectionsId = $collectionsModel->saveNewCollections($title,$url,$summary,$category);
        if(!$collectionsId){
            throw new Exception('保存出错');
        }
        return new SuccessMessage();
    }
}