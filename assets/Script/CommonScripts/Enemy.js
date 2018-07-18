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

        enumType: {
            default: objType.enemy,
            override: true,
        },

        arrayType: {
            default: objType.verSingleLineArray,
            type: objType,
        },

        object: {
            default: null,
            type: cc.Node,
            override: true,
        },

        HP: 0, //生命值

        attackSpeed: 0, //攻击速度（频率）

        rebornSpeed: 0, //重生速度

        moveSpeed: 0, //移动速度

        bornMoment: 0, //出生时间
    }),

    // LIFE-CYCLE CALLBACKS:

    init(){

    },
    
    // onLoad () {

    // },

    // start () {

    // },

    // update (dt) {},
});
