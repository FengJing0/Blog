<?php

namespace app\api\controller\v1;


use app\api\controller\BaseController;
use app\api\model\Blog as BlogModel;
use app\api\model\Collections as CollectionsModel;
use app\api\service\Token as TokenService;
class Index extends BaseController
{
    public function index(){
        return TokenService::generateToken();
    }

    public function home(){
        $BlogList = BlogModel::getBlogByPage();
        $CollectionsList=CollectionsModel::getAll();
        if($CollectionsList->isEmpty()){
            $CollectionsList = [];
        }
        if($BlogList->isEmpty()){
            $BlogList = [];
        }
        $ArchivesList=[];
        return [
            'BlogList'=>$BlogList,
            'ArchivesList'=>['data'=>$ArchivesList],
            'CollectionsList'=>$CollectionsList,
        ];
    }
}