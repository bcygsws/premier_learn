/**
 * @Proxy对象监听对象的引用
 *
 *
 * */
const nestedObj = {
	foo: {
		bar: 1
	}
};
const handler = {
	get(target, prop, receiver) {
		const obj = Reflect.get(target, prop, receiver);
		if (typeof obj === 'object' && obj !== null) {
			return new Proxy(obj, handler);
		}
		console.log(`getting ${prop}:`, target[prop]);
		return obj;
	},
	set(target, prop, value) {
		console.log(`setting ${prop} before:`, target[prop]);// setting bar before: 1
		target[prop] = value;
		console.log(`setting ${prop} after:`, target[prop]);// setting bar after: 2
		return true;
	}
}
const p = new Proxy(nestedObj, handler);
// 验证：打印结果:普通对象被Proxy包装后，能够监听对象属性的引用了：打印结果：setting bar: 2
// 包装后：nestedObj.foo.bar变成了p.foo.bar
p.foo.bar = 2;// setting bar: 2
