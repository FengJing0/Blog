<?php

namespace app\api\model;

use think\Db;
use think\Exception;

class Collections extends BaseModel
{
    protected $autoWriteTimestamp = true;
    protected $hidden = ['create_time','delete_time','update_time','type_id'];

    public static function getAll($size=10,$page=1){
        return self::with(['type'])->order('create_time desc')
            ->paginate($size,false,['page'=>$page]);
    }

    public function type(){
        return $this->hasOne('Type','id','type_id');
    }

    public function saveNewCollections($title='',$url='',$summary='',$type=0){
        if(!$summary){
            $summary = $title;
        }
        try{
            Db::startTrans();
            $this->title=$title;
            $this->url=$url;
            $this->summary=$summary;
            $this->type_id=$type;
            $this->save();
            Db::commit();
            return $this->id;
        }catch (Exception $e){
            Db::rollback();
            throw $e;
        }
    }
}