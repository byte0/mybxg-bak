/*
    上传图片与裁切图片
*/
define(['jquery','template','util','uploadify'],function($,template,util){
    // 设置导航选中
    util.setMenu('/course/add');
    // 获取课程id
    var cs_id = util.qs('cs_id');
    // 查询图片信息
    $.ajax({
        type : 'get',
        url : '/api/course/picture',
        data : {cs_id :cs_id},
        dataType : 'json',
        success : function(data){
            // 渲染模板
            var html = template('pictureTpl',data.result);
            $('#pictureInfo').html(html);
            // 上传图片
            // 处理文件上传
            $('#upfile').uploadify({
                width : 80,
                height : 'auto',
                buttonText : '选择图片',
                buttonClass : 'btn btn-success btn-sm',
                fileObjName:'cs_cover_original',
                itemTemplate : '<span></span>',
                formData : {cs_id:cs_id},
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader : '/api/uploader/cover',
                onUploadSuccess : function(file,data){
                    data = JSON.parse(data);
                    $('.preview img').attr('src',data.result.path);
                }
            });

        }
    });
});