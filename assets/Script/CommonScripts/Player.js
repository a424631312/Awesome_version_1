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
        
    }
    // start () {

    // },

    // update (dt) {},
});
