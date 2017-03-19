/*
    讲师管理 promise
*/
define(['jquery','template','util','bootstrap','overlay'],function($,template,util){
    // 设置菜单选中
    util.setMenu(location.pathname);

    // 实现教师数据列表加载
    $.ajax({
        type : 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function(data){
            // 解析数据，渲染页面（前端渲染）
            // 模板引擎作用：模板+数据=静态标签片段
            var html = template('teacherTpl',{list:data.result});
            $('#teacherList').html(html);
            // 查看讲师功能
            $('.teacherBtns').find('a:eq(0)').click(function(){
                // 处理弹窗
                // closest查找最近的父元素
                var tc_id = $(this).parents('td').attr('data-tcid');
                $.ajax({
                    type : 'get',
                    url : '/api/teacher/view',
                    data : {tc_id : tc_id},
                    dataType : 'json',
                    success : function(data){
                        if(data.code == 200){
                            // data.result.tc_hometown = data.result.tc_hometown.replace(/\|/g,' ');
                            data.result.tc_hometown = data.result.tc_hometown.split('|').join(' ');
                            var html = template('teacherInfoModal',data.result);
                            $('#teacherInfo').html(html);
                            $('#teacherModal').modal();
                        }
                    }
                });
            });
            // 启用和注销讲师
            $('.teacherBtns').find('a:eq(2)').click(function(){
                var tc_id = $(this).parents('td').attr('data-tcid');
                var tc_status = $(this).parents('td').attr('data-status');
                var td = $(this).parents('td');
                var that = this;
                $.ajax({
                    type : 'post',
                    url : '/api/teacher/handle',
                    data : {tc_id:tc_id,tc_status:tc_status},
                    dataType : 'json',
                    success : function(data){
                        // 修改状态对应文本
                        if(data.result.tc_status == 0){
                            $(that).text('启 用');
                        }else{
                            $(that).text('注 销');
                        }
                        // 修改浏览器端状态
                        td.attr('data-status',data.result.tc_status);
                    }
                });
            });
        }
    });


});