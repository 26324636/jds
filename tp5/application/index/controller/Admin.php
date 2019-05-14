<?php

namespace app\index\controller;
use think\Db;
use think\Cache;
use app\index\controller\Base;  
class Admin extends Base 
{ 
	//管理员获取所有用户信息
	public function user_list(){
		//判断是否是管理员
		if(!Base::is_admin()){
			echo '您不是管理员，暂无权限';
			exit;
		}
		//判断是否是GET请求
		if(request()->isGet()){
			$user = db('tb_user');
			$count = $user -> count();
			$page = $_GET['page'];
			$limit = $_GET['limit'];

			//分页
			$list = $user->page($page,$limit)->select();
			$arr['code'] = '0';
			$arr['data'] = $list;
			$arr['count'] = $count;
			echo json_encode($arr);
		}else if(request()->isPost()){
			$user = db('tb_user'); 
			
			//获取分页和查询的数据
			$page = $_POST['page'];
			$limit = $_POST['limit'];
			$number = $_POST['number'];
			$name = $_POST['name'];

			//查询模糊搜索
			$result = $user->where([
					['number', 'like','%'.$number.'%'],
					['name', 'like', '%'.$name.'%'],
				])
				->page($page,$limit)->select();
			//查询分页的数量
			$count = $user ->where(([
				['number', 'like','%'.$number.'%'],
				['name', 'like', '%'.$name.'%'],
			]))->count();

			$arr['code'] = '0';
			$arr['data'] = $result;
			$arr['count'] = $count;
			
			echo json_encode($arr);
		}
  }

    //管理员添加用户
	public function user_add(){
		//判断是否是管理员
		if(!Base::is_admin()){
			echo '您不是管理员，暂无权限';
			exit;
		}	
    $db = db('tb_user');
		$number = $_POST['number_data'];
		$name = $_POST['name_data'];
		$company = $_POST['company_data'];
		$department = $_POST['department_data'];
		$keyword = $_POST['keyword_data'];

		$data['code'] = '200';
		//判断用户是否存在
		$arr = $db  -> where("number",$number) -> find();
		if($arr){
			$data['status'] = -1;
			echo json_encode($data);
			exit;
		}
		$res['number'] = $number;
		$res['name'] = $name;
		$res['pwd'] = '123456';
		$res['corporation'] = $company;
		$res['department'] = $department;
		$res['keyhint'] = $keyword;
		$res['authority'] = 3;
		$res['status'] = 1;

		$re = $db -> insert($res);
		$data['status'] = $re;

		echo json_encode($data);

    }
    
    //获取公司出现不重复集合字段
	public function arr_company(){
		$data['code'] = '200';
		
		$arr = db('tb_user') -> field('corporation') ->distinct(true) ->select();
		$data['company'] = $arr;

		echo json_encode($data);
	}

	//获取部门出现不重复集合字段
	public function arr_department(){
		$data['code'] = '200';
		
		$arr = db('tb_user') -> field('department') ->distinct(true) ->select();
		$data['department'] = $arr;

		echo json_encode($data);
    }
    
    
	//管理员删除用户
	public function user_del(){
		//判断是否是管理员
		if(!Base::is_admin()){
			echo '您不是管理员，暂无权限';
			exit;
		}	
		$id = $_GET['id_data'];

		$arr=db('tb_user')-> where("id",$id) -> delete();

		$data['code'] = '200';
		$data['status'] = $arr;

		echo json_encode($data);
    }
    
    //管理员编辑，返回某个用户的信息
	public function user_info(){
		//判断是否是管理员
		if(!Base::is_admin()){
			echo '您不是管理员，暂无权限';
			exit;
		}
		$id = $_GET['id_data'];

		$arr=db('tb_user')-> where("id",$id) -> select();

		$data['code'] = '200';
		$data['mes'] = $arr;
		echo json_encode($data);
    }
    
    //管理员编辑，保存某个用户的信息
	public function user_update(){
		//判断是否是管理员
		if(!Base::is_admin()){
			echo '您不是管理员，暂无权限';
			exit;
		}
		$id = $_POST['id_data'];
		$number = $_POST['number_data'];
		$name = $_POST['name_data'];
		$company = $_POST['company_data'];
		$department = $_POST['department_data'];
		$keyword = $_POST['keyword_data'];

		$res['number'] = $number;
		$res['name'] = $name;
		$res['corporation'] = $company;
		$res['department'] = $department;
		$res['keyhint'] = $keyword;

		$re= db('tb_user') -> where("id",$id) -> update($res);

		$data['code'] = '200';
		$data['status'] = $re;
		echo json_encode($data);
    }
    
    //管理员重置某个人的密码
	public  function user_resetPwd(){
		//判断是否是管理员
		if(!Base::is_admin()){
			echo '您不是管理员，暂无权限';
			exit;
		}
		$id = $_POST['id_data'];
		
		$res['pwd'] = '123456';

		$re= db('tb_user') -> where("id", $id) -> update($res);

		$data['code'] = '200';
		$data['status'] = $re;
		
		echo json_encode($data);
	}

}
