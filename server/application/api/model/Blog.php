<?php

namespace app\api\model;

class Blog extends BaseModel
{
    protected $autoWriteTimestamp = true;
    protected $hidden = ['delete_time','update_time'];

    public static function getBlogByPage($page=1,$size=10){
        return self::order('create_time desc')
            ->paginate($size,false,['page'=>$page]);
    }

}