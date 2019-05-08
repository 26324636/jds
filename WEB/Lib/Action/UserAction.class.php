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
	
}


?>