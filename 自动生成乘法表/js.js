/**
 * 生成乘法表
 * 创建初始化数据
 */
var data = {
    generate: document.getElementsByClassName('generate')[0],
    automatic: document.getElementsByClassName('automatic')[0],
    stop: document.getElementsByClassName('stop')[0],
    wapper:document.getElementsByClassName('wapper')[0],

    num: document.getElementById('num').value,
    td: document.createElement('td'),
    tr: document.createElement('tr'),
    click: function (type, fn, tag) {
        tag.addEventListener(type, fn)
    }
}

function result() {
    var  val = document.getElementById('num').value
    // 这里需要每秒刷新下wapper的显示， 这样才会有每一行出现一行的效果
    data.wapper.innerHTML = ''

    // var tr = document.createElement('tr')
    // var td = document.createElement('td')
    // var wapper = document.getElementsByClassName('wapper')[0]
    for (var i = 1; i <= val; i++) { //行
        /**
         * 这里必须声明var tr，这样才能实现每一次都可以添加一个标签， 否则无法实现每一个循环生成一个标签
         * 
         */ 
        var tr = document.createElement('tr')
        data.wapper.appendChild(tr)
        for (var j = 1; j <= i; j++) {//列
            var td = document.createElement('td')
            var cont = j + '*' + i + '=' + (j * i)
            var content = document.createTextNode(cont)
            td.appendChild(content)
            // data.td.appendChild(content)
            // console.log(cont)
            tr.appendChild(td)
            // data.tr.appendChild(data.td)
        }
    }
    /**
     * 无法实现每一个循环生成一个标签
     */
    // for (let i = 1; i <= val; i++) { //行
    //     data.wapper.appendChild(data.tr)
    //     for (let j = 1; j <= i; j++) {//列
            
    //         var cont = j + '*' + i + '=' + (j * i)
    //         var content = document.createTextNode(cont)
    //         data.td.appendChild(content)
    //         data.tr.appendChild(data.td)
    //         console.log(1)
    //     }
    // }
}

data.click('click', function(){
    result()
}, data.generate )

var timer

data.click('click', function(){
    timer = setInterval(() => {
        data.num++
        document.getElementById('num').value = data.num
        result() 
    }, 1000);
}, data.automatic)

data.click('click', function(){
    clearInterval(timer)
},data.stop)
