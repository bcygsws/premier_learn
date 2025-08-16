/**
 * @Desc:01-不会冒泡的事件有哪些？
 * 5个一定不会冒泡 && 4个某些场景上会冒泡
 *
 * focus
 * blur
 * focusin: 功能类似focus，但是会在目标元素及其父元素上触发（冒泡），这是个特例
 * focusout：功能类似focus，但是会在目标元素及其父元素上触发（冒泡），这是个特例
 *
 * load
 * unload
 * stop
 *
 * scroll：在某些浏览器上，目标元素滚动时，会触发冒泡
 * readystatechange：当document readystate 改变时，会触发冒泡
 *
 * 02-mouseenter和mouseover的区别
 * 从以下三个方面分析：
 * 事件冒泡
 * mouseenter:鼠标指针首次进入某个特定元素（子元素）时，鼠标就会触发mouseenter事件；当进入其个子元素时，不会冒泡；因此，该事件
 * 用于检测鼠标指针是否首次进入某个特定元素（子元素）
 *
 * mouseover:鼠标指针进入某个特定元素（子元素）时，鼠标就会触发mouseover事件；当进入其个子元素时，会冒泡;无论进入的是该元素，或者
 * 子元素，都会触发mouseover事件
 *
 * 事件触发范围
 * mouseenter:鼠标指针首次进入某个特定元素（子元素）时，鼠标就会触发mouseenter事件；当进入其个子元素时，不会再次触发
 * mouseover:鼠标指针移动到某个元素时触发，不论是元素自身还是其他子元素上，鼠标就会触发mouseover事件
 *
 * 事件对象的属性relatedTarget
 * mouseenter: relatedTarget属性指代的是离开之前的那个元素，如果relatedTarget为目标元素或者null时，事件不会触发
 * mouseover: relatedTarget属性指代的是从中（当前那个元素）离开的那个元素
 *
 * 03-MessageChannel是什么？以及使用场景
 * MessageChannel是HTML5中新加入的API，它可以实现两个独立环境（web workers 或者browsing context浏览器上下文）之间的双向通信的通道
 *
 * 04-async和await实现原理
 * 目的：解决回调地狱
 * async和await实现:
 * promise解决：promise是使用编程技巧将回调函数的横向加载转换为纵向的链式加载，从而避免回调地狱
 * 仍然不够完美
 *
 * async--- await解决：
 * 为了解决promise的问题，ES2017（ES8）引入了async和await
 * async和await的实现原理:
 *
 * generator函数：是协程在ES6中实现，协程简单说，就是多个线程相互协作，完成异步任务
 * 是一个封装的异步任务，异步操作暂停的语句都yield进行标注,需要恢复时，用户使用next()方法恢复执行
 *
 * thunk异步函数：作用是将包含回调函数和其他参数的函数，转换成只包含回调函数的函数
 * 示例：
 * const thunkSync=>fn=>(...args)=>callback=>fn(...args,callback)
 * thunkSync函数只有一个回调函数参数fn
 *
 * */


