
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
      ,{field: 'number', title: '账号',align: 'center'}
      ,{field: 'name', title: '姓名',align: 'center'}
      ,{field: 'corporation', title: '公司',align: 'center'}
      ,{field: 'department', title: '部门',align: 'center'}
      ,{field: 'keyhint', title: '团队',align: 'center'}
      ,{title: '操作',  align: 'center', toolbar: '#table-useradmin-admin'}
    ]]
    ,text: '对不起，加载出现异常！'
  });
  
  //监听工具条
  table.on('tool(tb-user)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
        layer.confirm('确定删除此用户？', function(index){
          console.log(obj)
          obj.del();
          layer.close(index);
        });
    }else if(obj.event === 'edit'){
      var tr = $(obj.tr);

      layer.open({
        type: 2
        ,title: '编辑管理员'
        ,content: '../../../views/user/administrators/adminform.html'
        ,area: ['420px', '420px']
        ,btn: ['确定', '取消']
        ,yes: function(index, layero){
          var iframeWindow = window['layui-layer-iframe'+ index]
          ,submitID = 'LAY-user-back-submit'
          ,submit = layero.find('iframe').contents().find('#'+ submitID);

          //监听提交
          iframeWindow.layui.form.on('submit('+ submitID +')', function(data){
            var field = data.field; //获取提交的字段
            
            //提交 Ajax 成功后，静态更新表格中的数据
            //$.ajax({});
            table.reload('LAY-user-front-submit'); //数据刷新
            layer.close(index); //关闭弹层
          });  
          
          submit.trigger('click');
        }
        ,success: function(layero, index){           
          
        }
      })
    }
  });
  //监听搜索
  form.on('submit(LAY-user-back-search)', function(data){
    var field = data.field;
    
    //执行重载
    table.reload('LAY-user-back-manage', {
      where: field
    });
  });

  //事件
  var active = {
    add: function(){
      layer.open({
        type: 2
        ,title: '添加用户'
        ,content: 'userform.html'
        ,area: ['420px', '420px']
        ,btn: ['确定', '取消']
        ,yes: function(index, layero){
          var number = $('#number');
          var iframeWindow = window['layui-layer-iframe'+ index];
          
          //获取open页面里面的各项数据
          var number = layero.find('iframe').contents().find('input[name="number"]')[0].value;
          var name = layero.find('iframe').contents().find('input[name="name"]')[0].value;
          var company = layero.find('iframe').contents().find('input[name="company"]')[0].value;          
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
    
  