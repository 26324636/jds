<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');


Class UserAction extends Action{

	public function test(){
		$user = M('tb_user') -> where("`number` = 'admin' ") ->find();
		echo $user['pwd'];
	}
	//登录
	public function login(){
		$username = $_GET['username'];
		$password = $_GET['password'];
		$data['code'] = '200';
		$user = M('tb_user') -> where("number= '$username'") -> find();
    if($user == ''){
			$data['status'] = -1;
		}
		else{
			//对比密码
			if($password == $user['pwd']){
				$data['status'] = 1;
				$data['userinfo'] = $user;
			}
			else{
				$data['status'] = 0;
			}
		}
		echo json_encode($data);
	
	}

	//确认密码
	public  function queren_pass(){
		$username = $_GET['user_data'];
		$password = $_GET['password_data'];

		$user = M('tb_user') -> where("number = '$username'") ->find();
		$data['code'] = '200';
		if($user == ''){
			$data['status'] = -1;
		}
		else{
			//对比密码
			if($password == $user['pwd']){
				$data['status'] = 1;
			}
			else{
				$data['status'] = 0;
			}
		}
		echo json_encode($data);
	}

	//更改密码
	public function change_pass(){
		$username = $_GET['user_data'];

		$arr['pwd'] = $_GET['new_pass'];

		$re= M('tb_user') -> where("number = '$username'") -> save($arr);

		$data['code'] = '200';
		$data['status'] = $re;
		echo json_encode($data);
	}
    
    //更新资料
	public function update_mes(){
		$username = $_GET['user_data'];

		$data['qq'] = $_GET['qq_data'];
		$data['phone'] = $_GET['phone_data'];
		$data['qianming'] = $_GET[qianming_data];

		$re = M('user') -> where("username = '$username'") -> save($data);

		echo $re;
	}

	//VIP激活
	public function vip_jihuo(){
		$username = $_GET['user_data'];
		$jihuoma = $_GET['jihuoma_data'];

		// $jihuoma = 'a';
		$re = M('vip') -> where("`jihuoma` = '$jihuoma'") -> find();
		$dingdan =M('dingdan') -> where("`code` = '$jihuoma'") -> find();
		// echo $re['day'];
		if($re == ''){
			echo 2;
		}else{
			if($re['is_use'] == '1'){
				echo -1;
			}else{
				$day = $re['day'];
				// echo $day;
				$arr = M('user') -> where("username = '$username'") ->find();
				if($arr['vip_data'] != '尚未开通VIP'){
					$t = $arr['vip_data'];
				}else{
					$t = date("Y-m-d",time());
				}
				// echo $t;
				$arr['vip_data'] = date('Y-m-d',strtotime("{$t} +{$day} day"));
				// echo $arr['vip_data'];
				$data = M('user') -> where("username = '$username'") -> save($arr);
				$re['is_use'] = '1';
				$dingdan['is_use'] = '是';
				M('vip') -> where("`jihuoma` = '$jihuoma'") -> save($re);
				M('dingdan') -> where("`code` = '$jihuoma'") -> save($dingdan);
				echo $data;

			}
		}

	}
	
	//判断是否是VIP
	public function judge_vip(){
		$username = $_GET['user_data'];
		$arr = M('user') -> where("username = '$username'") ->find();
		//echo $arr['password'];
		$t1 = $arr['vip_data'];
		//echo $t1;
		if($t1 == '尚未开通VIP'){
			echo -1;
		}else{
			$t2 = date("Y-m-d",time());
		//echo $t1;
		//echo $t2;
		if(strtotime($t1) - strtotime($t2) < 0){
			echo -1;
		}else{
			echo 1;
		}
		}
		
	}




	
}


?>