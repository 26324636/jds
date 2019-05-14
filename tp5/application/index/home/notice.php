<?php

namespace app\index\home;
use think\Db;
class Notice
{
	//管理员获取所有用户信息
	public function notice_list(){
		if(request()->isGet()){
			$notice = db('tb_notice');
			$count = $notice -> count();
			$page = $_GET['page'];
			$limit = $_GET['limit'];
	
			$list = $notice->page($page,$limit)->select();
			$arr['code'] = '0';
			$arr['data'] = $list;
			$arr['count'] = $count;
			echo json_encode($arr);
		}else if(request()->isPost()){
			$notice = db('tb_notice'); 
			
			//获取分页和查询的数据
			$page = $_POST['page'];
			$limit = $_POST['limit'];
			$type = $_POST['type'];

            //查询模糊搜索
			$result = $notice->where([
                    ['type', 'like','%'.$type.'%'],
                
                ])
                ->page($page,$limit)->select();
			//查询分页的数量
			$count = $notice ->where(([
                ['type', 'like','%'.$type.'%'],
            ]))->count();

			$arr['code'] = '0';
			$arr['data'] = $result;
			$arr['count'] = $count;
			
			echo json_encode($arr);
        }
    }

}
