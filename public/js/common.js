
// 控制左侧导航菜单的显示和隐藏
$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});

var pathname = location.pathname;
// 没有登录的时候跳转到登录页面
var flag = $.cookie('PHPSESSID');
if(!flag && pathname.indexOf('login') == -1){
    // 没有登录
    location.href = '/login'
}