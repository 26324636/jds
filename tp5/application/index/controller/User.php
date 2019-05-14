<?php

namespace app\index\controller;
use think\Db;
use think\Cache;
class User
{
	//登录
	public function login(){
		$username = $_GET['username'];
		$password = $_GET['password'];

		$data['code'] = '200';
		//判断用户是否存在
		$user = db('tb_user') ->where('number',$username)->find();
		if($user == ''){
			$data['status'] = -1;
		}
		else{
			//对比密码
			if($password == $user['pwd']){
				$data['status'] = 1;
				$userinfo = db('tb_user') ->where('number',$username) ->field('pwd',true) ->find() ;
				$data['userinfo'] = $userinfo;

				//登录后设置缓存
				cache('user', $user, 3600);
			}
			else{
				$data['status'] = 0;
			}
		}
		echo json_encode($data);
	}
	//退出登录清空缓存
	public function login_out(){
		cache('user', NULL);
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
