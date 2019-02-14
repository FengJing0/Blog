<?php

namespace app\lib\exception;


class CollectionsException extends BaseException
{
    public $code = 403;
    public $msg = '该收藏已存在,请勿重复添加';
    public $errorCode = 50000;
}