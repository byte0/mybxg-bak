/*
    上传图片与裁切图片
*/
define(['jquery','template','util','uploadify','jcrop','form'],function($,template,util){
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

            var preview = $('.preview img'),jcrop_api;

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
                    $('#cropPic').prop('disabled',false);
                }
            });
            // 点击图片裁切按钮时进行裁切处理
            $('#cropPic').click(function(){

                if($(this).attr('data-status') == 'save'){
                    // 保存图片的操作(提交裁切图片的尺寸信息)
                    $('#cropForm').ajaxSubmit({
                        type : 'post',
                        url : '/api/course/update/picture',
                        data : {cs_id : cs_id},
                        dataType : 'json',
                        success : function(data){
                            if(data.code == 200){
                                location.href = '/course/lesson?cs_id=' + data.result.cs_id;
                            }
                        }
                    });
                }else{
                    $(this).attr('data-status','save')
                           .val('保存图片');
                    cropPic();
                }
            });
            // 图片裁切功能
            function cropPic(){
                // 销毁原来的图片裁切实例对象
                jcrop_api && jcrop_api.destroy();
                preview.Jcrop({
                    boxWidth : 400,
                    aspectRatio : 2
                    // setSelect: [10, 10, 100, 100],
                },function(){
                    // 缓存原来的裁切实例对象
                    jcrop_api = this;
                    // 计算选取的尺寸
                    var width = jcrop_api.ui.stage.width,
                        height = jcrop_api.ui.stage.height,
                        x = 0;
                        y = height/4;
                    // 创建选取
                    jcrop_api.newSelection();
                    jcrop_api.setSelect([x,y,width,height/2]);
                    jcrop_api.initComponent('Thumbnailer', {
                        width: 240,
                        height: height,
                        thumb : '.thumb'
                    });

                    // 监听选区的变化
                    preview.parent().on('cropend',function(e,s,c){
                       $('#crop_x').val(c.x);
                       $('#crop_y').val(c.y);
                       $('#crop_w').val(c.w);
                       $('#crop_h').val(c.h);
                    });
                });
            }

        }
    });
});