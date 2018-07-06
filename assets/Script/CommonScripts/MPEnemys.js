// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var formationType = require('ObjType');

var enemyInArray = cc.Class({
    name: 'enemyInArray',
    properties:()=> ({
        number: {
            default: 0,
            tooltip: '敌人的数量',
        },

        arrayType: {
            default: formationType.horSingleLineArray,
            type: formationType,
            tooltip: '阵型',
        },
        prefab: {
            default: null,
            type: cc.Prefab,
            tooltip: '敌人的类型',
        },
    }),
});

cc.Class({
    extends: cc.Component,

    properties:()=> ({
        enemys: {
            default: [],
            type: enemyInArray,
        },
    }),

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
