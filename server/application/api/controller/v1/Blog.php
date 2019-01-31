<?php

namespace app\api\controller\v1;

use app\api\model\Blog as BlogModel;
use app\api\validate\BlogValidate;
use app\lib\exception\BlogException;
class Blog
{
    public function getAll(){
        $blogs = BlogModel::all();
        if($blogs->isEmpty()){
            throw new BlogException();
        }
        return $blogs;
    }

    public function addBlog($content='',$category=[]){
        (new BlogValidate())->goCheck();
        $category = join(',',$category);
        return ['content'=>$content,'category' => $category];
    }
}