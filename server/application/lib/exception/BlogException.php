<?php

namespace app\lib\exception;


class BlogException extends BaseException
{
    public $code = 404;
    public $msg = '该博客不存在，请检测参数';
    public $errorCode = 50000;
}