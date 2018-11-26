// BulletScript.js

cc.Class({
    extends: cc.Component,

    properties: {
        speed:5,
        attack:1,
        target:cc.Sprite,
    },

    start () {
        let ctx = this.getComponent(cc.Graphics);
        ctx.circle(2.5,2.5,2.5)
        ctx.stroke();
        ctx.fill();
    },

    update (dt) {
        // if(!this.parent)return;
        let x = this.target.x;
        let y = this.target.y;
        if(this.node.x !== x && this.node.y !== y)
        {
            this.moveSelf();
        }
        else
        {
            this.node.destroy();
        }
    },

    moveSelf:function () {
        let speed = this.speed;
        let x = this.target.x;
        let y = this.target.y;
        if(this.node.x > x)
        {
            if((this.node.x - x) > speed)
            {
                this.node.x -= speed;
            }
            else
            {
                this.node.x = x;
            }
        }
        if(this.node.x < x)
        {
            if((x - this.node.x) > speed)
            {
                this.node.x += speed;
            }
            else
            {
                this.node.x = x;
            }
        }
        if(this.node.y > y)
        {
            if((this.node.y - y) > speed)
            {
                this.node.y -= speed;
            }
            else
            {
                this.node.y = y;
            }
        }
        if(y > this.node.y)
        {
            if((y - this.node.y) > speed)
            {
                this.node.y += speed;
            }
            else
            {
                this.node.y = x;
            }
        }
    }
});
