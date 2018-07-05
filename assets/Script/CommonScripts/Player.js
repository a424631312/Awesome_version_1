// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var character = require('Character');
var objType = require('ObjType');

cc.Class({
    extends: character,

    properties:()=> ({

        enumType:{
            default: objType.player,
            override: true,
        },

        object: {
                default: null,
                type: cc.Node,
                override: true,
            },
    }),

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('touchmove', this.dragCallback, this);
    },

    dragCallback(event){ 
        //event类型为cc.Event,可获取到拖动位置
        let localLocation = event.getLocation();
        //把节点坐标转成父节点坐标
        let globalLocation = this.object.parent.convertToNodeSpaceAR(localLocation);
        //飞机不移出屏幕 
        var minX = -this.object.parent.width/2+this.object.width/2;
        var maxX = -minX;
        var minY = -this.object.parent.height/2+this.object.height/2;
        var maxY = -minY;
        if (globalLocation.x< minX){
            globalLocation.x = minX;
        }
        if (globalLocation.x>maxX){
            globalLocation.x = maxX;        
        }
        if (globalLocation.y< minY){
            globalLocation.y = minY;
        }
        if (globalLocation.y> maxY){
            globalLocation.y = maxY;
        }
        //设置节点在父节点的位置
        this.object.setPosition(globalLocation);
    
    }
    // start () {

    // },

    // update (dt) {},
});
