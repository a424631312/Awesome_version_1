// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var objType = require('ObjType');

var common = cc.Class({
    extends: cc.Component,

    properties:()=>({
        gameState:{
            default: objType.gameNotStartYet,
            type:objType,
        },
        delegate:{
            default: null,
            type: cc.Class,
        },
    }),

    //对象池操作
    //批量初始化对象池
    MPInitObjectPool: function(objArray){
        for (let i = 0; i < objArray.length; i++) {
            let obj = objArray[i];
            this.initObjetPool(enemy);
        }
    },

    //初始化对象池
    initObjetPool: function(objProperties){
        
    },

    //从对象池获取对象
    getFromObjectPool: function(nodePool, prefab, nodeParent){

    },

    //把对象放回对象池
    putBackToObjectPool: function(){

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {

    // },

    // update (dt) {},
});

module.exports = common;
