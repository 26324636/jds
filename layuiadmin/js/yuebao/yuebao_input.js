/*********************************
** 名称:月报输入模块
**
** 作者:钟佳闱
**
** 时间:2019年4月25日
**
** 描述:月报输入

** 内容：
    序号
    项目编号 xmbh
    项目名称 xmmc
    子项编号 zxbh
    子项名称 zxmc 
    商务总监 swzj
    设计总监 sjzj
    项目负责人 xmfzr
    月报维护人 ybwhr
    项目来源 xmly
    省份 province
    城市 city
    项目等级 xmdj
    合同签订状态 htqdzt
    合同签订时间 htqdsj
    合同建筑面积数 htjzmjs
    合同建筑面积单位 htjzmjdw
    产值前置面积类型 czqzmjlx
    产值前置面积(万方) czqzmj
    子项原始合同额(万) zxyshte
    子项合同结算额(万) zxhtzse
    周报合同额汇总
    合同额对比
    子项外包合同额(万) zxwbhte
    结构超限 jgcx
    收款切分项目类型 skqfxmlx
    设计阶段组成 sjjdzc
    合同签订公司 htqdgs
    拓展公司 tzgs
    是单专业/全专业扩初项目 kcxmlx
    方案扩初二合一报批 fakcehybp
    项目进度 xmjd
    项目进度-新 xmjdnew
    起始日期-方案 qsrq_fa
    终止日期-方案 zzrq_fa
    参与专业-方案 cyzy_fa
    起始日期-扩初 qsrq_kc
    终止日期-扩初 zzrq_kc
    参与专业-扩初 cyzy_kc
    起始日期-施工图 qsrq_sgt
    终止日期-施工图 zzrq_sgt
    参与专业-施工图cyzy_sgt
    起始日期-后期 qsrq_hq
    终止日期-后期 zzrq_hq
    参与专业-后期 cyzy_hq
    规划景观BIM标记 ghjgbim
    截止上年年末已完成工作量比例--方案 jzsbnmywcgzlbl_fa
    截止上年年末已完成工作量比例--扩初 jzsbnmywcgzlbl_kc
    截止上年年末已完成工作量比例--施工图 jzsbnmywcgzlbl_sgt
    截止上年年末已完成工作量比例--后期服务 jzsbnmywcgzlbl_hqfw
    累计至提报日期已完成工作量比例--方案 ljztbrqywcgzlbl_fa
    累计至提报日期已完成工作量比例--扩初 ljztbrqywcgzlbl_kc
    累计至提报日期已完成工作量比例--施工图 ljztbrqywcgzlbl_sgt
    累计至提报日期已完成工作量比例--后期服务 ljztbrqywcgzlbl_hqfw
    本年预计完成合同额判断标准 bnyjwchtepdbz
    预计至本年年末可完成工作量比例--方案 yjzbnmkwcgzlbl_fa
    预计至本年年末可完成工作量比例--扩初 yjzbnmkwcgzlbl_kc
    预计至本年年末可完成工作量比例--施工图 yjzbnmkwcgzlbl_sgt
    预计至本年年末可完成工作量比例--后期服务 yjzbnmkwcgzlbl_hqfw
    是否长期暂停 sfcqzt
    青岛项目是否做供暖 qdxmsfzgn
    专业负责人-建筑-扩初及以后阶段 zyfzr_jz_kc
    专业负责人-结构 zyfzr_jg
    专业负责人-给排水 zyfzr_gps
    专业负责人-电气 zyfzr_dq
    专业负责人-暖通 zyfzr_nt
    周报维护人 zbwhr
    待收款已开票 dskykp
    待收款待开票 dskdkp
    未到收款节点 wdskjd
    往年已收款 wnysk
    当年已收款 dnysk
    收款总额 skze
    辅运营 fyy
**********************************/
var $, admin, table, layer, laydate, form;
layui.config({
    base: '../../layuiadmin/' //静态资源所在路径
}).extend({
    index: 'lib/index' //主入口模块
}).use(['index', 'table', 'form','laydate'], function () {
    $ = layui.$,
        admin = layui.admin,
        table = layui.table,
        layer = layui.layer,
        laydate = layui.laydate,
        form = layui.form;
        form.render();

        var tbData = [];
        for(var i = 0 ; i < 10 ; i ++){
            tbData.push({
                id:i,
                xmbh:'',
                xmmc:'',
                zxbh:'',
                zxmc:'',
                swzj:'',
                sjzj:'',
                xmfzr:'',
                ybwhr:'',
                xmly:'',
                province:'',
                city:'',
                xmdj:'',
                htqdzt:'',
                htqdsj:'',
                htqdsj:'',
                htjzmjs:'',
                htjzmjdw:'',
                czqzmjlx:'',
                czqzmj:'',
                zxyshte:'',
                zxhtjse:'',
                zxwbhte:'',
                jgcx:'',
                skqfxmlx:'',
                sjjdzc:'',
                htqdgs:'',
                tzgs:'',
                kcxmlx:'',
                fakcehybp:'',
                xmjd:'',
                xmjdnew:'',
                qsrq_fa:'',
                zzrq_fa:'',
                cyzy_fa:'',
                qsrq_kc:'',
                zzrq_kc:'',
                cyzy_kc:'',
                qsrq_sgt:'',
                zzrq_sgt:'',
                cyzy_sgt:'',
                qsrq_hq:'',
                zzrq_hq:'',
                cyzy_hq:'',
                ghjgbim:'',
                jzsbnmywcgzlbl_fa:'',
                jzsbnmywcgzlbl_kc:'',
                jzsbnmywcgzlbl_sgt:'',
                jzsbnmywcgzlbl_hqfw:'',
                ljztbrqywcgzlbl_fa:'',
                ljztbrqywcgzlbl_kc:'',
                ljztbrqywcgzlbl_sgt:'',
                ljztbrqywcgzlbl_hqfw:'',
                bnyjwchtepdbz:'',
                yjzbnmkwcgzlbl_fa:'',
                yjzbnmkwcgzlbl_kc:'',
                yjzbnmkwcgzlbl_sgt:'',
                yjzbnmkwcgzlbl_hqfw:'',
                sfcqzt:'',
                qdxmsfzgn:'',
                zyfzr_jz_kc:'',
                zyfzr_jg:'',
                zyfzr_gps:'',
                zyfzr_dq:'',
                zyfzr_nt:'',
                zbwhr:'',
                dskykp:'',
                dskdkp:'',
                wdskjd:'',
                wnysk:'',
                dnysk:'',
                skze:'',
                fyy:''
            })
        }
        window.viewObj = {tbData};
        console.log(viewObj.tbData)
        // tbData: [{
        //     id:0,projectNumber:'',projectName:'',subitemNumber:'',subitemName:'',swzj:''}
        //     ,{id:1,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
        //     ,{id:2,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
        //     ,{id:3,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
        //     ,{id:4,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
        //     ,{id:5,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
        //     ,{id:6,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
        //     ,{id:7,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
        //     ,{id:8,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
        //     ,{id:9,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}]

    
    //加载表格数据
    var layTableId = "layTable";
    var hideDetail = true;
    var tableIns = table.render({
        elem: '#test-table-fixed',
        data:viewObj.tbData,
        url:null,
        // url: layui.setter.base + 'json/table/people.js',
        width: admin.screen() > 1 ? '' : '',
        height: '',
        page: false,
        limit:30,
        id: layTableId,
        cols: [
            [{title: '序号',type: 'numbers',fixed: 'left'}
            , {title: '项目编号',width: 120,fixed: 'left',templet: '#project_num',field:'xmbh',value:'xmbh'}
            , {title: '项目名称',width: 120,fixed: 'left',templet: '#project_name',field:'xmmc',value:'xmmc'}
            , {title: '子项编号',width: 120,fixed: 'left',templet: '#subitem_num',field:'zxbh',value:'zxbh'}
            , {title: '子项名称',width: 120,fixed: 'left',templet: '#subitem_name',field:'zxmc',value:'zxmc'}
            , {title: '商务总监',width: 120,templet: '#buss_people'}
            , {title: '设计总监',width: 120,templet: '#design_people'}
            , {title: '项目负责人',width: 120,templet: '#project_leader'}
            , {title: '月报维护人',width: 120,templet: '#yuebao_defend'}
            , {title: '项目来源',width: 220,templet: '#project_source'}
            , {title: '省份',width: 150,templet: '#provinceTpl'}
            , {title: '城市',width: 120,templet: '#cityTpl'}
            , {title: '项目等级',width: 120,templet: '#xmdj'}
            , {title: '合同签订状态',width: 140,templet: '#htqdzt'}
            , {title: '合同签订时间',width: 140,templet: '#htqdsj'}
            , {title: '合同建筑面积数',width: 120,templet: '#htjzmjs'}
            , {title: '合同建筑面积单位',width: 120,templet: '#htjzmjdw'}
            , {title: '产值前置面积类型',width: 150,templet: '#czqzmjlx'}
            , {title: '产值前置面积(万方)',width: 130,templet: '#czqzmj'}
            , {title: '子项原始合同额(万)',width: 130,templet: '#zxyshte'}
            , {title: '子项合同结算额(万)',width: 130,templet: '#zxhtjse'}
            // , {title: '周报合同额汇总',width: 150,templet: '#inputTpl'}
            // , {title: '合同额对比',width: 150,templet: '#inputTpl'}
            , {title: '子项外包合同额(万)',width: 130,templet: '#zxwbhte'}
            , {title: '结构超限',width: 120,templet: '#jgcx'}
            , {title: '收款切分项目类型',width: 140,templet: '#skqfxmlx'}
            , {title: '设计阶段组成',width: 120,templet: '#sjjdzc'}
            , {title: '合同签订公司',width: 140,templet: '#htqdgs'}
            , {title: '拓展公司',width: 130,templet: '#tzgs'}
            , {title: '是单专业/全专业扩初项目',width: 180,templet: '#kcxmlx'}
            , {title: '方案扩初二合一报批',width: 140,templet: '#fakcehybp'}
            , {title: '项目进度',width: 160,templet: '#xmjd'}
            , {title: '项目进度-新',width: 180,templet: '#xmjdnew'}
            , {title: '起始日期-方案',width: 140,templet: '#qsrq_fa'}
            , {title: '终止日期-方案',width: 140,templet: '#zzrq_fa'}
            , {title: '参与专业-方案',width: 120,templet: '#cyzy_fa'}
            , {title: '起始日期-扩初',width: 140,templet: '#qsrq_kc'}
            , {title: '终止日期-扩初',width: 140,templet: '#zzrq_kc'}
            , {title: '参与专业-扩初',width: 120,templet: '#cyzy_kc'}
            , {title: '起始日期-施工图',width: 140,templet: '#qsrq_sgt'}
            , {title: '终止日期-施工图',width: 140,templet: '#zzrq_sgt'}
            , {title: '参与专业-施工图',width: 120,templet: '#cyzy_sgt'}
            , {title: '起始日期-后期',width: 140,templet: '#qsrq_hq'}
            , {title: '终止日期-后期',width: 140,templet: '#zzrq_hq'}
            , {title: '参与专业-后期',width: 120,templet: '#cyzy_hq'}
            , {title: '规划景观BIM标记',width: 120,templet: '#ghjgbim'}
            , {title: '截止上年年末已完成工作量比例--方案',width: 260, templet: '#jzsbnmywcgzlbl_fa'}
            , {title: '截止上年年末已完成工作量比例--扩初',width: 260,templet: '#jzsbnmywcgzlbl_kc'}
            , {title: '截止上年年末已完成工作量比例--施工图',width: 280,templet: '#jzsbnmywcgzlbl_sgt'}
            , {title: '截止上年年末已完成工作量比例--后期服务',width: 280,templet: '#jzsbnmywcgzlbl_hqfw'}
            , {title: '累计至提报日期已完成工作量比例--方案',width: 260,templet: '#ljztbrqywcgzlbl_fa'}
            , {title: '累计至提报日期已完成工作量比例--扩初',width: 260,templet: '#ljztbrqywcgzlbl_kc'}
            , {title: '累计至提报日期已完成工作量比例--施工图',width: 280,templet: '#ljztbrqywcgzlbl_sgt'}
            , {title: '累计至提报日期已完成工作量比例--后期服务',width: 280,templet: '#ljztbrqywcgzlbl_hqfw'}
            , {title: '本年预计完成合同额判断标准',width: 210,templet: '#bnyjwchtepdbz'}
            , {title: '预计至本年年末可完成工作量比例--方案',width: 260,templet: '#yjzbnmkwcgzlbl_fa'}
            , {title: '预计至本年年末可完成工作量比例--扩初',width: 260,templet: '#yjzbnmkwcgzlbl_kc'}
            , {title: '预计至本年年末可完成工作量比例--施工图',width: 280,templet: '#yjzbnmkwcgzlbl_sgt'}
            , {title: '预计至本年年末可完成工作量比例--后期服务',width: 280,templet: '#yjzbnmkwcgzlbl_hqfw'}
            , {title: '是否长期暂停',width: 120,templet: '#sfcqzt'}
            , {title: '青岛项目是否做供暖',width: 140,templet: '#qdxmsfzgn'}
            , {title: '专业负责人-建筑-扩初及以后阶段',width: 220,templet: '#zyfzr_jz_kc'}
            , {title: '专业负责人-结构',width: 120,templet: '#zyfzr_jg'}
            , {title: '专业负责人-给排水',width: 120,templet: '#zyfzr_gps'}
            , {title: '专业负责人-电气',width: 120,templet: '#zyfzr_dq'}
            , {title: '专业负责人-暖通',width: 120,templet: '#zyfzr_nt'}
            , {title: '周报维护人',width: 120,templet: '#zbwhr'}
            , {title: '待收款已开票',width: 120,templet: '#dskykp'}
            , {title: '待收款待开票',width: 120,templet: '#dskdkp'}
            , {title: '未到收款节点',width: 120,templet: '#wdskjd'}
            , {title: '往年已收款',width: 120,templet: '#wnysk'}
            , {title: '当年已收款',width: 120,templet: '#dnysk'}
            , {title: '收款总额',width: 120,templet: '#skze'}
            , {title: '辅运营',width: 120,templet: '#fyy'}]
        ],
        done: function (res, curr, count) { 
            //动态监听表头高度变化，冻结行跟着改变高度
            $(".layui-table-header  tr").resize(function(){
                $(".layui-table-header  tr").each(function (index ,val) {
                    $($(".layui-table-fixed .layui-table-header table tr")[index]).height($(val).height());
                });  
            });
            //初始化高度，使得冻结行表头高度一致
            $(".layui-table-header  tr").each(function (index ,val) {
                $($(".layui-table-fixed .layui-table-header table tr")[index]).height($(val).height());
            });  
                  
            $('.layui-table th').css({
                'color': '#5792c6',
                'font-weight': 'bold'
            })
            $('.layui-table-fixed th').css({
                'color': 'green',
                'font-weight': 'bold'
            })
            //商务总监
            $('.buss_people_cont').each(function (index) {
                $(this).focus(function(){
                    buss_people(index)
                })
            });
            //设计总监
            $('.design_people_cont').each(function (index) {
                $(this).focus(function(){
                    design_people(index)
                })
            });
            //项目负责人
            $('.project_leader_cont').each(function (index) {
                $(this).focus(function(){
                    project_leader(index)
                })
            });
            //月报维护人
            $('.yuebao_defend_cont').each(function (index) {
                $(this).focus(function(){
                    yuebao_defend(index)
                })
            });
            //专业负责人-建筑-扩初及以后阶段
            $('.zyfzr_jz_kc_cont').each(function (index) {
                $(this).focus(function(){
                    zyfzr_jz_kc(index)
                })
            });
             //专业负责人-结构
             $('.zyfzr_jg_cont').each(function (index) {
                $(this).focus(function(){
                    zyfzr_jg(index)
                })
            });
            //专业负责人-给排水
            $('.zyfzr_gps_cont').each(function (index) {
                $(this).focus(function(){
                    zyfzr_gps(index)
                })
            });
            //专业负责人-电气
            $('.zyfzr_dq_cont').each(function (index) {
                $(this).focus(function(){
                    zyfzr_dq(index)
                })
            });
            //专业负责人-暖通
            $('.zyfzr_nt_cont').each(function (index) {
                $(this).focus(function(){
                    zyfzr_nt(index)
                })
            });
            loadXmly(); //加载项目来源
            loadProvince(); //加载省
            loadXmdj(); //加载项目等级
            loadHtqdzt(); //加载合同签订状态
            loadHtqdsj(); //加载合同签订时间
            laodCzqzmjlx(); //加载产值前置面积类型
            loadJgcx(); //加载结构超限
            laodSkqfxmlx(); //加载收款切分项目类型
            laodSjjdzc(); //加载设计阶段组成
            loadHtqdgs(); //加载合同签订公司
            loadTzgs(); //加载拓展公司
            loadKcxmlx(); //加载扩初项目类型
            loadXmjd(); //加载项目进度
            loadXmjdnew(); //加载项目进度最新
            loadQsrq_fa(); //加载起始日期-方案
            loadZzrq_fa(); //加载终止日期-方案
            loadCyzy_fa(); //加载参与专业-方案
            loadQsrq_kc(); //加载起始日期-扩初
            loadZzrq_kc(); //加载终止日期-扩初
            loadCyzy_kc(); //加载参与专业-扩初
            loadQsrq_sgt(); //加载起始日期-施工图
            loadZzrq_sgt(); //加载终止日期-施工图
            loadCyzy_sgt(); //加载参与专业-施工图
            loadQsrq_hq(); //加载起始日期-后期
            loadZzrq_hq(); //加载终止日期-后期
            loadCyzy_hq(); //加载参与专业-后期
            loadGhjgbim(); //加载规划景观BIM标记

            //项目编号改变后保存到缓存
            $('.project_num_cont').each(function (index,v) {
                var id = $(this)[0].dataset.id;
                $(this).change(function(){
                    // console.log(v)
                    // console.log($(this)[0].dataset.id)
                    // console.log(viewObj.tbData)
                    var tbtr = $('.layui-table');
                    console.log(tbtr);
                    viewObj.tbData[id].xmbh = $(this)[0].value;
                })
            }); 
            //项目名称改变后保存到缓存
            $('.project_name_cont').each(function (index,v) {
                // console.log($(this));
                var id = $(this)[0].dataset.id;
                // var project_num = viewObj.tbData[id].projectNumber;
                // if(project_num == ""){
                //     // console.log('空的');
                //     $(this)[0].disabled = true;
                // }
                $(this).change(function(){
                    
                    viewObj.tbData[id].xmmc = $(this)[0].value;
                })
            }); 
            //子项编号改变后保存到缓存
            $('.subitem_num_cont').each(function (index,v) {
                $(this).change(function(){
                    var id = $(this)[0].dataset.id
                    viewObj.tbData[id].zxbh = $(this)[0].value;
                })
            }); 
            //子项名称改变后保存到缓存
            $('.subitem_name_cont').each(function (index,v) {
                $(this).change(function(){
                    var id = $(this)[0].dataset.id
                    viewObj.tbData[id].zxmc = $(this)[0].value;
                })
            }); 
            
            
        }
    });

  
   //增加行
    $("#addTable").click(function(){
       var oldData = viewObj.tbData;
       var line_num = $('.line-input')[0].value;
       console.log(line_num);
        console.log(oldData);
        var id = oldData.length;
        var newRow = {id:id, projectNumber:'',projectName:'',subitemNumber:'',subitemName:''};

        if(line_num == ''){
            oldData.push(newRow);
        }else{
            for(var i = 0 ; i < line_num ; i ++){
                oldData.push(newRow);
            }
        }

        tableIns.reload({
            data : oldData
        });
        viewObj.tbData = oldData;
      });
    //显示细节
    $("#showDetail").click(function(){
        hideDetail = !hideDetail;
        if(hideDetail){
            $(this)[0].innerHTML = '显示细节';
        }else{
            $(this)[0].innerHTML = '隐藏细节';
        }
        var oldData = viewObj.tbData;
        console.log(oldData)
        tableIns.reload({
            cols: [
                [{title: '序号',type: 'numbers',fixed: 'left'}
                , {title: '项目编号',width: 120,fixed: 'left',templet: '#project_num',field:'projectNumber',value:'projectNumber'}
                , {title: '项目名称',width: 120,fixed: 'left',templet: '#project_name',field:'projectName',value:'projectName'}
                , {title: '子项编号',width: 120,fixed: 'left',templet: '#subitem_num',field:'subitemNumber',value:'subitemNumber'}
                , {title: '子项名称',width: 120,fixed: 'left',templet: '#subitem_name',field:'subitemName',value:'subitemName'}
                , {title: '商务总监',width: 120,templet: '#buss_people',hide:hideDetail}
                , {title: '设计总监',width: 120,templet: '#design_people',hide:hideDetail}
                , {title: '项目负责人',width: 120,templet: '#project_leader',hide:hideDetail}
                , {title: '月报维护人',width: 120,templet: '#yuebao_defend',hide:hideDetail}
                , {title: '项目来源',width: 220,templet: '#project_source',hide:hideDetail}
                , {title: '省份',width: 150,templet: '#provinceTpl',hide:hideDetail}
                , {title: '城市',width: 120,templet: '#cityTpl',hide:hideDetail}
                , {title: '项目等级',width: 120,templet: '#xmdj',hide:hideDetail}
                , {title: '合同签订状态',width: 140,templet: '#htqdzt',hide:hideDetail}
                , {title: '合同签订时间',width: 140,templet: '#htqdsj',hide:hideDetail}
                , {title: '合同建筑面积数',width: 120,templet: '#htjzmjs',hide:hideDetail}
                , {title: '合同建筑面积单位',width: 120,templet: '#htjzmjdw',hide:hideDetail}
                , {title: '产值前置面积类型',width: 150,templet: '#czqzmjlx',hide:hideDetail}
                , {title: '产值前置面积(万方)',width: 130,templet: '#czqzmj',hide:hideDetail}
                , {title: '子项原始合同额(万)',width: 130,templet: '#zxyshte',hide:hideDetail}
                , {title: '子项合同结算额(万)',width: 130,templet: '#zxhtjse',hide:hideDetail}
                // , {title: '周报合同额汇总',width: 150,templet: '#inputTpl'}
                // , {title: '合同额对比',width: 150,templet: '#inputTpl'}
                , {title: '子项外包合同额(万)',width: 130,templet: '#zxwbhte',hide:hideDetail}
                , {title: '结构超限',width: 120,templet: '#jgcx',hide:hideDetail}
                , {title: '收款切分项目类型',width: 140,templet: '#skqfxmlx',hide:hideDetail}
                , {title: '设计阶段组成',width: 120,templet: '#sjjdzc',hide:hideDetail}
                , {title: '合同签订公司',width: 140,templet: '#htqdgs',hide:hideDetail}
                , {title: '拓展公司',width: 130,templet: '#tzgs',hide:hideDetail}
                , {title: '是单专业/全专业扩初项目',width: 180,templet: '#kcxmlx',hide:hideDetail}
                , {title: '方案扩初二合一报批',width: 140,templet: '#fakcehybp',hide:hideDetail}
                , {title: '项目进度',width: 160,templet: '#xmjd',hide:hideDetail}
                , {title: '项目进度-新',width: 180,templet: '#xmjdnew',hide:hideDetail}
                , {title: '起始日期-方案',width: 140,templet: '#qsrq_fa',hide:hideDetail}
                , {title: '终止日期-方案',width: 140,templet: '#zzrq_fa',hide:hideDetail}
                , {title: '参与专业-方案',width: 120,templet: '#cyzy_fa',hide:hideDetail}
                , {title: '起始日期-扩初',width: 140,templet: '#qsrq_kc',hide:hideDetail}
                , {title: '终止日期-扩初',width: 140,templet: '#zzrq_kc',hide:hideDetail}
                , {title: '参与专业-扩初',width: 120,templet: '#cyzy_kc',hide:hideDetail}
                , {title: '起始日期-施工图',width: 140,templet: '#qsrq_sgt',hide:hideDetail}
                , {title: '终止日期-施工图',width: 140,templet: '#zzrq_sgt',hide:hideDetail}
                , {title: '参与专业-施工图',width: 120,templet: '#cyzy_sgt',hide:hideDetail}
                , {title: '起始日期-后期',width: 140,templet: '#qsrq_hq',hide:hideDetail}
                , {title: '终止日期-后期',width: 140,templet: '#zzrq_hq',hide:hideDetail}
                , {title: '参与专业-后期',width: 120,templet: '#cyzy_hq',hide:hideDetail}
                , {title: '规划景观BIM标记',width: 120,templet: '#ghjgbim',hide:hideDetail}
                , {title: '截止上年年末已完成工作量比例--方案',width: 260, templet: '#jzsbnmywcgzlbl_fa',hide:hideDetail}
                , {title: '截止上年年末已完成工作量比例--扩初',width: 260,templet: '#jzsbnmywcgzlbl_kc',hide:hideDetail}
                , {title: '截止上年年末已完成工作量比例--施工图',width: 280,templet: '#jzsbnmywcgzlbl_sgt',hide:hideDetail}
                , {title: '截止上年年末已完成工作量比例--后期服务',width: 280,templet: '#jzsbnmywcgzlbl_hqfw',hide:hideDetail}
                , {title: '累计至提报日期已完成工作量比例--方案',width: 260,templet: '#ljztbrqywcgzlbl_fa',hide:hideDetail}
                , {title: '累计至提报日期已完成工作量比例--扩初',width: 260,templet: '#ljztbrqywcgzlbl_kc',hide:hideDetail}
                , {title: '累计至提报日期已完成工作量比例--施工图',width: 280,templet: '#ljztbrqywcgzlbl_sgt',hide:hideDetail}
                , {title: '累计至提报日期已完成工作量比例--后期服务',width: 280,templet: '#ljztbrqywcgzlbl_hqfw',hide:hideDetail}
                , {title: '本年预计完成合同额判断标准',width: 210,templet: '#bnyjwchtepdbz'}
                , {title: '预计至本年年末可完成工作量比例--方案',width: 260,templet: '#yjzbnmkwcgzlbl_fa'}
                , {title: '预计至本年年末可完成工作量比例--扩初',width: 260,templet: '#yjzbnmkwcgzlbl_kc'}
                , {title: '预计至本年年末可完成工作量比例--施工图',width: 280,templet: '#yjzbnmkwcgzlbl_sgt'}
                , {title: '预计至本年年末可完成工作量比例--后期服务',width: 280,templet: '#yjzbnmkwcgzlbl_hqfw'}
                , {title: '是否长期暂停',width: 120,templet: '#inputTpl'}
                , {title: '青岛项目是否做供暖',width: 140,templet: '#inputTpl'}
                , {title: '专业负责人-建筑-扩初及以后阶段',width: 260,templet: '#inputTpl'}
                , {title: '专业负责人-结构',width: 120,templet: '#inputTpl'}
                , {title: '专业负责人-给排水',width: 120,templet: '#inputTpl'}
                , {title: '专业负责人-电气',width: 120,templet: '#inputTpl'}
                , {title: '专业负责人-暖通',width: 120,templet: '#inputTpl'}
                , {title: '周报维护人',width: 120,templet: '#inputTpl'}
                , {title: '待收款已开票',width: 120,templet: '#inputTpl'}
                , {title: '待收款待开票',width: 120,templet: '#inputTpl'}
                , {title: '未到收款节点',width: 120,templet: '#inputTpl'}
                , {title: '往年已收款',width: 120,templet: '#inputTpl'}
                , {title: '当年已收款',width: 120,templet: '#inputTpl'}
                , {title: '收款总额',width: 120,templet: '#inputTpl'}
                , {title: '辅运营',width: 120,templet: '#inputTpl'}]
            ],
            data : oldData
        });
    })
    $("#saveBtn").click(function(){
        var oldData = viewObj.tbData;
        console.log(oldData);
    });
    //商务总监弹出选择框
    function buss_people(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.buss_people_cont',
            page:true,
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            table: {
                url: layui.setter.request_url + '/Yuebao/swzj_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
                
            }
        })
    }
    //设计总监弹出选择框
    function design_people(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.design_people_cont',
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            table: {
                url: layui.setter.request_url + '/Yuebao/sjzj_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }
    //项目负责人弹出选择框
    function project_leader(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.project_leader_cont',
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            table: {
                url: layui.setter.request_url + '/Yuebao/xmfzr_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }
    //月报维护人弹出选择框
     function yuebao_defend(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.yuebao_defend_cont',
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            page:true,
            table: {
                url: layui.setter.request_url + '/Yuebao/ybwhr_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }
    //专业负责人-建筑-扩初及以后阶段弹出框选择模板
    function zyfzr_jz_kc(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.zyfzr_jz_kc_cont',
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            page:true,
            table: {
                url: layui.setter.request_url + '/Yuebao/zyfzr_jz_kc_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }

     //专业负责人-结构弹出框选择模板
     function zyfzr_jg(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.zyfzr_jg_cont',
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            page:true,
            table: {
                url: layui.setter.request_url + '/Yuebao/zyfzr_jg_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }
    //专业负责人-给排水弹出框选择模板
    function zyfzr_gps(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.zyfzr_gps_cont',
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            page:true,
            table: {
                url: layui.setter.request_url + '/Yuebao/zyfzr_gps_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }
    //专业负责人-电气弹出框选择模板
    function zyfzr_dq(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.zyfzr_dq_cont',
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            page:true,
            table: {
                url: layui.setter.request_url + '/Yuebao/zyfzr_dq_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }
    //专业负责人-暖通弹出框选择模板
    function zyfzr_nt(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.zyfzr_nt_cont',
            searchKey: 'name',	
	        searchPlaceholder: '名字搜索',
            page:true,
            table: {
                url: layui.setter.request_url + '/Yuebao/zyfzr_nt_list',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'number', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '姓名',width: 100,height: 25},
                    { field: 'corporation', title: '公司',width: 100,height: 25},
                    { field: 'department', title: '部门',width: 100,height: 25},
                    { field: 'keyhint', title: '关键信息',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }
    // function getSelectValue() {   //获取省市县/区在area.js配置的地区编码
    //     var province = document.getElementById("province").value;
    //     var city = document.getElementById("city").value;
    //     var area = document.getElementById("area").value;


    //     alert(province.split('_', 1));
    //     alert(city.split('_', 1));
    //     alert(area);
    // }

    //加载项目来源
    function loadXmly(){
        var xmly = $('.project_source_cont');
        var xmlyHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/xmly_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    xmlyHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                xmly.append(xmlyHtml);
                form.render('select','xmly');
            }
        })

    }
    //加载省
    function loadProvince() {
        var areaData = Area;
        var proHtml = '';
        for (var i = 0; i < areaData.length; i++) {
            proHtml += '<option value="' + areaData[i].provinceCode + '_' + areaData[i].mallCityList.length + '_' + i +'">' + areaData[i].provinceName + '</option>';
        }
        //初始化省数据
        $('.province').append(proHtml);
        form.render();
        form.on('select(province)', function(data) {
            //当前是哪一行的下标
            var currentLine = $(this).closest('tr')[0].dataset.index
            
            // $form.find('select[name=area]').html('<option value="">请选择县/区</option>').parent().hide();
            var value = data.value;
            var d = value.split('_');
            var code = d[0];
            var count = d[1];
            var index = d[2];
            if (count > 0) {
                loadCity(areaData[index].mallCityList,currentLine);
            } else {
                // $('.city').parent().hide();
            }
        });
    }
    //加载市
    function loadCity(citys,currentLine) {
        var cityHtml = '';
        for (var i = 0; i < citys.length; i++) {
            cityHtml += '<option value="' + citys[i].cityCode + '_' + citys[i].mallAreaList.length + '_' + i +'">' + citys[i].cityName + '</option>';
        }
        // $('.city').innerHTML = cityHtml;
        console.log($('.city'))
        $('.city')[currentLine].innerHTML =  cityHtml ;
        // var city = document.getElementsByClassName('.city');
        $('.city').parent().show();
        form.render();
    }
    //加载项目等级
    function loadXmdj(){
        var xmdj = $('.xmdj_cont');
        var xmdjHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/xmdj_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    xmdjHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                xmdj.append(xmdjHtml);
                form.render('select','xmdj');
            }
        })
    }
    //加载合同签订时间
    function loadHtqdsj(){
        lay('.htqdsj_time').each(function(){ 
            laydate.render({
                elem: this
                ,trigger: 'click'
            });
        }); 
    }
    //加载合同签订状态
    function loadHtqdzt(){
        var htqdzt = $('.htqdzt_cont');
        var htqdztHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/htqdzt_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    htqdztHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                htqdzt.append(htqdztHtml);
                form.render('select','htqdzt');
            }
        })
    }
    //加载产值前置面积类型
    function laodCzqzmjlx(){
        var czqzmjlx = $('.czqzmjlx_cont');
        var czqzmjlxHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/czqzmjlx_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    czqzmjlxHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                czqzmjlx.append(czqzmjlxHtml);
                form.render('select','czqzmjlx');
            }
        })
    }
    //加载结构超限
    function loadJgcx(){
        var jgcx = $('.jgcx_cont');
        var jgcxHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/jgcx_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    jgcxHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                jgcx.append(jgcxHtml);
                form.render('select','jgcx');
            }
        })
    }
    //加载收款切分项目类型
    function laodSkqfxmlx(){
        var skqfxmlx = $('.skqfxmlx_cont');
        var skqfxmlxHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/skqfxmlx_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    skqfxmlxHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                skqfxmlx.append(skqfxmlxHtml);
                form.render('select','skqfxmlx');
            }
        })
    }
    //加载设计阶段组成
    function laodSjjdzc(){
        var sjjdzc = $('.sjjdzc_cont');
        var sjjdzcHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/sjjdzc_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    sjjdzcHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                sjjdzc.append(sjjdzcHtml);
                form.render('select','sjjdzc');
            }
        })
    }
    //加载合同签订公司
    function loadHtqdgs(){
        var htqdgs = $('.htqdgs_cont');
        var htqdgsHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/htqdgs_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    htqdgsHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                htqdgs.append(htqdgsHtml);
                form.render('select','htqdgs');
            }
        })
    }
    //加载拓展公司
    function loadTzgs(){
        var tzgs = $('.tzgs_cont');
        var tzgsHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/htqdgs_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    tzgsHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                tzgs.append(tzgsHtml);
                form.render('select','tzgs');
            }
        })
    }
    //加载扩初项目类型
    function loadKcxmlx(){
        var kcxmlx = $('.kcxmlx_cont');
        var kcxmlxHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/kcxmlx_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    kcxmlxHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                kcxmlx.append(kcxmlxHtml);
                form.render('select','kcxmlx');
            }
        })
    }
    //加载项目进度
    function loadXmjd(){
        var xmjd = $('.xmjd_cont');
        var xmjdHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/xmjd_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    xmjdHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                xmjd.append(xmjdHtml);
                form.render('select','xmjd');
            }
        })
    }
    //加载项目进度最新
    function loadXmjdnew(){
        var xmjdnew = $('.xmjdnew_cont');
        var xmjdnewHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/xmjdnew_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    xmjdnewHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                xmjdnew.append(xmjdnewHtml);
                form.render('select','xmjdnew');
            }
        })
    }
    //加载起始日期-方案
    function loadQsrq_fa(){
        lay('.qsrq_fa_time').each(function(){ 
            laydate.render({
            elem: this
            ,trigger: 'click'
            });
        }); 
    }
    //加载终止日期-方案
    function loadZzrq_fa(){
        lay('.zzrq_fa_time').each(function(){ 
            laydate.render({
            elem: this
            ,trigger: 'click'
            });
        }); 
    }
    //加载参与专业-方案
    function loadCyzy_fa(){
        var cyzy_fa = $('.cyzy_fa_cont');
        var cyzy_faHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/cyzy_fa_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    cyzy_faHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                cyzy_fa.append(cyzy_faHtml);
                form.render('select','cyzy_fa');
            }
        })
    }
    //加载起始日期-扩初
    function loadQsrq_kc(){
        lay('.qsrq_kc_time').each(function(){ 
            laydate.render({
            elem: this
            ,trigger: 'click'
            });
        }); 
    }
    //加载终止日期-扩初
    function loadZzrq_kc(){
        lay('.zzrq_kc_time').each(function(){ 
            laydate.render({
            elem: this
            ,trigger: 'click'
            });
        }); 
    }
    //加载参与专业-扩初
    function loadCyzy_kc(){
        var cyzy_kc = $('.cyzy_kc_cont');
        var cyzy_kcHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/cyzy_kc_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    cyzy_kcHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                cyzy_kc.append(cyzy_kcHtml);
                form.render('select','cyzy_kc');
            }
        })
    }
    //加载起始日期-施工图
    function loadQsrq_sgt(){
        lay('.qsrq_sgt_time').each(function(){ 
            laydate.render({
            elem: this
            ,trigger: 'click'
            });
        }); 
    }
    //加载终止日期-施工图
    function loadZzrq_sgt(){
        lay('.zzrq_sgt_time').each(function(){ 
            laydate.render({
            elem: this
            ,trigger: 'click'
            });
        }); 
    }
    //加载参与专业-施工图
    function loadCyzy_sgt(){
        var cyzy_sgt = $('.cyzy_sgt_cont');
        var cyzy_sgtHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/cyzy_sgt_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    cyzy_sgtHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                cyzy_sgt.append(cyzy_sgtHtml);
                form.render('select','cyzy_sgt');
            }
        })
    }
    //加载起始日期-后期
    function loadQsrq_hq(){
        lay('.qsrq_hq_time').each(function(){ 
            laydate.render({
            elem: this
            ,trigger: 'click'
            });
        }); 
    }
    //加载终止日期-后期
    function loadZzrq_hq(){
        lay('.zzrq_hq_time').each(function(){ 
            laydate.render({
            elem: this
            ,trigger: 'click'
            });
        }); 
    }
    //加载参与专业-后期
    function loadCyzy_hq(){
        var cyzy_hq = $('.cyzy_hq_cont');
        var cyzy_hqHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/cyzy_hq_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    cyzy_hqHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                cyzy_hq.append(cyzy_hqHtml);
                form.render('select','cyzy_hq');
            }
        })
    }
    //加载规划景观BIM标记
    function loadGhjgbim(){
        var ghjgbim = $('.ghjgbim_cont');
        var ghjgbimHtml = "";
        $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Yuebao/ghjgbim_list",
            data: {
            },
            async: true,
            success: function(data) {
                var data = JSON.parse(data).data;
                for(var a in data){
                    ghjgbimHtml += "<option value="+data[a].id+">"+data[a].value+"</option>";
                }
                ghjgbim.append(ghjgbimHtml);
                form.render('select','ghjgbim');
            }
        })
    }

  // var buss_people_index = 0; //当前
    // var buss_people_table = {
    //     elem: '#buss-people',
    //     url: layui.setter.base + 'json/yuebao/buss_people.js',
    //     // parseData: function (res) { //res 即为原始返回的数据
    //     //     return {
    //     //         "code": 0, //解析接口状态
    //     //         "msg": "", //解析提示文本
    //     //         "count": 180, //解析数据长度
    //     //         "data": res.list //解析数据列表
    //     //     };
    //     // },
    //     width: admin.screen() > 1 ? '' : '',
    //     title: '部门列表',
    //     page: true,
    //     cols: [
    //         [{
    //             title: 'No.',
    //             type: 'numbers',
    //             width: 50,
    //             height: 25
    //         }, {
    //             title: '员工编号',
    //             width: 100,
    //             height: 25,
    //             field: 'id'
    //         }, {
    //             title: '姓名',
    //             width: 100,
    //             height: 25,
    //             field: 'name'
    //         }, {
    //             title: '公司',
    //             width: 100,
    //             height: 25,
    //             field: 'company'
    //         }, {
    //             title: '部门',
    //             width: 100,
    //             height: 25,
    //             field: 'department'
    //         }, {
    //             title: '关键信息',
    //             width: 100,
    //             height: 25,
    //             field: 'keyInfo'
    //         }]
    //     ],
    //     done: function (res, curr, count) {
    //         $('.people-choose').find('.layui-table').find('tr').on('dblclick', function () {
    //             var index = $(this)[0].dataset.index;
    //             $('.buss_people1')[buss_people_index].value = $(this)[0].childNodes[2].innerText;
    //             layer.close(layer.index);
    //         })
    //     }
    // };

    // “客户”输入框的光标聚焦事件的触发函数， 弹出弹层，弹层上显示所有的客户，以供选择。
    // function depart_input_focus_handler(index) {
    //     buss_people_index = index;
    //     layer.open({
    //         title: '人员选择',
    //         type: 1,
    //         area: ['600px', '550px'],
    //         content: $('#hidden1'),
    //         success: function () {
    //             table.render(buss_people_table);
    //             $('#hidden1').css('display', 'block');
    //         }
    //     });

    // }

});