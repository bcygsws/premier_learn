/**
 * @Desc:01-不会冒泡的事件有哪些？
 * 5个一定不会冒泡 && 4个某些场景上会冒泡
 *
 * focus
 * blur
 * focusin: 功能类似focus，但是会在目标元素及其父元素上冒泡，这是个特例
 * focusout：功能类似focus，但是会在目标元素及其父元素上冒泡，这是个特例
 *
 * load
 * unload
 * stop
 *
 * scroll：在某些浏览器上，目标元素滚动时，会触发冒泡
 * readystatechange：当document readystate 改变时，会触发冒泡
 *
 *
 * */


