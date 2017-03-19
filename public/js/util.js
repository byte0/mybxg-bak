/*
    工具方法
*/
define(['jquery'],function($){
    return {
        setMenu : function(pathname){
            $('.navs a[href="'+pathname+'"]').addClass('active');
        }
    }
});