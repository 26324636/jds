<?php

namespace app\index\controller;
use think\Db;
class Yuebao
{
    //获取商务总监列表
    public function swzj_list(){
        $page = $_GET['page'];
        $limit = $_GET['limit'];
        //判断是否name为空
        $name = empty($_GET['name']) ?"":$_GET['name'];

        //au_user表与tb_user表连接
        $swzj = db('au_user')
         -> alias('a') 
         -> where("_character","swzj_yuebao")
         -> where([
                ['name', 'like','%'.$name.'%']
            ])
         -> leftJoin('tb_user b','a.user_No = b.number')
         -> order('number')
         -> field('number,name,corporation,	department,keyhint');
         
        $count = $swzj ->count();
        $list = $swzj->page($page,$limit)->select();

        $arr['code'] = '0';
        $arr['data'] = $list;
        $arr['count'] = $count;

        echo json_encode($arr);
    }

    //获取设计总监列表
    public function sjzj_list(){
        $page = $_GET['page'];
        $limit = $_GET['limit'];
        //判断是否name为空
        $name = empty($_GET['name']) ?"":$_GET['name'];

        //au_user表与tb_user表连接
        $sjzj = db('au_user')
         -> alias('a') 
         -> where("_character","sjzj_yuebao")
         -> where([
                ['name', 'like','%'.$name.'%']
            ])
         -> leftJoin('tb_user b','a.user_No = b.number')
         -> order('number')
         -> field('number,name,corporation,	department,keyhint');
         
        $count = $sjzj ->count();
        $list = $sjzj->page($page,$limit)->select();

        $arr['code'] = '0';
        $arr['data'] = $list;
        $arr['count'] = $count;

        echo json_encode($arr);
    }

    //获取项目负责人列表
    public function xmfzr_list(){
        $page = $_GET['page'];
        $limit = $_GET['limit'];
        //判断是否name为空
        $name = empty($_GET['name']) ?"":$_GET['name'];

        //au_user表与tb_user表连接
        $xmfzr = db('au_user')
         -> alias('a') 
         -> where("_character","promgr_yuebao")
         -> where([
                ['name', 'like','%'.$name.'%']
            ])
         -> leftJoin('tb_user b','a.user_No = b.number')
         -> order('number')
         -> field('number,name,corporation,	department,keyhint');
         
        $count = $xmfzr ->count();
        $list = $xmfzr->page($page,$limit)->select();

        $arr['code'] = '0';
        $arr['data'] = $list;
        $arr['count'] = $count;

        echo json_encode($arr);
    }

    
    //获取项目负责人列表
    public function ybwhr_list(){
        $page = $_GET['page'];
        $limit = $_GET['limit'];
        //判断是否name为空
        $name = empty($_GET['name']) ?"":$_GET['name'];

        //au_user表与tb_user表连接
        $ybwhr = db('au_user')
         -> alias('a') 
         -> where("_character","yunying_yuebao")
         -> where([
                ['name', 'like','%'.$name.'%']
            ])
         -> leftJoin('tb_user b','a.user_No = b.number')
         -> order('number')
         -> field('number,name,corporation,	department,keyhint');
         
        $count = $ybwhr ->count();
        $list = $ybwhr->page($page,$limit)->select();

        $arr['code'] = '0';
        $arr['data'] = $list;
        $arr['count'] = $count;

        echo json_encode($arr);
    }

    //获取项目来源列表
    public function xmly_list(){
        $xmly = db('s_yb_xmly') -> select();

        $arr['code'] = '0';
        $arr['data'] = $xmly;

        echo json_encode($arr);
    }
}
