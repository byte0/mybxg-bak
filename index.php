<?php 
    // 改文件复制路径的分发
    // 表示路径
    $path = 'index';
    // 文件名称
    $filename = 'index';
    // 判断路径是否存在
    if(array_key_exists('PATH_INFO',$_SERVER)){
        // 获取url中的路径
        $url = $_SERVER['PATH_INFO'];
        // 去掉路径中的第一个字符（/）
        $str = substr($url, 1);
        // 将字符串按照/进行分割
        $arr = explode('/',$str);
        if(count($arr) == 2){
            $path = $arr[0];
            $filename = $arr[1];
        }else{
            $filename = 'login';
        }
    }else{
        // 表示登录页面
        $filename = 'login';
    }
    // 作用就是载入一个页面
    include('./view/'.$path.'/'.$filename.'.html');
?>