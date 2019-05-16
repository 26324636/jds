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

    //获取项目等级
    public function xmdj_list(){
        $xmdj = db('s_yb_xmdj') -> select();

        $arr['code'] = '0';
        $arr['data'] = $xmdj;

        echo json_encode($arr);
    }
    //获取合同签订状态
    public function htqdzt_list(){
        $htqdzt = db('s_yb_htqdzt') -> select();

        $arr['code'] = '0';
        $arr['data'] = $htqdzt;

        echo json_encode($arr);
    }
    //获取产值前置面积类型
    public function czqzmjlx_list(){
        $czqzmjlx = db('s_yb_czqzmjlx') -> select();

        $arr['code'] = '0';
        $arr['data'] = $czqzmjlx;

        echo json_encode($arr);
    }
     //获取结构超限
     public function jgcx_list(){
        $jgcx = db('s_yb_jgcx') -> select();

        $arr['code'] = '0';
        $arr['data'] = $jgcx;

        echo json_encode($arr);
    }
    //获取收款切分项目类型
    public function skqfxmlx_list(){
        $skqfxmlx = db('s_yb_skqfxmlx') -> select();

        $arr['code'] = '0';
        $arr['data'] = $skqfxmlx;

        echo json_encode($arr);
    }
    //获取设计阶段组成
    public function sjjdzc_list(){
        $sjjdzc = db('s_yb_sjjdzc') -> select();

        $arr['code'] = '0';
        $arr['data'] = $sjjdzc;

        echo json_encode($arr);
    }
    //获取合同签订公司
    public function htqdgs_list(){
        $htqdgs = db('s_yb_htqdgs') -> select();

        $arr['code'] = '0';
        $arr['data'] = $htqdgs;

        echo json_encode($arr);
    }
    //获取扩初项目类型
    public function kcxmlx_list(){
        $kcxmlx = db('s_yb_kuochulx') -> select();

        $arr['code'] = '0';
        $arr['data'] = $kcxmlx;

        echo json_encode($arr);
    }
    //获取项目进度
    public function xmjd_list(){
        $xmjd = db('s_yb_xmjd') -> select();

        $arr['code'] = '0';
        $arr['data'] = $xmjd;

        echo json_encode($arr);
    }
    //获取项目进度最新
    public function xmjdnew_list(){
        $xmjdnew = db('s_yb_xmjdnew') -> select();

        $arr['code'] = '0';
        $arr['data'] = $xmjdnew;

        echo json_encode($arr);
    }
    //获取参与专业-方案
    public function cyzy_fa_list(){
        $cyzy_fa = db('s_yb_cyzy') -> select();

        $arr['code'] = '0';
        $arr['data'] = $cyzy_fa;

        echo json_encode($arr);
    }
    //获取参与专业-扩初
    public function cyzy_kc_list(){
        $cyzy_kc = db('s_yb_cyzy') -> select();

        $arr['code'] = '0';
        $arr['data'] = $cyzy_kc;

        echo json_encode($arr);
    }
    //获取参与专业-施工图
    public function cyzy_sgt_list(){
        $cyzy_sgt = db('s_yb_cyzy') -> select();

        $arr['code'] = '0';
        $arr['data'] = $cyzy_sgt;

        echo json_encode($arr);
    }
    //获取参与专业-后期
    public function cyzy_hq_list(){
        $cyzy_hq = db('s_yb_cyzy') -> select();

        $arr['code'] = '0';
        $arr['data'] = $cyzy_hq;

        echo json_encode($arr);
    }
    //获取规划景观BUM标记
    public function ghjgbim_list(){
        $ghjgbim = db('s_yb_ghjgbim') -> select();

        $arr['code'] = '0';
        $arr['data'] = $ghjgbim;

        echo json_encode($arr);
    }
}
