/*
    添加课程
*/

define(['jquery','util','validate','form'],function($,util){
    util.setMenu('/course/add');
    // 创建课程
    $('#courseForm').validate({
        sendForm : false,
        valid : function(){
            $(this).ajaxSubmit({
                type : 'post',
                url : '/api/course/create',
                dataType : 'json',
                success : function(data){
                    if(data.code == 200){
                        location.href = '/course/basic?cs_id=' + data.result.cs_id;
                    }
                }
            });
        }
    });
});