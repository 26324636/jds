/*********************************
 ** 名称:主页模块
 **
 ** 作者:钟佳闱
 **
 ** 时间:2019年4月25日
 **
 ** 描述:主页
 **********************************/
var $, admin, table, layer, laydate, form;
layui.config({
    base: '../../layuiadmin/' //静态资源所在路径
}).use(['table', 'form', 'laydate'], function () {
    $ = layui.$,
        admin = layui.admin,
        table = layui.table,
        layer = layui.layer,
        laydate = layui.laydate,
        form = layui.form;

    user_info_update();

    //更新用户名字
    function user_info_update() {
        var user_info = JSON.parse(sessionStorage.getItem('user_info'));
        console.log(user_info)
        $('#userName')[0].innerHTML = user_info.name;
        // console.log(user_info)
    }
});