<?php

namespace app\index\controller;
use think\Db;
class User
{
	//登录
	public function login(){
		$username = $_GET['username'];
		$password = $_GET['password'];
				$data['code'] = '200';
				$user = db('tb_user')->where('number',$username)->find();
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

		$user = db('tb_user') -> where('number',$username) ->find();
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

		$password = $_GET['new_pass'];

		$re= db('tb_user') -> where('number',$username) ->update(['pwd' => $password]);

		$data['code'] = '200';
		$data['status'] = $re;
		echo json_encode($data);
	}
}
