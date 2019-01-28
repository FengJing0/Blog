<?php

namespace app\api\model;

use think\Model;

class BaseModel extends Model
{
    protected $hidden = ['password'];
}