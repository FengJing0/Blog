<?php

namespace app\api\model;

use think\Db;
use think\Exception;

class Demo extends BaseModel
{
    protected $autoWriteTimestamp = true;
    protected $hidden = ['create_time','delete_time','update_time','category_id'];

    public static function getAll($size=10,$page=1){
        return self::with(['category'])->order('create_time desc')
            ->paginate($size,false,['page'=>$page]);
    }

    public function category(){
        return $this->hasOne('Category','id','category_id');
    }

    public function saveNewDemo($title='',$url='',$summary='',$category=0){
        if(!$summary){
            $summary = $title;
        }
        try{
            Db::startTrans();
            $this->title=$title;
            $this->url=$url;
            $this->summary=$summary;
            $this->category_id=$category;
            $this->save();
            Db::commit();
            return $this->id;
        }catch (Exception $e){
            Db::rollback();
            throw $e;
        }
    }
}