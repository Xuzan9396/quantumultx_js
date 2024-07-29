/*******************************

[rewrite_local]
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/Ceshi.js
[mitm] 
hostname = *.tuanyougou.*


*******************************/
var obj = JSON.parse($response.body);
obj.data.userId = 9999;
obj.data.endTime = "脚本成功啦";
$done({body: JSON.stringify(obj)});
