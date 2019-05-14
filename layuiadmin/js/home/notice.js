
 layui.config({
  base: '../../layuiadmin/' //静态资源所在路径
}).extend({
  index: 'lib/index' //主入口模块
}).use(['index', 'table'], function(){
  var $ = layui.$
  ,form = layui.form
  ,table = layui.table;
  
  //用户表格加载
  table.render({
    elem: '#tb-user'
    ,url: layui.setter.request_url + '/Admin/user_list' //模拟接口
    ,page:true
    ,id:'tb-user'
    ,cols: [[
      {type: 'numbers',title:'No.'}
      ,{field: 'title', title: '标题',align: 'center'}
      ,{field: 'content', title: '内容',align: 'center'}
      ,{field: 'type', title: '类型',align: 'center'}
      ,{field: 'input_NO', title: '发布人',align: 'center'}
      ,{field: 'input_time', title: '发布时间',align: 'center'}
      ,{title: '操作',  align: 'center', toolbar: '#table-useradmin-admin'}
    ]]
    ,text: '对不起，加载出现异常！'
  });
  
  //监听工具条
  table.on('tool(tb-user)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
        layer.confirm('确定删除此用户？', function(index){
          var id = obj.data.id;
          $.ajax({
            type: "GET",
            dataType:"text",
            url: layui.setter.request_url + "/Admin/user_del",
            data: {
              id_data:id
            },
            async: true,
            success: function(data) {
              var data = JSON.parse(data);
              if(data.status == 1){
                layer.msg('删除成功',{icon:1,time:'1200'});
              }else{
                layer.msg('删除失败',{icon:1,time:'1200'});
              }
            }
          })
          obj.del();
          layer.close(index);
        });
    }else if(obj.event === 'edit'){
      var tr = $(obj.tr);
      var id = obj.data.id;
      layer.open({
        type: 2
        ,title: '编辑管理员'
        ,content: 'user_edit.html?id=' + id
        ,area: ['420px', '420px']
        ,btn: ['保存', '重置密码','取消']
        ,yes: function(index, layero){
          //获取open页面里面的各项数据
          var number = layero.find('iframe').contents().find('input[name="number"]')[0].value;
          var name = layero.find('iframe').contents().find('input[name="name"]')[0].value;
          var company = layero.find('iframe').contents().find('select[name="company"]')[0].value;          
          var department = layero.find('iframe').contents().find('select[name="department"]')[0].value;
          var keyword = layero.find('iframe').contents().find('input[name="keyword"]')[0].value;

          //条件判断
          if(number == ""){
            layer.msg('请输入员工编号',{icon:0,time:'1200'});
          }else if(name == ""){
            layer.msg('请输入姓名',{icon:0,time:'1200'});
          }else if(company == ""){
            layer.msg('请输入公司',{icon:0,time:'1200'});
          }else if(department == ""){
            layer.msg('请输入部门',{icon:0,time:'1200'});
          }else if(keyword == ""){
            layer.msg('请输入关键字',{icon:0,time:'1200'});
          }else{
            $.ajax({
              type: "POST",
              dataType:"text",
              url: layui.setter.request_url + "/Admin/user_update",
              data: {
                id_data:id,
                number_data: number,
                name_data: name,
                company_data: company,
                department_data: department,
                keyword_data: keyword
              },
              async: true,
              success: function(data) {
                var data = JSON.parse(data);
                console.log(data)
                if(data.status == 1){
                  layer.msg('保存成功',{icon:1,time:'1200'});
                  table.reload('tb-user'); //表格重载
                  layer.close(index); //关闭弹出页面
                }else{
                  layer.msg('保存失败',{icon:0,time:'1200'});
                }
              }
            })
          }
        }
        ,btn2: function(index, layero){
          layer.confirm('确认重置？', {
            btn: ['确认', '取消'] //可以无限个按钮
          }, function(index, layero){
            $.ajax({
              type: "POST",
              dataType:"text",
              url: layui.setter.request_url + "/Admin/user_resetPwd",
              data: {
                id_data:id
              },
              async: true,
              success: function(data) {
                var data = JSON.parse(data);
                console.log(data)
                if(data.status == 0 || data.status == 1){
                  layer.msg('重置成功',{icon:1,time:'1200'});
                  layer.close(layer.index);
                }else{
                  layer.msg('重置失败',{icon:0,time:'1200'});
                }
              }
            })
          }, function(index){
            console.log('取消')
          });
          return false;
        }
        
      })
    }
  });
  //监听搜索
  form.on('submit(search)', function(data){
    var number = $("input[name='number']")[0].value;
    var name = $("input[name='name']")[0].value;
    table.reload('tb-user', {
      method: 'POST'
      , where: {'number': number,'name': name}
      , page:{curr:1}
    });
  });

  //事件
  var active = {
    add: function(){
      layer.open({
        type: 2
        ,title: '添加用户'
        ,content: 'user_add.html'
        ,area: ['420px', '420px']
        ,btn: ['确定', '取消']
        ,yes: function(index, layero){
          var number = $('#number');
          var iframeWindow = window['layui-layer-iframe'+ index];
          
          //获取open页面里面的各项数据
          var number = layero.find('iframe').contents().find('input[name="number"]')[0].value;
          var name = layero.find('iframe').contents().find('input[name="name"]')[0].value;
          var company = layero.find('iframe').contents().find('select[name="company"]')[0].value;          
          var department = layero.find('iframe').contents().find('select[name="department"]')[0].value;
          var keyword = layero.find('iframe').contents().find('input[name="keyword"]')[0].value;

          //条件判断
          if(number == ""){
            layer.msg('请输入员工编号',{icon:0,time:'1200'});
          }else if(name == ""){
            layer.msg('请输入姓名',{icon:0,time:'1200'});
          }else if(company == ""){
            layer.msg('请输入公司',{icon:0,time:'1200'});
          }else if(department == ""){
            layer.msg('请输入部门',{icon:0,time:'1200'});
          }else if(keyword == ""){
            layer.msg('请输入关键字',{icon:0,time:'1200'});
          }else{
            //请求添加用户的接口
            $.ajax({
              type: "POST",
              dataType:"text",
              url: layui.setter.request_url + "/Admin/user_add",
              data: {
                number_data: number,
                name_data: name,
                company_data: company,
                department_data: department,
                keyword_data: keyword
              },
              async: true,
              success: function(data) {
                var data = JSON.parse(data);
                if(data.status == -1){
                  layer.msg('该账号已存在',{icon:0,time:'1200'});
                }else if(data.status > 0){
                  layer.msg('已添加',{icon:1,time:'1200'});
                  table.reload('tb-user'); //表格重载
                  layer.close(index); //关闭弹出页面
                }else{
                  layer.msg('添加失败',{icon:1,time:'1200'});
                }
              }
            })
          }
        }
      }); 
    }
  }  

  //监听添加事件被点击
  $('.layui-btn.layui-btn-normal').on('click', function(){
    var type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
  });
});
    
  