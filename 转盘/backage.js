(function (win) {
    // 设置默认属性，防止报错
    /**
     * 配置默认的方法和属性
     */
    var defaultPars = {
        rotateNum: 5,
        trunbody: document.getElementsByTagName('body'),
        clickEvent: function () { },
        judge: function () { }
    }
    // 对象赋值，并执行初始化函数
    function Lettery() {
        //obj.assign(参数1， 参数2) 将参数2复制到参数1，有相同的属性，就覆盖，没有就添加
        this.pars = Object.assign(defaultPars, pars) // 赋值，覆盖
        this.bool = true
        // 初始化事件
        this.init()
    }

    // 做接口，链接
    win.Lettery = Lettery

    // 给对象原型添加方法init()
    Lettery.prototype.init = function () {
        // 先将this保存下来，给之后的函数使用
        var self = this
        // 获取btn 和 pan的标签
        this.pars.btn = this.pars.trunbody.getElementsByClassName('btn')[0]
        this.pars.wheels = this.pars.trunbody.getElementsByClassName('pan')[0]
        // 监听点击事件
        this.pars.btn.addEventListener('click', function () {
            if (self.bool) {
                self.pars.num = Math.floor(Math.random() * 360)
                self.tableRun(self.pars.num)
                self.bool = false
            }
        })
        // 监听动画结束
            this.pars.wheels.addEventListener('webkitTransitionEnd', function () {
                self.bool = true
                self.pars.judge(self.pars.num)
                self.pars.wheels.style.transform = 'rotate(' + self.pars.num + 'deg)'
                self.pars.wheels.style.transition = 'none'
            })
    }

    // 给对象原型添加方法底盘转动turnRun()
    Lettery.prototype.tableRun = function (num) {
        var deg = num + this.pars.rotateNum * 360
        this.pars.wheels.style.transform = 'rotate(' + deg + 'deg)'
        this.pars.wheels.style.transition = 'all 5s'
        this.pars.num = num
    }
})(window)