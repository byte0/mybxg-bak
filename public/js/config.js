

require.config({
    baseUrl : '/public/assets',
    paths : {
        jquery : 'jquery/jquery.min',
        cookie : 'jquery-cookie/jquery.cookie',
        echarts : 'echarts/echarts.min',
        template : 'artTemplate/template',
        bootstrap : 'bootstrap/js/bootstrap',
        nprogress : 'nprogress/nprogress',
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate : 'validate/jquery-validate',
        uploadify : 'uploadify/jquery.uploadify',
        region : 'jquery-region/jquery.region',
        ckeditor : 'ckeditor/ckeditor',
        form : 'jquery-form/jquery.form',
        util : '../js/util',
        overlay : '../js/overlay'
    },
    shim : {
        bootstrap : {
            // 把bootstrap转成标准模块（依赖于标准的jQuery模块）
            deps : ['jquery']
        },
        language : {
            deps : ['jquery','datepicker']
        },
        validate : {
            deps : ['jquery']
        },
        uploadify : {
            deps : ['jquery']
        },
        ckeditor : {
            exports : 'CKEDITOR',
            deps : ['jquery']
        }
    }
});