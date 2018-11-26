
//导入模块
var Global = require("MainScript");
cc.Class({
    extends: cc.Component,

    properties: {
        bulletPrefab: cc.Prefab,
    },

    // onLoad () {},

    start () {
        this.schedule(this.shoot,1);
    },

    shoot:function(){
        let node = this.node;
        let arr = Global.monsterArray;
        for (let monster of arr)
        {
            if(Math.abs(node.x - monster.x) <= 100 && Math.abs(node.y - monster.y) <= 100)
            {
                let bullet = cc.instantiate(this.bulletPrefab);
                let script = bullet.getComponent("BulletScript")
                script.target = monster;
                bullet.active = true;
                let node = this.node.parent;
                node.addChild(bullet);
                if(bullet.node)
                {
                    bullet.node.setPosition(this.node.x + this.width/2,this.node.y + this.height/2);
                    console.log("x:" + (this.node.x + this.width/2) + "y:" + (this.node.y + this.height/2))
                }
                break;
            }
        }
    },

    update (dt) {
    },
});
