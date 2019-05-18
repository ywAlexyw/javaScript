var monthText = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
var dayText = ["一号", "二号", "三号", "四号", "五号", "六号", "七号", "八号", "九号", "十号", "十一号", "十二号", "十三号", "十四号", "十五号", "十六号", "十七号", "十八号", "十九号", "二十号", "二十一号", "二十二号", "二十三号", "二十四号", "二十五号", "二十六号", "二十七号", "二十八号", "二十九号", "三十号", "三十一号"];
var weekText = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var hourText = ["零点", "一点", "两点", "三点", "四点", "五点", "六点", "七点", "八点", "九点", "十点", "十一点", "十二点", "十三点", "十四点", "十五点", "十六点", "十七点", "十八点", "十九点", "二十点", "二十一点", "二十二点", "二十三点"];
var minuteText = ["一分", "二分", "三分", "四分", "五分", "六分", "七分", "八分", "九分", "十分",
    "十一分", "十二分", "十三分", "十四分", "十五分", "十六分", "十七分", "十八分", "十九分", "二十分",
    "二十一分", "二十二分", "二十三分", "二十四分", "二十五分", "二十六分", "二十七分", "二十八分", "二十九分", "三十分",
    "三十一分", "三十二分", "三十三分", "三十四分", "三十五分", "三十六分", "三十七分", "三十八分", "三十九分", "四十分",
    "四十一分", "四十二分", "四十三分", "四十四分", "四十五分", "四十六分", "四十七分", "四十八分", "四十九分", "五十分",
    "五十一分", "五十二分", "五十三分", "五十四分", "五十五分", "五十六分", "五十七分", "五十八分", "五十九分", "六十分"];
var secondsText = ["一秒", "二秒", "三秒", "四秒", "五秒", "六秒", "七秒", "八秒", "九秒", "十秒",
    "十一秒", "十二秒", "十三秒", "十四秒", "十五秒", "十六秒", "十七秒", "十八秒", "十九秒", "二十秒",
    "二十一秒", "二十二秒", "二十三秒", "二十四秒", "二十五秒", "二十六秒", "二十七秒", "二十八秒", "二十九秒", "三十秒",
    "三十一秒", "三十二秒", "三十三秒", "三十四秒", "三十五秒", "三十六秒", "三十七秒", "三十八秒", "三十九秒", "四十秒",
    "四十一秒", "四十二秒", "四十三秒", "四十四秒", "四十五秒", "四十六秒", "四十七秒", "四十八秒", "四十九秒", "五十秒",
    "五十一秒", "五十二秒", "五十三秒", "五十四秒", "五十五秒", "五十六秒", "五十七秒", "五十八秒", "五十九秒", "六十秒"];

//全局clock标签
var clock

// 是否成圆
var isCircle = false

// 存数据
var monthList = [],
    dayList = [],
    weekList = [],
    hourList = [],
    minuteList = [],
    secondsList = []

// 存放文字内容 和 页面显示标签内容
var textSet = [
    [monthText, monthList],
    [dayText, dayList],
    [weekText, weekList],
    [hourText, hourList],
    [minuteText, minuteList],
    [secondsText, secondsList]
]

window.onload = function () {
    // 添加数据
    init()
    // 更新时间
    setInterval(() => {
        runTime()
    }, 100)
    // 先确认原先位置
    changePosition()
    // 变成圆形
    setTimeout(() => {
        changeCircle()
    }, 2000);
}

function init() {
    // 获取clock节点
    clock = document.getElementById('clock')
    // 循环并赋值添加
    for (var i = 0; i < textSet.length; i++) {
        for (var j = 0; j < textSet[i][0].length; j++) {
            var temp = createLabel(textSet[i][0][j])
            // console.log(temp)
            clock.appendChild(temp)
            // 将生成的标签添加到list
            textSet[i][1].push(temp)
        }
    }
    // console.log(textSet[0][1])
    // console.log(textSet[0][0])
}

function createLabel(text) {
    var div = document.createElement('div')
    div.innerText = text
    div.classList.add('label')
    return div
}

function runTime() {
    // 获取当前时间
    var now = new Date()
    // 获取月份，日期，星期，小时，分，秒
    var month = now.getMonth()
    var day = now.getDate()
    var week = now.getDay()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var seconds = now.getSeconds()
    // 删除所有标签的颜色#fff
    initStyle()
    // 存放所有数据
    var nowTime = [month, day - 1, week, hour, minute, seconds]
    for (var i = 0; i < nowTime.length; i++) {
        var num = nowTime[i]
        textSet[i][1][num].style.color = '#fff'
    }

    // 判断是否成圆
    if (isCircle) {
        // 获取圆心的位置
        var widthMid = document.body.clientWidth / 2;
        var heightMid = document.body.clientHeight / 2;
        // 确定所有元素到圆心的位置 ==> R（所有半径）
        for (var i = 0; i < textSet.length; i++) {
            for (var j = 0; j < textSet[i][1].length; j++) {
                // 计算所有半径
                var r = (i + 1) * 35 + 50 * i;
                // 计算每一个平均的角度  再将每一个单位对齐 然后转化成弧度
                // 这里如果不'-nowTime[i]'的话无法完成每一个单元水平对齐        这里-是转几个元素的角度
                var deg = 360 / textSet[i][1].length * (j - nowTime[i])
                // console.log(deg)
                // console.log(textSet[i][1].length + '-' + j +'-' +nowTime[i] + '-' + deg)
                // console.log(deg)
                // 根据角度转换成弧度，确定位置
                var x = widthMid + r * Math.sin(deg * Math.PI / 180)
                var y = heightMid - r * Math.cos(deg * Math.PI / 180)
                // 给每一个标签位置
                var temp =  textSet[i][1][j];
                //这里要注意下"deg)" 在使用rotate属性必须要有 rotate（x deg） 添加"-90"，是为了每一个元素都可以水平放置
                temp.style.transform = 'rotate(' + (-90 + deg ) + 'deg)'    
                temp.style.left = x + 'px'
                temp.style.top = y + 'px'
            }
            // console.log('                                            ')
        }
    }
}

function initStyle() {
    // 获取label所有标签
    var initLabel = document.getElementsByClassName('label')
    // 循环并全部初始化
    for (var i = 0; i < initLabel.length; i++) {
        initLabel[i].style.color = '#4d4d4d'
    }
}

function changePosition() {
    for (let i = 0; i < textSet.length; i++) {
        for (let j = 0; j < textSet[i][1].length; j++) {
            // 循环并获得每一个标签在窗口的位置
            // 注意这里有一个闭包的问题，所以在声明tempX,tempY时候要用let
            let tempY = textSet[i][1][j].offsetTop + 'px'
            let tempX = textSet[i][1][j].offsetLeft + 'px'
            // console.log(tempY + '-' +tempX)
            // 下面出现所有元素挤到最后一个元素的位置，是闭包导致
            // 如果不算出每一个元素的位置的话，就无法完成，动画 ==> 圆  的一个过度效果
            setTimeout(function () {
                textSet[i][1][j].style.position = "absolute";
                textSet[i][1][j].style.left = tempX;
                textSet[i][1][j].style.top = tempY;
            }, 50);
        }
    }
}

function changeCircle() {
    isCircle = true
    // 将父级旋转90°，让元素在水平方向上显示
    clock.style.transform = 'rotate(90deg)'
}