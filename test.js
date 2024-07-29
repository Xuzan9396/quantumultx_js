/*******************************

脚本名称:测试

*******************************
[rewrite_local]
^http[s]?:\/\/newsapi.zankhana.ltd\/yekong_api.+$ url script-response-body https://raw.githubusercontent.com/Xuzan9396/quantumultx_js/main/test.js
[mitm] 
hostname = newsapi.zankhana.ltd

*******************************/
var obj = JSON.parse($response.body);
obj.data.ip = "test";
$done({body: JSON.stringify(obj)});
