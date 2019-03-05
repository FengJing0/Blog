<?php

namespace app\api\controller\v1;


use app\api\controller\BaseController;
use app\api\validate\CollectionsValidate;
use app\api\model\Demo as DemoModel;
use app\lib\exception\CollectionsException;
use app\lib\exception\SuccessMessage;
use think\Exception;
class Demo extends BaseController
{
    protected $beforeActionList = [
        'checkRootScope' => ['only'=>'addDemo'],
    ];

    public function getAll(){
        return DemoModel::getAll();
    }

    public function addDemo($title='',$url='',$summary='',$category=0){
        (new CollectionsValidate())->goCheck();
        $demoModel = new DemoModel();
        $result = $demoModel->where('url','=',$url)->find();
        if($result){
            throw new CollectionsException();
        }
        $collectionsId = $demoModel->saveNewDemo($title,$url,$summary,$category);
        if(!$collectionsId){
            throw new Exception('保存出错');
        }
        return new SuccessMessage();
    }
}