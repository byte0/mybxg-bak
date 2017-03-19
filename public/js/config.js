

require.config({
    baseUrl : '/public/assets',
    paths : {
        jquery : 'jquery/jquery.min',
        cookie : 'jquery-cookie/jquery.cookie',
        echarts : 'echarts/echarts.min',
        template : 'artTemplate/template',
        bootstrap : 'bootstrap/js/bootstrap',
        util : '../js/util'
    },
    shim : {
        // bootstrap : {
        //     deps : ['jquery']
        // }
    }
});