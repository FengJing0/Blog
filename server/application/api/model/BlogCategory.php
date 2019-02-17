<?php

namespace app\api\model;

class BlogCategory extends BaseModel
{
    public static function getBlogCategoryByBlogId($id){
        return self::where('blog_id','=',$id)->select();
    }

    public static function deleteBlogCategoryByBlogId($id){
        return self::where('blog_id',$id)->delete();
    }
}