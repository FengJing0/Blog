<?php

namespace app\api\controller\v1;

use app\api\model\Blog as BlogModel;
use app\api\validate\BlogValidate;
use app\api\validate\IDMustBePositiveInt;
use app\api\validate\PagingParameter;
use app\lib\exception\BlogException;
use app\api\service\Blog as BlogService;
use think\Exception;

class Blog
{
    public function getAll(){
        $blogs = BlogModel::getBlogByPage();
        if($blogs->isEmpty()){
            throw new BlogException();
        }
        return $blogs;
    }

    public function getAllByPage($page=1){
        (new PagingParameter())->goCheck();
        $blogs = BlogModel::getBlogByPage($page);
        if($blogs->isEmpty()){
            throw new BlogException();
        }
        return $blogs;
    }

    public function addBlog($title='',$content='',$category=[],$gist=''){
        (new BlogValidate())->goCheck();
        $blog = new BlogService();
        $blogId = $blog->place($title,$content,$category,$gist);
        if(!$blogId){
            throw new Exception('创建博客失败');
        }
        return $blogId;
    }

    public function getBlogDetail($id){
        (new IDMustBePositiveInt())->goCheck();
        return $id;
    }
}