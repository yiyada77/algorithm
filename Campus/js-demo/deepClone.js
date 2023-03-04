const obj1 = {
    age: 20,
    name: 'xx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj1);

obj2.address.city = 'shanghai';
obj2.arr[0] = 'a2222';
console.log(obj1.address.city)
console.log(obj1.arr[0]);

/**
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj) {
    //判断类型是引用类型还是值类型
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    //初始化返回结果
    let res;
    if (obj instanceof Array) {
        res = [];
    } else {
        res = {};
    }
    //递归调用，主要是避免对象里的某一个键的值也是一个引用类型
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key]);
        }
    }

    return res;
}