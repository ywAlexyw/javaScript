var arr = [1, 8, 0, 2, 4, 5, 6, 5,  3]
var arr1 = [0, 1, 2, 3, 4, 5, 6]

/**
 * 
 * 冒泡排序的详解
 */
function maopao(arr) {
    for (var i = 0; i < arr.length - 1; i++) {  // 这里的循环是循环arr数组中所有值 length - 1 是因为在最后一次循环时，索引1 2 就能找到2个位置
       // length - i - 1  当有9个值，循环8次就可以排完位置， 每找到一个位置 循环的次数就应该 - i 次
        for (let j = 0; j < arr.length - i -1; j++) {   // 这里循环是循环出最大的值，并放到最后一个位置  ，因为需要将第一个值和所有的值一一比较才能找出来 
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
var bb = maopao(arr)
console.log(arr)

/**
 * 
 *  去重 
 */
function del(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1 ) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(del(arr))

/**
 * 给所有li标签添加点击事件，注意有闭包问题
 */
var li = document.getElementsByTagName('li')
for (var i = 0; i < li.length; i++) {
    (function(j){li[j].onclick = function () {
        console.log(j)
    }}(i))
}


// 声明会可以覆盖形参   //所以下边的函数e表示 function e（）{}
f = 20
function ad(e) {
    function e (){f = 2 }
    // arguments[0] = 2
    console.log(e)
    f = 200
    var f 
    return e
    
}
ad(1)
var f
console.log(f)
document.write(f)


/**
 * 计算字符串的字节长度             汉字算2个字节
 */
function js(str){
    var count = str.length
    // var count = 0
    for (var i = 0; i < str.length; i++) {
        // if (str.charCodeAt(i) <= 255) {
        //     count++
        // }else {
        //     count += 2
        // }
        if(str.charCodeAt(i) > 255) {
            count++
        }
    }
    console.log(count)
}
js('H') // 1

/**
 * 逗号运算符,
 */
// 逗号有优先级所以，左边的会先运算，右边的后运算
 var f = (2, 3)
console.log(f) //3

// console.log(typeof function e (){})


/**
 * typeof,是唯一一个不报错的函数
 * (function o(){})不管里面是什么，都会变成表达式，它就不是函数定义了，o就会消失
 * 任何一个变量未经声明，就是用就会报错，但是在typeof 就不会报错，只会报undefined
 * 这里还需要知道typeof返回的是字符串类型，所以会1undefined 
 * 如果是1+undefined的话是NAN
 * 由此可以知道typeof返回的是字符串类型
 */
var x = 1
if (function o(){}) {
    x += typeof o
}
console.log(x) // 1undefined

var p = 0
console.log(typeof typeof p)


/**
 * 数组洗牌
 * @param {*} arr 
 */
function shuffle(arr) {
    
    for (var i = 0; i < arr.length - 1; i++) {
        var targetIndex = getRandom(0, arr.length - 1);
        // 优化
        // var targetIndex = Math.floor(Math.random() * arr.length)
        var temp = arr[i];
        arr[i] = arr[targetIndex];
        arr[targetIndex] = temp;
    }
    console.log(arr)
}

shuffle(arr1)

// 生成随机数
function getRandom(min, max) {
    // var targetIndex = Math.floor(Math.random() * arr.length)
    var dec = max - min;
    return Math.floor(Math.random() * dec + min);
}

/**
 * 递归：在函数内返回自身的函数，如此循环下去，最后必须要有一个出口结束循环
 */

 function mul(n) {
    if (n === 1) {
        return 1
    }
    return m * mul( n - 1 )
 }

 console.log(mul(5))    // 5*4*3*2*1    120



 /**
  * 创建对象的方法  大驼峰式命名：首字母大写
  * 
  * 函数创建属性格式    this.属性 = ""  
  * 在大括号里创建对象  属性： ""
  */
 var obj = {
     name: "zyw",
     fn: function (){
        // 操作属性都是通过this.属性 
        this.name = 'yy'
     }
 }

 function Obj (){
     this.name = "zyw"
     this.fn = function(){
        // 操作属性都是通过this.属性 
        this.name = 'yy'
     }
 }
