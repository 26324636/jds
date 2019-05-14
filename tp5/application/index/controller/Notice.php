<?php

namespace app\index\controller;
use think\Db;
use app\index\controller\Base;  
class Notice extends Base
{
	//登录
	public function notice_list(){
        //判断是否是管理员
        if(!Base::is_admin()){
            echo '您不是管理员，暂无权限';
            exit;
        }
        //判断是否是GET请求
        if(request()->isGet()){
            $notice = db('tb_notice');
            $count = $notice -> count();
            $page = $_GET['page'];
            $limit = $_GET['limit'];

            //分页
            $list = $notice->page($page,$limit)->order('input_time desc')->select();
            $arr['code'] = '0';
            $arr['data'] = $list;
            $arr['count'] = $count;
            echo json_encode($arr);
        }
	}
	
}
