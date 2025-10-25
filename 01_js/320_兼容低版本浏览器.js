/**
 * @Desc:webSocket如何兼容低版本浏览器？
 * Adobe Flash Socket
 * ActiveX HTMLFile (IE)
 * 基于multipart 编码发送XHR
 * 基于长轮询的XHR
 *
 * 注：XHR XMLHttpRequest注入技术
 * 该机制是通过创建一个script的DOM元素，然后把XMLHttpRequest的响应注入到script中，来执行JavaScript.
 *
 * readState的不同值所代表含义：
 * 0‌：请求未初始化
 * 1‌：服务器连接已建立
 * 2‌：请求已接收
 * 3‌：请求处理中
 * 4‌：请求完成且响应就绪
 *
 * */
var xhrObj = getXHRObject;
xhrObj.onreadystatechange = function () {

	if (xhrObj.readyState == 4) {
		var scriptElem = document.createElement('script');
		document.getElementsByTagName('head')[0].appendChild(ScriptElem);// head标签内嵌入script标签元素
		scriptElem.text = xhrObj.responseText;// 将XHR响应注入到script标签元素中
	}

}
xhrObj.open('Get', 'A.js', true);//必须和主页面在同一个域中
xhrObj.send('');
