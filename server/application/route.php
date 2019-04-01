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

Route::get('/','api/v1.Index/index');

Route::get('api/:version/home','api/:version.Index/home');

Route::post('api/:version/upload','api/:version.Upload/index');

Route::post('api/:version/register','api/:version.User/register');
Route::post('api/:version/login','api/:version.User/login');
Route::post('api/:version/verify','api/:version.User/verifyToken');

Route::group('api/:version/category',function(){
    Route::get('/all','api/:version.Category/getAll');
    Route::post('/add','api/:version.Category/addCategory');
});

Route::group('api/:version/blog',function(){
    Route::get('/all','api/:version.Blog/getAll');
    Route::post('/add','api/:version.Blog/addBlog');
    Route::post('/update/:id','api/:version.Blog/updateBlog',[],['id'=>'\d+']);
    Route::get('/:id','api/:version.Blog/getBlogDetail',[],['id'=>'\d+']);
});


Route::group('api/:version/collections',function(){
    Route::get('/all','api/:version.Collections/getAll');
    Route::post('/add','api/:version.Collections/addCollections');
});

Route::group('api/:version/demo',function(){
    Route::get('/all','api/:version.Demo/getAll');
    Route::post('/add','api/:version.Demo/addDemo');
});



//Route::get('api/:version/product/:id','api/:version.Product/getOne',[],['id'=>'\d+']);
//Route::get('api/:version/product/recent','api/:version.Product/getRecent');
//Route::get('api/:version/product/by_category','api/:version.Product/getAllInCategory');

//Route::group('api/:version/product',function(){
//    Route::get('/by_category','api/:version.Product/getAllInCategory');
//    Route::get('/recent','api/:version.Product/getRecent');
//    Route::get('/:id','api/:version.Product/getOne',[],['id'=>'\d+']);
//});

