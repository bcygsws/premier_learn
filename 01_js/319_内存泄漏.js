/**
 * @desc:内存泄漏
 * 内存泄漏
 * 1.定义：程序中动态分配的堆内存由于某些原因没有被释放或者无法释放
 *
 * 2.js释放内存的机制？
 * js机制中，内存中变量引用次数为0时才会被释放
 * 全局执行对象被标记为不再使用时才会释放
 *
 * 3.导致内存泄露的几种情况
 * 3.1 变量未定义，或者胡乱定义全局变量
 * 3.2 闭包的副作用未处理
 * 3.3 事件监听后未移除
 * 2.4 缓存，建议所有缓存都设置好过期时间
 *
 *
 *
 **/
// 3.1 变量未定义或者胡乱使用全局变量
function def() {
	b = 1;// 变量b没有声明
}

def();

setTimeout(function () {
	console.log(c);
}, 2000)


// 3.2 闭包的副作用未处理，就赋值为null;来触发GC来进行垃圾回收
function leak() {
	const b = 5;
	return function (c) {
		console.log(b + c);
	}
}

let res = leak();
res();
res = null;// 手动设置为null,GC（）会主动去回收

// 3.3 事件监听后未移除
function event() {
	console.log('click');

}

function addEvent() {
	const node = document.getElementById('wrap');
	node.addEventListener('touchmove', event);
}

addEvent();// 添加事件监听
// 在react框架中使用的钩子 （副作用函数）
useEffect(() => {
	const node = document.getElementById('wrap');
	node.removeEventListener('touchmove', event);// 移除的事件还是event
}, []);

// 3.4 缓存，建议为所有缓存设置过期时间
