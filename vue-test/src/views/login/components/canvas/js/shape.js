export default class shape {
  constructor(x, y, texte, context, H, W, gridY, gridX, type = 'ball', Particle, colors, utils) {
    this.x = x
    this.y = y
    this.size = 150
    this.context = context
    this.H = H
    this.W = W
    this.gridY = gridY
    this.gridX = gridX
    this.text = texte
    this.type = type
    this.placement = []
    this.Particle = Particle
    this.colors = colors
    this.utils = utils
  }
  getValue() {
    const context = this.context
    const utils = this.utils
    const H = this.H
    const W = this.W
    const gridX = this.gridX
    const gridY = this.gridY
    const type = this.type
    const Particle = this.Particle
    const colors = this.colors
    // draw the shape
    context.textAlign = 'center'
    context.font = this.size + 'px arial'
    context.fillText(this.text, this.x, this.y)

    var idata = context.getImageData(0, 0, W, H)
    var buffer32 = new Uint32Array(idata.data.buffer)

    for (var j = 0; j < H; j += gridY) {
      for (var i = 0; i < W; i += gridX) {
        if (buffer32[j * W + i]) {
          // 配置默认值，半径，重力，周期，速度，颜色
          var particle = new Particle(i, j, type, utils, 1, 0, 0.2, 0.1, colors, context)
          this.placement.push(particle)
        }
      }
    }

    context.clearRect(0, 0, W, H)
  }
}
