const setting = { //配置参数
    // round = 1,  // 粒子半径
    // count = 80, //粒子数量
}
const defaults = {
    // round = 1,  // 粒子半径
    count = 80, //粒子数量
    background = "#FFFFFF"
}

const WIDTH = document.documentElement.clientWidth;
const HEIGHT = document.documentElement.clientHeight;
const canvas = document.createElement('canvas');
const content = ctx.getContext('2d'),

initRoundPopulation = 80;
class Round_item {
    constructor(index,x,y){
        this.index = index;
        this.x = x;
        this.y = y;
        this.r = Math.random() * 2 + 1;
        this.color = "rgba(255,255,255," + (Math.floor(Math.random() * 10) + 1) / 10 / 2; + ")";
    }
}

Round_item.prototype.draw = function () {
    content.fillStyle = this.color;
    content.shadowBlur = this.r * 2;
    content.beginPath();
    content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    content.closePath();
    content.fill();
}