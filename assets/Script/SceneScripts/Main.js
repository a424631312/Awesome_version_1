// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var MPEnemys = require('MPEnemys');
// var MPBullets = require('MPBullets');
// var MPItems = require('MPItems');

cc.Class({
    extends: cc.Component,

    properties:()=> ({
        enemyMaker:{
            default: null,
            type: MPEnemys,
        },

        bulletMaker:{
            default: null,
            // type: MPBullets,
        },

        itemMaker:{
            default: null,
            // type: MPItems,
        },

    }),

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.enemyMaker.init();
    },

    start () {
        this.enemyMaker.bornEnemys(); //初始化后均默认垂直下移
        // this.enemyMaker.enemyMoves(); //控制移动（移动轨迹）
    },

    // update (dt) {},
});
