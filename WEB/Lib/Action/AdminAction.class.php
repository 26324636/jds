<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

Class AdminAction extends Action{

	//管理员获取所有用户信息
	public function user_list(){
		if(IS_GET){
			$user = M('tb_user');
			$count = $user -> count();
			$page = $_GET['page'];
			$limit = $_GET['limit'];
	
			$list = $user->page($page,$limit)->select();
			$arr['code'] = '0';
			$arr['data'] = $list;
			$arr['count'] = $count;
			echo json_encode($arr);
		}else if(IS_POST){
			$user = M('tb_user'); 
			
			//获取分页和查询的数据
			$page = $_POST['page'];
			$limit = $_POST['limit'];
			$number = $_POST['number'];
	
			$map['number'] =array('like','%'.$number.'%');
			//分页结果
			$result= $user ->where($map)->page($page,$limit)->select();
			//查询分页的数量
			$count = $user ->where($map)->count();

			$arr['code'] = '0';
			$arr['data'] = $result;
			$arr['count'] = $count;
			
			echo json_encode($arr);
		}

	}
	
	//管理员添加用户
	public function user_add(){
		$number = $_POST['number_data'];
		$name = $_POST['name_data'];
		$company = $_POST['company_data'];
		$department = $_POST['department_data'];
		$keyword = $_POST['keyword_data'];

		$data['code'] = '200';
		//判断用户是否存在
		$arr = M('tb_user') -> where("`number` = '$number'") -> find();
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

		$re = M('tb_user') -> add($res);
		$data['status'] = $re;

		echo json_encode($data);

	}

	//获取公司出现不重复集合字段
	public function arr_company(){
		$data['code'] = '200';
		
		$arr = M('tb_user') -> field('corporation') ->distinct(true) ->select();
		$data['company'] = $arr;

		echo json_encode($data);
	}

	//获取部门出现不重复集合字段
	public function arr_department(){
		$data['code'] = '200';
		
		$arr = M('tb_user') -> field('department') ->distinct(true) ->select();
		$data['department'] = $arr;

		echo json_encode($data);
	}

	//管理员删除用户
	public function user_del(){
		$id = $_GET['id_data'];

		$arr=M('tb_user')-> where("id = '$id'") -> delete();

		$data['code'] = '200';
		$data['status'] = $arr;

		echo json_encode($data);
	}

	//管理员编辑，返回某个用户的信息
	public function user_info(){
		$id = $_GET['id_data'];

		$arr=M('tb_user')-> where("id = '$id'") -> select();

		$data['code'] = '200';
		$data['mes'] = $arr;
		echo json_encode($data);
	}

	//管理员编辑，保存某个用户的信息
	public function user_update(){
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

		$re= M('tb_user') -> where("id = '$id'") -> save($res);

		$data['code'] = '200';
		$data['status'] = $re;
		echo json_encode($data);
	}

	//管理员重置某个人的密码
	public  function user_resetPwd(){
		$id = $_POST['id_data'];
		
		$res['pwd'] = '123456';

		$re= M('tb_user') -> where("id = '$id'") -> save($res);

		$data['code'] = '200';
		$data['status'] = $re;
		
		echo json_encode($data);
	}

	//管理员通过账号进行模糊搜索
	public function user_search(){
	
	}

	//管理员登录
	public function login(){
		$username = $_GET['user_data'];
   
		$password = $_GET['password_data'];
		$user = M('admin') -> where("username= '$username'") -> find();

      if($user == ''){
			echo -1;
		}
		else{
			//对比密码
			if($password == $user['password']){
				echo 1;
			}
			else{
				echo 0;
			}
		}
	
	}
	
	//普通用户计数
	public function ptuser_count(){
		// echo "111";
		$arr=M('user')-> where("vip_data = '尚未开通VIP'")->select();

		echo count($arr);
	}

	//普通用户显示
	public function user_show(){
		$arr=M('user')-> where("vip_data = '尚未开通VIP'") ->select();

		echo json_encode($arr);
	}

	//普通用户删除
	public function user_delete(){
		$iid = $_GET['iid_data'];

		$arr=M('user')-> where("id = '$iid'") -> delete();

		echo $arr;
	}
	
	//VIP用户计数
	public function vipuser_count(){
		// echo "111";
		$arr=M('user')-> where("vip_data != '尚未开通VIP'")->select();

		echo count($arr);
	}

	//VIP用户显示
	public function vipuser_show(){
		$arr=M('user')-> where("vip_data != '尚未开通VIP'") ->select();

		echo json_encode($arr);
	}

	//VIP用户删除
	public function vipuser_delete(){
		$iid = $_GET['iid_data'];

		$arr=M('user')-> where("id = '$iid'") -> delete();

		echo $arr;
	}

	//激活码计数	
	public function code_count(){
		// echo "111";
		$arr=M('vip')-> select();

		echo count($arr);
	}

	//激活码显示
	public function code_show(){
		$arr=M('vip') ->select();

		echo json_encode($arr);
	}

	//激活码删除
	public function code_delete(){
		$iid = $_GET['iid_data'];

		$arr=M('vip')-> where("id = '$iid'") -> delete();

		echo $arr;
	}

	// 激活码增加
	public function code_add(){
		$day = $_GET['day_data'];
		$num = $_GET['num_data'];

		
		for ($j=0; $j < $num ; $j++) { 
			srand((double)microtime()*1000000);
			$authnum = '';
			$ychar="0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
			$list=explode(",",$ychar);
			for($i=0;$i<8;$i++){
				$randnum=rand(0,35); // 10+26;
				$authnum.=$list[$randnum];
			}

			$arr['jihuoma'] = $authnum;
			$arr['is_use'] = '0';
			$arr['is_buy'] = '0';
			$arr['day'] = $day;

			$re = M('vip') -> add($arr);
		}
		

		echo $re;
	}

	//订单计数	
	public function order_count(){
		// echo "111";
		$arr=M('dingdan')-> select();

		echo count($arr);
	}

	//订单显示
	public function order_show(){
		$arr=M('dingdan') ->select();

		echo json_encode($arr);
	}

	//订单删除
	public function order_delete(){
		$iid = $_GET['iid_data'];

		$arr=M('dingdan')-> where("id = '$iid'") -> delete();

		echo $arr;
	}

	//反馈计数	
	public function feedback_count(){
		// echo "111";
		$arr=M('fankui')-> select();

		echo count($arr);
	}

	//反馈显示
	public function feedback_show(){
		$arr=M('fankui') ->select();

		echo json_encode($arr);
	}

	//反馈删除
	public function feedback_delete(){
		$iid = $_GET['iid_data'];

		$arr=M('fankui')-> where("id = '$iid'") -> delete();

		echo $arr;
	}
}

?>