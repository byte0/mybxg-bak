/*
    课时管理
*/
define(['jquery','template','util'],function($,template,util){
    util.setMenu('/course/add');
    var cs_id = util.qs('cs_id');
    $.ajax({
        type : 'get',
        data : {cs_id : cs_id},
        url : '/api/course/lesson',
        dataType : 'json',
        success : function(data){
            if(data.code == 200){
                var html = template('lessonTpl',data.result);
                $('#lessonInfo').html(html);
            }
        }
    });

});