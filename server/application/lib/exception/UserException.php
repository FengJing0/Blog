<?php

namespace app\lib\exception;

class UserException extends BaseException
{
    public $code = 403;
    public $msg = '用户已存在';
    public $errorCode = 60000;
}