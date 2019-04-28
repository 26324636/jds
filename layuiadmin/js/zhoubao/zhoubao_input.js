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
    //加载表格数据
    table.render({
        elem: '#test-table-fixed',
        url: layui.setter.base + 'json/table/people.js',
        width: admin.screen() > 1 ? '' : '',
        height: '',
        page: false,
        cols: [
            [{title: '序号',
                type: 'numbers',
                fixed: 'left'
            }, {
                title: '项目编号',
                width: 120,
                fixed: 'left',
                templet: '#test-table-inputTpl'
            }, {
                title: '项目名称',
                width: 120,
                fixed: 'left',
                templet: '#test-table-inputTpl'
            }, {
                title: '子项编号',
                width: 120,
                fixed: 'left',
                templet: '#test-table-inputTpl'
            }, {
                title: '子项名称',
                width: 120,
                fixed: 'left',
                templet: '#test-table-inputTpl'
             }, {
                title: '商务总监',
                width: 120,
                templet: '#buss_people'
            }, {
                title: '设计总监',
                width: 120,
                templet: '#design_people'
            }, {
                title: '项目负责人',
                width: 120,
                templet: '#project_leader'
            }, {
                title: '周报维护人',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '开票/收款银行账户',
                width: 120,
                templet: '#project_source'
            }, {
                title: '收款节点',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '收款情况备注',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '待开票/开票金额',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '应收款产生日期',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '预计开票日期',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '预计到款日期',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '实际开票日期',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '实际到款金额',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '实际到款日期',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '收款状态',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '退票备注',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '收款可能性预估',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '开票可能性预估',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '坏账标签',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '是否定稿',
                width: 120,
                templet: '#test-table-inputTpl'
            }]
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
            $('.buss_people_cont').each(function (index) {
                $(this).focus(function(){
                    buss_people(index)
                })
            });
            $('.design_people_cont').each(function (index) {
                $(this).focus(function(){
                    design_people(index)
                })
            });
            $('.project_leader_cont').each(function (index) {
                $(this).focus(function(){
                    project_leader(index)
                })
            });
            loadProvince() //加载省
            //加载时间表格
            lay('.sign_time').each(function(){ 
                laydate.render({
                  elem: this
                  ,trigger: 'click'
                });
              }); 
            
            
        }
    });
    
    //商务总监弹出选择框,使用和月报相同的数据源
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
    //设计总监弹出选择框,使用和月报相同的数据源
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
    //项目负责人弹出选择框,使用和月报相同的数据源
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