<?php

namespace app\index\controller;  
use think\Controller;  
use think\Cache;
class Base extends Controller
{
    //判断登录的是否是管理员
    public function is_admin(){
        $user =  cache('user');
        if($user['authority'] === 0 ){
            return true;
        }else{
            return false;
        }
    }
}
