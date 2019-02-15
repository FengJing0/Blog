<?php

namespace app\api\model;

class Blog extends BaseModel
{
    protected $autoWriteTimestamp = true;
    protected $hidden = ['delete_time','update_time'];

    public static function getBlogByPage($page=1,$size=10){
        return self::with('category')->order('create_time desc')
            ->paginate($size,false,['page'=>$page]);
    }

    public function category(){
        return $this->belongsToMany('Category','blog_category','category_id','blog_id');
    }

    public static function getBlogWithCategory($id){
        return self::with('category')->find($id);
    }

    public static function getBlogById($id){
        return self::where('id','=',$id)->find();
    }

}