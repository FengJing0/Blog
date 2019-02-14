<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

use think\Route;

Route::post('api/:version/register','api/:version.User/register');
Route::post('api/:version/login','api/:version.User/login');


Route::get('api/:version/category/all','api/:version.Category/getAll');
Route::post('api/:version/category/add','api/:version.Category/addCategory');

Route::get('api/:version/blog/all','api/:version.Blog/getAll');
Route::post('api/:version/blog/add','api/:version.Blog/addBlog');
Route::get('api/:version/blog/:id','api/:version.Blog/getBlogDetail');

Route::get('api/:version/collections/all','api/:version.Collections/getAll');
Route::post('api/:version/collections/add','api/:version.Collections/addCollections');

//Route::get('api/:version/product/:id','api/:version.Product/getOne',[],['id'=>'\d+']);
//Route::get('api/:version/product/recent','api/:version.Product/getRecent');
//Route::get('api/:version/product/by_category','api/:version.Product/getAllInCategory');

//Route::group('api/:version/product',function(){
//    Route::get('/by_category','api/:version.Product/getAllInCategory');
//    Route::get('/recent','api/:version.Product/getRecent');
//    Route::get('/:id','api/:version.Product/getOne',[],['id'=>'\d+']);
//});

