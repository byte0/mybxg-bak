/*
    讲师管理
*/
define(['jquery','template'],function($,template){
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
        }
    });
});