
//导出为引用模块
module.exports = {
    monsterArray: [],
};

var Global = require("MainScript");
cc.Class({
    extends: cc.Component,

    properties: {
        monsterPrefab: cc.Prefab,
        towerPrefab: cc.Prefab,
        graphics:cc.Graphics,
        space:20,
        width:20,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let space = this.space;
        let rap = space + this.width;
        let ctx = this.graphics.getComponent(cc.Graphics);
        ctx.clear();
        console.log(ctx);
        let height = this.node.height;
        let width = this.node.width;
        ctx.moveTo(space,space);
        ctx.lineTo(space,height - space);
        ctx.lineTo(width - 100,height - space);
        ctx.lineTo(width - 100,space);
        ctx.lineTo(space,space);

        ctx.moveTo(rap,rap);
        ctx.lineTo(rap,height - rap);
        ctx.lineTo(width - 100 - this.width,height - rap);
        ctx.lineTo(width - 100 - this.width,rap);
        ctx.lineTo(rap,rap);
        let fillColor = cc.Color.RED;//声明一个颜色变量
        fillColor.a = 200;//添加透明度
        ctx.strokeColor = fillColor;
        ctx.stroke();
        this.schedule(this.addMonster,1);
    },

    onLoad: function () {
        // add key down and key up event
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        this.node.on(cc.Node.EventType.MOUSE_DOWN,this.onClick,this);
    },

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onClick:function (event) {
        let tower = cc.instantiate(this.towerPrefab);
        tower.active = true;
        this.node.addChild(tower);
        let temp = event.getLocation();
        tower.x = temp.x;
        tower.y = temp.y;
        console.log("tower.x:" + tower.x);
        console.log("tower.y:" + tower.y);
    },

    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                this.mst.node.y += 4;
                break;
            case cc.macro.KEY.s:
                this.mst.node.y -= 4;
                break;
            case cc.macro.KEY.a:
                this.mst.node.x -= 4;
                break;
            case cc.macro.KEY.d:
                this.mst.node.x += 4;
                break;
        }
    },

    onKeyUp: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                console.log('release a key');
                break;
        }
    },

    update (dt) {
    },

    addMonster:function () {
        let monster = cc.instantiate(this.monsterPrefab);
        monster.active = true;
        this.node.addChild(monster);
        Global.monsterArray.push(monster);
        let count = Global.monsterArray.indexOf(monster);
        monster.name = count.toString();
    },
});
