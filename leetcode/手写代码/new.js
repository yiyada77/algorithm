function createObject() {
    // 取传入的第一个参数为构造函数
    const constructor = Array.prototype.shift.call(arguments)
    if (typeof constructor !== 'function') {
        return Error('Error constructor!')
    }
    // 以构造函数的原型创建一个空对象
    const newObject = Object.create(constructor.prototype)
    // 将构造函数的 this 指向新的空对象，并使用后面的参数初始化
    const result = constructor.apply(newObject, arguments)
    // 判断返回对象
    const flag = result && (typeof result === 'object' || typeof result === 'function')
    return flag ? result : newObject
}

function F(name) {
    this.name = name
}

createObject(F, 'yiyada')