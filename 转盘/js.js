
// 获得btn 和 pan的DOM元素
// var pan = document.getElementsByClassName('pan')[0]
// var btn = document.getElementsByClassName('btn')[0]

//num
// var num

//动画是否结束
// var bool = true
// 让底盘转动
// function tableRun(num) {
//     var deg = num + 5 * 360
//     console.log(deg)
//     pan.style.transform = 'rotate(' + deg + 'deg)'
//     pan.style.transition = 'all 5s'
// }

// 监听底盘动画是否结束
// pan.addEventListener('webkitTransitionEnd', function () {
//     bool = true
//     // 判断角度对应的奖项
//     judgeFn(num)
//     // 为什么这里用num竟然可以往回转 ？？？ 
//     // 原因是动画的角度一直在计算， 当动画停下来后，角度 num + 360*5， 所以但你输入num的时候他就会转回之前的位置
//     pan.style.transform = 'rotate(' + num + 'deg)'
//     // 这里给transition设置none属性是不显示动画的过渡效果
//     pan.style.transition = 'none'
// })

//监听btn事件
// btn.addEventListener('click', function () {
//     // 生成随机数0~360 
//     var num = Math.floor(Math.random() * 360)
//     console.log(num)
//     tableRun(num)
// })

//监听btn事件
// btn.onclick = function () {
//     if (bool) {
//         // 生成随机数0~360 
//         num = Math.floor(Math.random() * 360)
//         console.log(num)
//         tableRun(num)
//         bool = false
//     }
// }

var pars  = {
    rotateNum : 8,
    trunbody:document.getElementsByClassName('wapper')[0],
    clkFn:clickFn,
    judge:judgeFn
}

function judgeFn(deg) {
    var str = ''
    if (deg > 180 && deg < 225) {
        str = '一等奖'
    } else if (deg > 0 && deg < 45) {
        str = '二等奖'
    } else if (deg > 90 && deg < 135 || deg > 270 && deg < 315) {
        str = '三等奖'
    } else if (deg > 45 && deg < 90 || deg > 135 && deg < 180 || deg > 225 && deg < 270 || deg > 315 && deg < 360) {
        str = '四等奖'
    }
    alert('恭喜你获得' + str)
}

function clickFn() {
    Lettery.tableRun()
}

var lettery = new Lettery(pars)