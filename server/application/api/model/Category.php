<?php

namespace app\api\model;

class Category extends BaseModel
{
    protected $autoWriteTimestamp = true;
    protected $hidden = ['create_time','delete_time','update_time','pivot'];
}