var $, admin, table, layer, laydate, form;
layui.config({
    base: '../../layuiadmin/' //静态资源所在路径
}).extend({
    index: 'lib/index' //主入口模块
}).use(['index', 'table', 'form'], function () {
    $ = layui.$,
        admin = layui.admin,
        table = layui.table,
        layer = layui.layer,
        laydate = layui.laydate,
        form = layui.form;
    var buss_people_index = 0; //当前
    var buss_people_table = {
        elem: '#buss-people',
        url: layui.setter.base + 'json/yuebao/buss_people.js',
        // parseData: function (res) { //res 即为原始返回的数据
        //     return {
        //         "code": 0, //解析接口状态
        //         "msg": "", //解析提示文本
        //         "count": 180, //解析数据长度
        //         "data": res.list //解析数据列表
        //     };
        // },
        width: admin.screen() > 1 ? '' : '',
        title: '部门列表',
        page: true,
        cols: [
            [{
                title: 'No.',
                type: 'numbers',
                width: 50,
                height: 25
            }, {
                title: '员工编号',
                width: 100,
                height: 25,
                field: 'id'
            }, {
                title: '姓名',
                width: 100,
                height: 25,
                field: 'name'
            }, {
                title: '公司',
                width: 100,
                height: 25,
                field: 'company'
            }, {
                title: '部门',
                width: 100,
                height: 25,
                field: 'department'
            }, {
                title: '关键信息',
                width: 100,
                height: 25,
                field: 'keyInfo'
            }]
        ],
        done: function (res, curr, count) {
            $('.people-choose').find('.layui-table').find('tr').on('dblclick', function () {
                var index = $(this)[0].dataset.index;
                $('.buss_people1')[buss_people_index].value = $(this)[0].childNodes[2].innerText;
                layer.close(layer.index);
            })
        }
    };

    // “客户”输入框的光标聚焦事件的触发函数， 弹出弹层，弹层上显示所有的客户，以供选择。
    function depart_input_focus_handler(index) {
        buss_people_index = index;
        layer.open({
            title: '人员选择',
            type: 1,
            area: ['600px', '550px'],
            content: $('#hidden1'),
            success: function () {
                table.render(buss_people_table);
                $('#hidden1').css('display', 'block');
            }
        });

    }


    table.render({
        elem: '#test-table-fixed',
        url: layui.setter.base + 'json/table/people.js',
        width: admin.screen() > 1 ? '' : '',
        height: '',
        page: false,
        cols: [
            [{
                title: '序号',
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
                templet: '#test-table-inputTpl'
            }, {
                title: '项目负责人',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '项目来源',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '月报维护人',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '省份',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '城市',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '合同状态',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '合同分类',
                width: 120,
                templet: '#test-table-inputTpl'
            }, {
                title: '合同登记',
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
            $('.buss_people1').each(function (index) {
                $(this).on('click', function () {
                    depart_input_focus_handler(index)
                })
            });
        }
    });

});