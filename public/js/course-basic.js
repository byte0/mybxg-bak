/*
    课程基本信息
*/
define(['jquery','template','util'],function($,template,util){
    // 设置导航选中
    util.setMenu('/course/add');
    // 获取课程id
    var cs_id = util.qs('cs_id');
    // 获取课程的基本信息
    $.ajax({
        type : 'get',
        url : '/api/course/basic',
        data : {cs_id : cs_id},
        dataType : 'json',
        success : function(data){
            // 渲染模板
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);
        }
    });

});