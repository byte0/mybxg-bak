/*
    个人中心
*/
define(['jquery','template','ckeditor','region','validate','form','datepicker','language','uploadify'],function($,template,CKEDITOR){
    
    // 查询个人中心信息
    $.ajax({
        type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function(data){
            // 填充数据
            var html = template('profileTpl',data.result);
            $('#profileInfo').html(html);
            // 处理文件上传
            // $('#upfile').uploadify({
            //     fileObjName:'tc_avatar',
            //     swf : '/public/assets/uploadify/uploadify.swf',
            //     uploader : '/api/uploader/avatar',
            //     onUploadSuccess : function(file,data){
            //         console.log(data);
            //     }
            // });

            // 处理表单三级联动
            $('.hometown').region({
                url : '/public/assets/jquery-region/region.json'
            });

            // 富文本处理
            CKEDITOR.replace('ckeditor',{
                toolbarGroups : [
                    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] }
                ]
            });
        }
    });


});