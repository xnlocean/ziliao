function Ball(raduis,color){
	raduis === undefined ? raduis = 40 : raduis;
	color === undefined ? color = '#00ff00' : color;
	this.x = 0;
	this.y = 0;
	this.vx = 0;
    this.vy = 0;
    this.radius = raduis;
    this.rotation = 0;
    this.mass = 1;
    this.scaleX = 1;
    this.scaleY = 1;
    this.name = "";
    this.color = utils.parseColor(color);
    this.lineWidth = 1;
    this.isSelected = false;
	this.isChiled = false;
	this.font = "16px arial";
	this.textNum = "";
}

Ball.prototype.draw = function(context){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX,this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(0,0,this.radius,0,Math.PI*2,false);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}

Ball.prototype.tests = function(context){
	context.save();
    var padding = 0;
    context.font = this.font;
    context.textAlign = "center";
    context.textBaseline = "middle";
    //绘制ToolTip文字
    context.fillStyle = '#000';
	context.rotate(this.rotation);
    context.fillText(this.textNum, this.x, this.y);
    context.restore();
}
Ball.prototype.getBounds = function(){
	return {
		x: this.x - this.radius,
		y: this.y - this.radius,
		width: this.radius*2,
		height: this.radius*2
	};
}
