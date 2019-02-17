<?php

namespace app\api\service;

use app\api\model\BlogCategory;
use app\api\model\Blog as BlogModel;
use app\lib\exception\BlogException;
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
            $blog = $this->saveBlog($blog);

            $blogId = $blog->id;

            $this->saveBlogCategory($blogId);

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
            if(!$blog){
                throw new BlogException();
            }
            $this->saveBlog($blog);

            BlogCategory::deleteBlogCategoryByBlogId($id);

            $this->saveBlogCategory($id);

            Db::commit();

            return $blog;
        } catch (Exception $e) {
            Db::rollback();
            throw $e;
        }
    }

    protected function saveBlog(&$blog){
        $blog->title = $this->title;
        $blog->content = $this->content;
        $blog->gist = $this->gist;
        $blog->save();
        return $blog;
    }

    protected function saveBlogCategory($id){
        $b_c = [];
        foreach ($this->category as $c) {
            array_push($b_c, ['category_id' => $c, 'blog_id' => $id]);
        }
        $blogCategory = new BlogCategory();
        $blogCategory->saveAll($b_c);
    }
}