// MoveScript.js

cc.Class({
    extends: cc.Component,

    properties: {
        speed:3,
        maxX:0,
        minX:0,
        maxY:0,
        minY:0,
        hp:10,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.x = this.minX;
        this.node.y = this.minY;
    },

    update (dt) {
        let x = this.node.x;
        let y = this.node.y;
        let speed = this.speed;
        let minX = this.minX;
        let minY = this.minY;
        let maxX = this.maxX;
        let maxY = this.maxY;
        if(y === minY && x< maxX)
        {
            this.node.x += speed;
        }
        else if(y === minY && x> maxX)
        {
            this.node.x = maxX;
            this.node.y = minY;
        }
        else if(x === maxX && y<maxY)
        {
            this.node.y += speed;
        }
        else if(y > maxY && x === maxX)
        {
            this.node.x = maxX;
            this.node.y = maxY;
        }
        else if(x > minX && y === maxY)
        {
            this.node.x -= speed;
        }
        else if(x < minX && y === maxY)
        {
            this.node.x = minX;
            this.node.y = maxY;
        }
        else if(x === minX && y > minY)
        {
            this.node.y -= speed;
        }
        else if(x === minX && y < minY)
        {
            this.node.x = minX;
            this.node.y = minY;
        }
    },
});
