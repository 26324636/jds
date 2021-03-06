/*********************************
** 名称:周报输入模块
**
** 作者:钟佳闱
**
** 时间:2019年4月25日
**
** 描述:周报输入
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
    
        window.viewObj = {
			tbData: [{
                id:0,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:1,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:2,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:3,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:4,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:5,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:6,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:7,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:8,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}
                ,{id:9,projectNumber:'',projectName:'',subitemNumber:'',subitemName:''}]
		};


    
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
            , {title: '项目编号',width: 120,fixed: 'left',templet: '#project_num',field:'projectNumber',value:'projectNumber'}
            , {title: '项目名称',width: 120,fixed: 'left',templet: '#project_name',field:'projectName',value:'projectName'}
            , {title: '子项编号',width: 120,fixed: 'left',templet: '#subitem_num',field:'subitemNumber',value:'subitemNumber'}
            , {title: '子项名称',width: 120,fixed: 'left',templet: '#subitem_name',field:'subitemName',value:'subitemName'}
            , {title: '商务总监',width: 120,templet: '#buss_people'}
            , {title: '设计总监',width: 120,templet: '#design_people'}
            , {title: '项目负责人',width: 120,templet: '#project_leader'}
            , {title: '周报维护人',width: 120,templet: '#zhoubao_defend'}
            , {title: '开票/收款银行账户',width: 120,templet: '#inputTpl'}
            , {title: '收款节点',width: 120,templet: '#inputTpl'}
            , {title: '收款情况备注',width: 120,templet: '#inputTpl'}
            , {title: '待开票/开票金额',width: 120,templet: '#inputTpl'}
            , {title: '应收款产生日期',width: 120,templet: '#timeTpl'}
            , {title: '预计开票日期',width: 180,templet: '#timeTpl'}
            , {title: '预计到款日期',width: 140,templet: '#timeTpl'}
            , {title: '实际开票日期',width: 120,templet: '#timeTpl'}
            , {title: '实际到款金额',width: 120,templet: '#inputTpl'}
            , {title: '实际到款日期',width: 120,templet: '#timeTpl'}
            , {title: '收款状态',width: 120,templet: '#inputTpl'}
            , {title: '退票备注',width: 120,templet: '#inputTpl'}
            , {title: '收款可能性预估',width: 120,templet: '#inputTpl'}
            , {title: '开票可能性预估',width: 120,templet: '#inputTpl'}
            , {title: '坏账标签',width: 120,templet: '#inputTpl'}
            , {title: '是否定稿',width: 120,templet: '#inputTpl'}]
        ],
        done: function (res, curr, count) {         
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
            //周报维护人
            $('.zhoubao_defend_cont').each(function (index) {
                $(this).focus(function(){
                    zhoubao_defend(index)
                })
            });
            //加载省
            loadProvince();
            //加载时间表格
            lay('.sign_time').each(function(){ 
                laydate.render({
                  elem: this
                  ,trigger: 'click'
                });
            }); 
            //项目编号改变后保存到缓存
            $('.project_num_cont').each(function (index,v) {
                $(this).change(function(){
                    console.log(v)
                    console.log($(this)[0].dataset.id)
                    console.log(viewObj.tbData)
                    var id = $(this)[0].dataset.id
                    viewObj.tbData[id].projectNumber = $(this)[0].value;
                })
            }); 
            //项目名称改变后保存到缓存
            $('.project_name_cont').each(function (index,v) {
                $(this).change(function(){
                    var id = $(this)[0].dataset.id
                    viewObj.tbData[id].projectName = $(this)[0].value;
                })
            }); 
            //子项编号改变后保存到缓存
            $('.subitem_num_cont').each(function (index,v) {
                $(this).change(function(){
                    var id = $(this)[0].dataset.id
                    viewObj.tbData[id].subitemNumber = $(this)[0].value;
                })
            }); 
            //子项名称改变后保存到缓存
            $('.subitem_name_cont').each(function (index,v) {
                $(this).change(function(){
                    var id = $(this)[0].dataset.id
                    viewObj.tbData[id].subitemName = $(this)[0].value;
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
                , {title: '商务总监',width: 120,templet: '#buss_people'}
                , {title: '设计总监',width: 120,templet: '#design_people'}
                , {title: '项目负责人',width: 120,templet: '#project_leader'}
                , {title: '周报维护人',width: 120,templet: '#zhoubao_defend'}
                , {title: '开票/收款银行账户',width: 120,templet: '#inputTpl'}
                , {title: '收款节点',width: 120,templet: '#inputTpl'}
                , {title: '收款情况备注',width: 120,templet: '#inputTpl'}
                , {title: '待开票/开票金额',width: 120,templet: '#inputTpl'}
                , {title: '应收款产生日期',width: 120,templet: '#timeTpl'}
                , {title: '预计开票日期',width: 180,templet: '#timeTpl'}
                , {title: '预计到款日期',width: 140,templet: '#timeTpl'}
                , {title: '实际开票日期',width: 120,templet: '#timeTpl'}
                , {title: '实际到款金额',width: 120,templet: '#inputTpl'}
                , {title: '实际到款日期',width: 120,templet: '#timeTpl'}
                , {title: '收款状态',width: 120,templet: '#inputTpl'}
                , {title: '退票备注',width: 120,templet: '#inputTpl'}
                , {title: '收款可能性预估',width: 120,templet: '#inputTpl'}
                , {title: '开票可能性预估',width: 120,templet: '#inputTpl'}
                , {title: '坏账标签',width: 120,templet: '#inputTpl'}
                , {title: '是否定稿',width: 120,templet: '#inputTpl'}]
            ],
            data : oldData
        });
    })
    //商务总监弹出选择框
    function buss_people(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.buss_people_cont',
            page:true,
            // checkedKey: 'id',
            table: {
                url: layui.setter.base + 'json/yuebao/buss_people.js',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'id', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '员工编号',width: 100,height: 25},
                    { field: 'company', title: '员工编号',width: 100,height: 25},
                    { field: 'department', title: '员工编号',width: 100,height: 25},
                    { field: 'keyInfo', title: '员工编号',width: 140,height: 25}
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
            table: {
                url: layui.setter.base + 'json/yuebao/buss_people.js',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'id', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '员工编号',width: 100,height: 25},
                    { field: 'company', title: '员工编号',width: 100,height: 25},
                    { field: 'department', title: '员工编号',width: 100,height: 25},
                    { field: 'keyInfo', title: '员工编号',width: 140,height: 25}
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
            table: {
                url: layui.setter.base + 'json/yuebao/buss_people.js',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'id', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '员工编号',width: 100,height: 25},
                    { field: 'company', title: '员工编号',width: 100,height: 25},
                    { field: 'department', title: '员工编号',width: 100,height: 25},
                    { field: 'keyInfo', title: '员工编号',width: 140,height: 25}
                ]]
            },
            done: function (elem, data) {
                elem[index].value = data.data[0].name;
            }
        })
    }
    //月报维护人弹出选择框
     //商务总监弹出选择框
     function zhoubao_defend(index){
        var tableSelect = layui.tableSelect;
        tableSelect.render({
            elem: '.zhoubao_defend_cont',
            page:true,
            // checkedKey: 'id',
            table: {
                url: layui.setter.base + 'json/yuebao/buss_people.js',
                cols: [[
                    { type: 'numbers',title: 'No.'},
                    { field: 'id', title: '员工编号',width: 100,height: 25},
                    { field: 'name', title: '员工编号',width: 100,height: 25},
                    { field: 'company', title: '员工编号',width: 100,height: 25},
                    { field: 'department', title: '员工编号',width: 100,height: 25},
                    { field: 'keyInfo', title: '员工编号',width: 140,height: 25}
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