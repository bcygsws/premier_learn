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
 * mouseover:鼠标指针进入某个特定元素（子元素）时，鼠标就会触发mouseover事件；当进入其个子元素时，会再次触发
 *
 * 事件对象的属性relatedTarget
 * mouseenter: relatedTarget属性指代的是离开之前的那个元素，如果relatedTarget为目标元素或者null时，事件不会触发
 * mouseover: relatedTarget属性指代的是从中（当前那个元素）离开的那个元素
 *
 *
 * */


