<template>
  <div>
    <canvas id="canvas"></canvas>
    <el-input v-model="message" placeholder="请输入内容"></el-input>
    <input v-model="message" placeholder="请输入账号" type="text" id="message" @change="changes()" >
  </div>
</template>

<script>
import utils from './js/utils.js'
import Particle from './js/particles.js'
import Shape from './js/shape.js'

export default {
  name: 'first',
  props: {
    text: null
  },
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.getList(this.message)
  },
  methods: {
    changes() {
      this.getList(this.message)
    },
    getList(message) {
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')
      const W = canvas.width = window.innerWidth
      const H = canvas.height = window.innerHeight
      const gridY = 7
      const gridX = 7
      const type = 'ball'
      const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722'
      ]
      const word = new Shape(W / 2, H / 2, message, context, H, W, gridY, gridX, type, Particle, colors, utils)
      word.getValue();

      (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas)
        context.clearRect(0, 0, W, H)

        for (var i = 0; i < word.placement.length; i++) {
          word.placement[i].update()
        }
      }())
    }
  }
}
</script>
<style lang="less" scoped>
  @import './css/canvas.less';
</style>


