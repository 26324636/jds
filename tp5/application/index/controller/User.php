<?php

namespace app\index\controller;
use think\Db;
class User
{
    public function login(){
		$username = $_GET['username'];
		$password = $_GET['password'];
        $data['code'] = '200';
        $user = Db::table('tb_user')->where('number',$username)->find();
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

    
}
