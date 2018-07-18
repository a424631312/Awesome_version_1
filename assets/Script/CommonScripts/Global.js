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

var common = {
    // extends: cc.Component,

    // properties:()=>({
    gameState:{
        default: objType.gameNotStartYet,
        type:objType,
    },

    // }),

    //对象池操作
    //批量初始化对象池
    MPInitObjectPool: function(messager, objArray){

        for (let i=0; i<objArray.length; i++) {
            let obj = objArray[i];
            this.initObjetPool(messager, obj);
        }
    },

    //单个初始化对象池
    initObjetPool: function(messager, obj){
        let objName = obj.name + 'Pool';
        messager[objName] = new cc.NodePool();
        let number = obj.number;
        for (let i=0; i<number; ++i)
        {
            let node = cc.instantiate(obj.prefab);
            messager[objName].put(node);
        }
    },

    //从对象池获取对象
    getFromObjectPool: function(messager, objArray){

        for (let i=0;i<objArray.length;++i)
        {
            let node = null;
            let obj = objArray[i];
            let poolName = obj.name + 'Pool';
            let pool = messager[poolName];
            for (let j=0;j<obj.number;++j)
            {
                if (pool.size()>0)
                {
                    node = pool.get();
                    node.name = obj.name;
                    node.arrayType = obj.arrayType;
                }
                else
                {
                    node = cc.instantiate(obj.prefab);
                }
                messager.node.addChild(node);
            }
        }

    },

    //把对象放回对象池
    putBackToObjectPool: function(messager, objArray){
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {

    // },

    // start () {

    // },

    // update (dt) {},
};

module.exports = common;
