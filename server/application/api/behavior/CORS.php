<?php

namespace app\api\behavior;


class CORS
{
    public function appInit(&$params){
        header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Headers: authorization,token,Origin,x-Requested-With,Content-Type,Accept');
        header('Access-Control-Allow-Methods:POST,GET');
        if(request()->isOptions()){
            exit();
        }
    }
}