{
    let a = 10;
    var b = 1;
    console.log(a+b);
}


// 块级作用域的出现，
// 实际上使得获得广泛应用的立即执行函数表达式（ IIFE） 不再必要了。

// IIFE 写法
(function () {
    var tmp = 'abc'
    console.log(tmp);
}());

// 块级作用域写法
{
    let tmp = "米哈";
    console.log(tmp);
}
