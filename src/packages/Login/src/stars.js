/*
 * @Author: limin
 * @Date: 2018-08-15 15:34:10
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-16 10:51:47
 */
var _this = null
var mouseX = 0
var mouseY = 0
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
              window.setTimeout(callback, 1000 / 60)
            }
})()
class Star {
  constructor(canvas, starCount = 200, lineColor = 'white', mouseLineColor = 'red') {
    this.canvas = document.getElementById(canvas)
    this.canvas.width = document.documentElement.clientWidth
    this.canvas.height = document.documentElement.clientHeight
    this.ctx = this.canvas.getContext('2d')
    this.balls = []
    this.starCount = starCount
    this.lineColor = lineColor
    this.mouseLineColor = mouseLineColor
    _this = this
    this.timer = null
    this.init()
  }
}
Star.prototype = {
  init: function() {
    this.balls = []
    // 添加鼠标移动事件
    // 记录鼠标移动时的mouseX坐标
    this.canvas.onmousemove = function(e) {
      var ev = event || e
      mouseX = ev.offsetX
      mouseY = ev.offsetY
    }
    for (var i = 0; i < this.starCount; i++) {
      var ball = new Ball(this.ctx, this.canvas)
      this.balls.push(ball)
    }
  },
  drawLine: function() {
    var iBall = null
    var jBall = null
    var line = null
    for (var i = 0; i < this.balls.length; i++) {
      iBall = this.balls[i]
      iBall.draw()
      iBall.move()
      for (var j = 0; j < this.balls.length; j++) {
        if (i !== j) {
          jBall = this.balls[j]
          line = new Line(this.ctx, iBall, jBall, this.lineColor)
          line.draw()
        }
      }
    }
  },
  // 使用鼠标移动划线
  mouseLine: function() {
    var ball = null
    var line = null
    for (var i = 0; i < this.balls.length; i++) {
      ball = this.balls[i]
      line = new Line(this.ctx, ball, { 'x': mouseX, 'y': mouseY, 'color': this.mouseLineColor }, this.lineColor)
      line.draw()
    }
  },
  run: function() {
    _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height)
    // 鼠标移动绘制线
    _this.mouseLine()
    // 小球与小球之间自动画线
    _this.drawLine()
    // 使用关键帧动画，不断的绘制和清除
    _this.timer = window.requestAnimFrame(_this.run)
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    cancelAnimationFrame(this.timer)
    this.timer = null
    this.canvas = null
    this.balls = []
    _this = null
    this.ctx = null
  }
}
class Line {
  constructor(ctx, ball1, ball2, lineColor) {
    this.ctx = ctx
    this.ball1 = ball1
    this.ball2 = ball2
    this.lineColor = lineColor
  }
}
Line.prototype.draw = function(ball1 = this.ball1, ball2 = this.ball2) {
  if (Math.sqrt(Math.pow((ball1.x - ball2.x), 2) + Math.pow((ball1.y - ball2.y), 2)) < 80) {
    const color = this.creatColor()
    this.ctx.beginPath()
    this.ctx.moveTo(ball1.x, ball1.y)
    this.ctx.lineTo(ball2.x, ball2.y)
    this.ctx.strokeStyle = color
    this.ctx.globalAlpha = 0.8
    this.ctx.stroke()
    this.ctx.restore()
  }
}

Line.prototype.creatColor = function(ball1 = this.ball1, ball2 = this.ball2) {
  const color = this.ctx.createLinearGradient(ball1.x, ball1.y, ball2.x, ball2.y)
  color.addColorStop(0, ball1.color)
  color.addColorStop(0.5, this.lineColor)
  color.addColorStop(1, ball2.color)
  return color
}

// 创建小球的构造函数
class Ball {
  constructor(ctx, canvas) {
    this.x = randomNum(3, canvas.width - 3)
    this.y = randomNum(3, canvas.height - 3)
    this.r = randomNum(1, 3)
    this.color = randomColor()
    this.speedX = randomNum(-3, 3) * 0.2
    this.speedY = randomNum(-3, 3) * 0.2
    this.ctx = ctx
    this.canvas = canvas
  }
}
Ball.prototype = {
  // 绘制小球
  draw: function() {
    this.ctx.beginPath()
    this.ctx.globalAlpha = 1
    this.ctx.fillStyle = this.color
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    this.ctx.fill()
  },
  // 小球移动
  move: function() {
    this.x += this.speedX
    this.y += this.speedY
    // 为了合理性,设置极限值
    if (this.x <= 3 || this.x > this.canvas.width - 3) {
      this.speedX *= -1
    }
    if (this.y <= 3 || this.y >= this.canvas.height - 3) {
      this.speedY *= -1
    }
  }
}
// 随机函数
function randomNum(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m)
}
// 随机颜色
function randomColor() {
  return 'rgb(' + randomNum(0, 255) + ',' + randomNum(0, 255) + ',' + randomNum(0, 255) + ')'
}
export default Star
