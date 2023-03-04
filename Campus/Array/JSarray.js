///////////////
// 数组初始化 //
///////////////
//构造函数
//一维
var  arr =  new  Array();  //创建一个空数组[]	 
var  arr =  new  Array(3);  //创建一个长度为3的数组（数组项都为undefined）	 
var  arr =  new  Array('小鸣', 18, '男' );  //创建数组并写入数组元素 ['小鸣',18,'男']
//二维
let board = new Array();
for (let i = 0; i < m; i++) {
    board[i] = new Array();
    for (let j = 0; j < n; j++) {
        board[i][j] = 1;
    }
}
// es6有更为简洁的写法
// 数组fill方法用于对数组进行填充，接收3个参数，后两个不是必填的，参数一：要填充的值，后两个为起始位置。
// 一维数组初始化
let arr = new Array(5).fill(0); //[0,0,0,0,0]
// 二维数组初始化
let matrix = new Array(5).fill(arr)[
    [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0],
]


//////////////////
// 数组最大最小值 //
//////////////////
Math.max.apply(Math, arr)
Math.pow(底数, 几次方)

///////////////////
// sort给数组排序 //
///////////////////
//比较函数两个参数a和b，返回a-b 升序，返回b-a 降序
houses.sort(function (a,  b)  {         return  a  -  b; }); //升序
heaters.sort(function (a,  b)  {         return  b  -  a; }); //降序
intervals.sort((a, b) => (a[0] - b[0])); //升序排序


/////////////
// 数组长度 //
/////////////
const m = matrix.length;
const n = matrix[0].length;


/////////////
// 连接数组 //
/////////////
//concat()把两个或者多个数组链接在一起，但是不改变已经存在的数组,而是返回一个链接之后的新数组
var a = [1, 2, 3];
a.concat([4, 5]);
console.log(a);
//此处输出为 [1, 2, 3]
var a = [1, 2, 3];
a = a.concat([4, 5]);
console.log(a);
//此处输出为 [1, 2, 3 ,4 ,5]


/////////////////////////////
// Array.prototype.slice() //
/////////////////////////////
// slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。
// 原始数组不会被修改。
arrayObject.slice(start, end)
    // 	• start 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
    // 	• end 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
    // 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
    // slice不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：
    // 		○ 如果该元素是个对象引用 （不是实际的对象），slice
    // 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。


////////////////////
// 字符串转换为数组 //
////////////////////
// split()函数
var nums = 123456；
var array = nums.split("");
// 其中nums是想要装换的数字串，array是数字串转换成的数组。 array=[1,2,3,4,5,6];
// 数组转换为字符串：
var array = [1, 2, 3, 4, 5, 6];
var nums = array.join(",");
//数字变成字符串
x = String(x);

////////////
// JS取整 //
////////////
// 1.丢弃小数部分,保留整数部分
parseInt(7 / 2)
    // 2.向上取整,有小数就整数部分加1
Math.ceil(7 / 2)
    // 3.四舍五入
Math.round(7 / 2)
    // 4.向下取整
Math.floor(7 / 2)
    //javascript除法如何取整
Math.round(x) //四舍五入，如Math.round(0.60)，结果为1；Math.round(0.49)，结果为0；
Math.floor(x) //向下舍入，如Math.floor(0.60)与Math.floor(0.49)，结果均为0；
Math.ceil(x) //向上舍入，如Math.ceil(0.60)与Math.ceil(0. 49)，结果均为1。
    //主题类别分页显示

int a = 36;
int s = a / 10; //除，商....3
int y = a % 10; //求模，余...6


////////////////
// 数组判断为空 //
////////////////
一、 js判断数组是否为空   方法一：   arr.length
let arr = [];
if (arr.length == 0) {
    console.log("数组为空")
} else {
    console.log("数组不为空")
}
arr.indexOf(某元素)： 未找到则返回 - 1。
实际用法：
if (arr.indexOf(某元素) > -1) { /*则包含该元素*/ }
例：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple"); // 2
//以上输出结果意味着 "Apple" 元素位于数组中下标为 2 的位置。
indexOf() 完整语法：
array.indexOf(item, start)
参数：
item： 必须。 查找的元素。
start： 可选的整数参数。 规定在字符串中开始检索的位置。 它的合法取值是 0 到 stringObject.length - 1。 如省略该参数， 则将从字符串的首字符开始检索。
例：
1.
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
2.
var a = fruits.indexOf("Apple", 4); // 6
注： string.indexOf() 返回某个指定的字符串值在字符串中首次出现的位置。
1. 该方法将从头到尾地检索字符串 stringObject， 看它是否含有子串 searchvalue。 开始检索的位置在字符串的 fromindex 处或字符串的开头（ 没有指定 fromindex 时）。 如果找到一个 searchvalue， 则返回 searchvalue 的第一次出现的位置。
1. stringObject 中的字符位置是从 0 开始的。
查找字符串最后出现的位置， 使用 lastIndexOf() 方法。

二、 js判断数组是否含有某个值   方法一：   arr.indexOf()
if (arr.indexOf(2) != -1) {
    console.log("数组含有2")
} else {
    console.log("数组不含2")
}  
方法二：   for循环结合if判断
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        console.log("数组含有2")
    }
}  
方法三：  arr.find(callback)  
arr.find(value => {
    if (value === 2) {
        console.log("数组含有2")
    }
})   方法四：  arr.includes()   数组中含有某值返回true， 没有返回false。 ES6新方法。
let arr = [1, 2, 3, 4];
if (arr.includes(2)) {
    console.log("数组中有2");
} else {
    console.log("数组中无2");
}


判断某键是否在对象里
if (key in Obj)
    if (!(key in Obj))


    // js不能使用连续不等式
        A <= b < c; //错的
A <= b && b < c;


//push(),pop(),unshift(),shift()的用法小结
// 1、push()、pop()和unshift()、shift()
// 这两组同为对数组的操作，并且会改变数组的本身的长度及内容。
// 不同的是 push()、pop() 是从数组的尾部进行增减，unshift()、shift() 是从数组的头部进行增减。
var  arr = [1,  2];
// 2、push()和unshift()
// 向数组的 尾部/头部 添加若干元素，并返回 数组的 新长度；
arr.push(3, 4)；     //返回 arr 的新长度 4
arr;             // arr = [1,2,3,4];
arr.unshift(0, 0.5);   // 返回 arr 的新长度 6
arr;            // arr = [0,0.5,1,2,3,4];
// 3、pop()和shift()
// 从数组的 尾部/头部 删除1个元素(删且只删除1个)，并返回 被删除的元素；空数组是继续删除，不报错，但返回undefined；
arr.pop();　　　　　　 //返回 4；
arr;　　　　　　　　  // arr = [0,0.5,1,2,3];
arr.pop();　　　　　　 //返回 3；
arr;　　　　　　　　 // arr = [0,0.5,1,2];
arr.shift()；　　　　  // 返回 0 ；
arr;　　　　　　　　 // arr = [0.5,1,2]
// PS: pop()和shift() 不接受传参，即使传了参数也没什么卵用~~；
arr.pop(3);      // 返回 2；永远返回最后一个；
arr; 　　　　　　　 // arr = [0.5,1];
arr.shift(1);　　　　 // 返回 0.5; 永远返回第一个；
arr;　　　　　　　　 // arr = [1];
arr.pop(); 　　　　 // 返回 1；
arr;　　　　　　　　 // arr = [];
arr.shift()　　　　　 // 返回 undefined；
arr;　　　　　　　　 // arr = [];


一、 {}
大括号， 表示定义一个对象， 大部分情况下要有成对的属性和值， 或是函数体

{}
表示对象、[] 表示对象的属性、 方法, () 如果用在方法名后面， 代表调用
如：
var LangShen = { "Name": "Langshen", "AGE": ”28” };
上面声明了一个名为“ LangShen” 的对象， 多个属性或函数用, （逗号） 隔开， 因为是对象的属性，
所以访问时， 应该用.（点） 来层层访问： LangShen.Name、 LangShen.AGE，
当然我们也可以用数组的方式来访问， 如： LangShen["Name"]、 LangShen["AGE"]， 结果是一样的。
var LangShen = {
    Name: function() {
        return "LangShen";
    },
    Age: function() {
        return "28";
    }
}
调用 LangShen.Name()

二、[] 中括号， 表示一个数组， 也可以理解为一个数组对象

如：
var LangShen = ["Name", "LangShen", "AGE", "28"];
很明显， 每个值或函数， 都是独立的， 多个值之间只用, （逗号） 隔开， 因为是数组对象， 所以它等于：
var LangShen = Array("Name", "LangShen", "AGE", "28");
访问时， 也是和数组一样， alert(LangShen[0])

三、 {}
和[] 一起使用， 我们前面说到， {}
是一个对象，[] 是一个数组， 我们可以组成一个对象数组

var LangShen = {
    "Name": "Langshen",
    "MyWife": ["LuLu", "26"],
    "MySon": [{ "Name": "Son1" }, { "Name": "Son2" }, { "Name": "Son3" }]
}
从上面的结构来看， 是一个对象里面的第一项是个属性， 第二项是一个数组， 第三个是包含有多个对象的数组。
调用起来， 也是一层一层访问， 对象的属性用.（点） 叠加， 数组用[下标] 来访问。
如： alert(LangShen.MySon[1].Name)；
var LangShen = [
    {“ name”：“ wangwu” },
    {“ name”：“ lieu” }
];
这是一个对象数组

四、() 多表示参数、 {}
表示函数体

function show(name) {
    Alert(name);
}
es6中，
let show = (name) => {
    alert(name);
}
在es6中如果参数只有一个， 或者函数体只有一个话， 可以省略（）、 {}, 如
let show = name => alert(name);

解构赋值
    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];