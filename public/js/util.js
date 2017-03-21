/*
    工具方法
*/
define(['jquery'],function($){
    return {
        setMenu : function(pathname){
            $('.navs a[href="'+pathname+'"]').addClass('active');
        },
        qs : function(pname){
            var pathname = location.search;
            // var pathname = '?username=lisi&age=12&gender=male';
            var pathname = pathname.slice(1);
            var obj = {};
            if(pathname){
                var arr = pathname.split('&');
                for (var i = 0; i < arr.length; i++) {
                    var kv = arr[i].split('=');
                    // 把所有的参数键值对都放到对象中
                    obj[kv[0]] = kv[1];
                }
            }
            return obj[pname];
        }
    }
});