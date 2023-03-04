// function fn1(a,b){
//     console.log('this',this);
//     console.log(a,b);
//     return 'this is fn1';
// }
// const fn2=fn1.bind({x:100},10,20);
// const res=fn2();
// console.log(res);

Function.prototype.bind1=function(){
    //将参数拆解为数组
    // const args=Array.prototype.slice.call(arguments)
    const args=[...arguments];
    //获取this（数组第一项）
    const t=args.shift();
    //fn1.bind(...)中的fn1 当前class 对象
    const self=this;
    //返回一个函数
    return function(){
        return self.apply(t,args);
    }
}

// Function.prototype.call1=function(){
//     const args=[...arguments];
//     const t=args.shift();
//     const self=this;
//     return self.apply(t,args);
// }

// Function.prototype.apply1=function(){
//     const t=arguments[0];
//     const args=[...arguments[1]];
//     const self=this;
//     return self.call(t,args);
// }


function fn1(a,b){
    console.log('this',this);
    console.log(a,b);
    return 'this is fn1';
}
const fn2=fn1.apply1({x:100},[10,20]);
const res=fn2();
console.log(res);