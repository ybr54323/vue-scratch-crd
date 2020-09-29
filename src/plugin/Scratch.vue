<template>
  <div>
    <canvas id="canvas">请换一个现代浏览器</canvas>
  </div>
</template>

<script>
import {Chicken, Tap} from './entity'

export default {
  name: "Scratch",
  props: {
    configParams: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    window.onload = () => {
      this.init(this.configParams)
    }
  },
  methods: {
    init({
           width: customWidth = 300,
           height: customHeight = 200,
           id = 'canvas',
           layerBgColor = 'gray',
           bottomBgColor = 'skyBlue',
           targetWidth = 50,
           targetHeight = 50,
           targetCount = 2,
           tapRadius = 20,
           customTexture = []
         } = {}) {
      const vm = this
      const canvas = document.querySelector(id)
      canvas.style.display = id === 'canvas' ? 'unset' : 'none'
      const ctx = canvas.getContext('2d')

      const virtual = document.createElement('canvas'); // 画布外画
      const virtualCtx = virtual.getContext('2d')

      const width = canvas.width = virtual.width = customWidth
      const height = canvas.height = virtual.height = customHeight

      let chickenTextureList = [] // 鸡图
      const chickenList = [] // 鸡的数组
      const tapTail = [] // 运动轨迹
      let rId // animation id

      let count = 0
      for (let i = 1; i <= 2; i++) {
        const url = require('../assets/chicken' + i + '.png')
        const img = new Image()
        img.src = url
        img.onload = () => {
          count++
          chickenTextureList.push(img)
          if (count === 2) {
            let isMouseDown = false
            bindMouseEvent()
            bindTouchEvent()
            loop()

            function bindTouchEvent() {
              const {offsetTop, offsetLeft} = canvas
              canvas.addEventListener('touchstart', (e) => {
                isMouseDown = true
                e.preventDefault()
              })
              canvas.addEventListener('touchend', (e) => {
                isMouseDown = false
                e.preventDefault()
              })
              canvas.addEventListener('touchcancel', (e) => {
                isMouseDown = false
                e.preventDefault()
              })
              canvas.addEventListener('touchmove', (e) => {
                if (!isMouseDown) return
                e.preventDefault()
                const {changedTouches: [touch]} = e
                const {pageX, pageY} = touch
                const offsetX = pageX - offsetLeft
                const offsetY = pageY - offsetTop
                console.log(offsetX, offsetY)
                for (let i = 0; i < tapTail.length; i++) { // handle repeat
                  if (tapTail[i].x === offsetX && tapTail[i].y === offsetY) {
                    return
                  }
                }
                tapTail.push(new Tap(offsetX, offsetY, {r: tapRadius, virtualCanvas: virtual, ctx}))
                for (let i = 0; i < chickenList.length; i++) {
                  const c = chickenList[i]
                  for (let i = 0; i < c.points.length; i++) {
                    const p = c.points[i]
                    p.createPath()
                    if (ctx.isPointInPath(offsetX, offsetY) && !p.active) {
                      p.active = true
                      c.activeCount++
                    }
                    ctx.closePath()
                  }
                  console.log(`总个数: ${c.points.length}\n点中个数: ${c.activeCount}`)
                  if (c.activeCount >= c.points.length) { // all active
                    c.finish = true
                  }
                }
              })
            }

            function bindMouseEvent() {
              canvas.addEventListener('mousedown', function (e) {
                isMouseDown = true
              })
              canvas.addEventListener('mouseup', function (e) {
                isMouseDown = false
              })

              canvas.addEventListener('mousemove', function (e) {
                if (!isMouseDown) return
                const {offsetX, offsetY} = e
                for (let i = 0; i < tapTail.length; i++) { // handle repeat
                  if (tapTail[i].x === offsetX && tapTail[i].y === offsetY) {
                    return
                  }
                }
                tapTail.push(new Tap(offsetX, offsetY, {r: tapRadius, virtualCanvas: virtual, ctx}))
                for (let i = 0; i < chickenList.length; i++) {
                  const c = chickenList[i]
                  for (let i = 0; i < c.points.length; i++) {
                    const p = c.points[i]
                    p.createPath()
                    if (ctx.isPointInPath(offsetX, offsetY) && !p.active) {
                      p.active = true
                      c.activeCount++
                    }
                    ctx.closePath()
                  }
                  console.log(`总个数: ${c.points.length}\n点中个数: ${c.activeCount}`)
                  if (c.activeCount >= c.points.length) { // all active
                    c.finish = true
                  }
                }
              })
            }

            function random(min, max) {
              return Math.random() * (max - min)
            }

            function loop() {
              if (!rId) {
                drawBase() // 画外画布画一次就够
              }
              const gradient = ctx.createLinearGradient(0, 0, width, height)
              gradient.addColorStop(0, "#333");
              gradient.addColorStop(0.2, "white");
              gradient.addColorStop(0.5, "#666");
              gradient.addColorStop(0.8, "white");
              gradient.addColorStop(1, "#333");
              ctx.fillStyle = gradient
              ctx.fillRect(0, 0, width, height)
              tapTail.forEach(t => {
                t.draw()
              })
              const allFinish = chickenList.every((c) => {
                return c.finish
              })
              if (allFinish) {
                cancelAnimationFrame(rId)
                vm.$emit('on-ok', true)
                return
              }
              rId = requestAnimationFrame(loop)
            }

            function drawBase() {
              let cWidth, cHeight
              cWidth = targetWidth
              cHeight = targetHeight

              const gradient = ctx.createLinearGradient(0, 0, width, 0)
              gradient.addColorStop(0, "#6495ED");
              gradient.addColorStop(0.1, "#AFEEEE");
              gradient.addColorStop(0.5, "#B0E0E6");
              gradient.addColorStop(0.9, "#AFEEEE");
              gradient.addColorStop(1, "#6495ED");
              virtualCtx.fillStyle = gradient
              virtualCtx.fillRect(0, 0, width, height)
              while (chickenList.length < targetCount) {
                const c = new Chicken(random(cWidth, width - cWidth), random(cHeight, height - cHeight), {
                  width: cWidth,
                  height: cHeight,
                  texture: chickenTextureList[Math.floor(Math.random() * 2)],
                  ctx,
                  virtualCtx
                })
                c.initPoints()
                chickenList.push(c)
              }
              console.log(chickenList)
              chickenList.forEach(c => {
                c.draw()
              })
            }
          }
        }
      }
    }

  }
}
</script>

<style scoped>

</style>
