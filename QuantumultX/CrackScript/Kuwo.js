/*
Quantumult X 脚本
KuWo music unlock Svip

[rewrite_local]
# 酷我音乐解锁SVIP
# 对下载失败的音乐：先听该音乐-音乐缓存完毕之后点下载，这时下载里会显示下载失败，重启酷我，便会显示下载完成~
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=1
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v\d\/user\/vip|vip\/spi/mservice) url script-response-body Kuwo.js

[mitm]
hostname = *.kuwo.cn,

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "2";
	obj.data["vipLuxuryExpire"] = "1835312949000";
	obj.data["time"] = "1961170340993";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "1835312949000";
	obj.data["vipOverSeasExpire"] = "1835312949000";
	obj.data["vipExpire"] = "1835312949000";
	obj.data["vip3Expire"] = "1835312949000";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

$done({body});