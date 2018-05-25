export default class utils {
  constructor(W, H) {
    this.W = W
    this.H = H
  }
  norm(value, min, max) {
    return (value - min) / (max - min)
  }

  lerp(norm, min, max) {
    return (max - min) * norm + min
  }

  map(value, sourceMin, sourceMax, destMin, destMax) {
    return utils.lerp(utils.norm(value, sourceMin, sourceMax), destMin, destMax)
  }

  clamp(value, min, max) {
    return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max))
  }

  distance(p0, p1) {
    var dx = p1.x - p0.x
    var dy = p1.y - p0.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  distanceXY(x0, y0, x1, y1) {
    var dx = x1 - x0
    var dy = y1 - y0
    return Math.sqrt(dx * dx + dy * dy)
  }

  circleCollision(c0, c1) {
    return utils.distance(c0, c1) <= c0.radius + c1.radius
  }

  circlePointCollision(x, y, circle) {
    return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius
  }

  pointInRect(x, y, rect) {
    return utils.inRange(x, rect.x, rect.x + rect.radius) &&
      utils.inRange(y, rect.y, rect.y + rect.radius)
  }

  inRange(value, min, max) {
    return value >= Math.min(min, max) && value <= Math.max(min, max)
  }

  rangeIntersect(min0, max0, min1, max1) {
    return Math.max(min0, max0) >= Math.min(min1, max1) &&
      Math.min(min0, max0) <= Math.max(min1, max1)
  }

  rectIntersect(r0, r1) {
    return utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
      utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height)
  }

  degreesToRads(degrees) {
    return degrees / 180 * Math.PI
  }

  radsToDegrees(radians) {
    return radians * 180 / Math.PI
  }

  randomRange(min, max) {
    return min + Math.random() * (max - min)
  }

  randomInt(min, max) {
    return min + Math.random() * (max - min + 1)
  }

  getmiddle(p0, p1) {
    var x = p0.x
    var x2 = p1.x
    var middlex = (x + x2) / 2
    var y = p0.y
    var y2 = p1.y
    var middley = (y + y2) / 2
    var pos = [middlex, middley]

    return pos
  }

  getAngle(p0, p1) {
    var deltaX = p1.x - p0.x
    var deltaY = p1.y - p0.y
    var rad = Math.atan2(deltaY, deltaX)
    return rad
  }
  inpercentW(size) {
    return (size * this.W) / 100
  }
  inpercentH(size) {
    return (size * this.H) / 100
  }
}
