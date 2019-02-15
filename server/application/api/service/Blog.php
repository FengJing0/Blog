<?php

namespace app\api\service;

use app\api\model\BlogCategory;
use app\api\model\Blog as BlogModel;
use think\Db;
use think\Exception;

class Blog
{
    protected $content;

    protected $title;

    protected $category;

    protected $gist;

    public function place($title = '', $content = '', $category = [], $gist = '')
    {
        $this->content = $content;
        $this->title = $title;
        $this->category = $category;
        $this->gist = $gist;

        $this->handleGist();

        return $this->createBlog();
    }

    public function update($title, $content = '', $category = [], $gist = '',$id){
        $this->content = $content;
        $this->title = $title;
        $this->category = $category;
        $this->gist = $gist;

        $this->handleGist();

        return $this->updateBlog($id);
    }

    protected function handleGist()
    {
        if (!$this->gist) {
            $matches = array();
            preg_match('/>(.*)[\r\n]/', $this->content, $matches);
            if($matches){
            $this->gist = $matches[1] ? $matches[1] : $matches[0];
            }else{
                $this->gist='';
            }
        }
    }

    protected function createBlog()
    {
        Db::startTrans();
        try {
            $blog = new BlogModel();
            $blog->content = $this->content;
            $blog->title = $this->title;
            $blog->gist = $this->gist;

            $blog->save();

            $blogId = $blog->id;

            $b_c = [];
            foreach ($this->category as $c) {
                array_push($b_c, ['category_id' => $c, 'blog_id' => $blogId]);
            }
            $blogCategory = new BlogCategory();
            $blogCategory->saveAll($b_c);
            Db::commit();

            return $blogId;
        } catch (Exception $e) {
            Db::rollback();
            throw $e;
        }
    }

    protected function updateBlog($id){
        Db::startTrans();
        try {
            $blog = BlogModel::getBlogById($id);


            $b_c = [];
//            foreach ($this->category as $c) {
//                array_push($b_c, ['category_id' => $c, 'blog_id' => $blogId]);
//            }
//            $blogCategory = new BlogCategory();
//            $blogCategory->saveAll($b_c);
            Db::commit();

            return $blog;
        } catch (Exception $e) {
            Db::rollback();
            throw $e;
        }
    }
}