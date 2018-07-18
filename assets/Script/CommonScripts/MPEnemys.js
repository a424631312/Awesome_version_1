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
var common = require('Global');

var enemyInArray = cc.Class({
    name: 'enemyInArray',
    properties:()=> ({
        name: {
            default: '',
        },

        number: {
            default: cc.Integer,
            tooltip: '敌人的数量',
        },

        arrayType: {
            default: formationType.verSingleLineArray,
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

var MPEnemys = cc.Class({
    extends: cc.Component,

    properties:()=> ({
        enemys: {
            default: [],
            type: enemyInArray,
        },

        // emenyBornMoment: [cc.Integer],

        // itemBornMoment: [cc.Integer],
    }),

    // LIFE-CYCLE CALLBACKS:

    init(){
        common.MPInitObjectPool(this, this.enemys);//初始化对象池并生成node
        common.getFromObjectPool(this, this.enemys);//从对象池中获取node
    },

    // onLoad () {
        //初始化对象池并生成node
        // common.MPInitObjectPool(this, this.enemys);
        
    // },

    bornEnemys: function(enemyType, position){

        for(let i=0;i<this.node.children.length;++i)
        {
            let thisEnemyNode = this.node.children[i];
            let lastEnemyNode = null;
            if ((i-1)!=0)
            {
                lastEnemyNode = this.node.children[i-1];
            }
            this.creatEnemysArray(lastEnemyNode, thisEnemyNode, position);

            // thisEnemyNode.setPosition(cc.v2(1000,1000+i*40));
            // thisEnemyNode.getComponent('Enemy').init();
            
        }
    },

    creatEnemysArray: function(lastEnemy, theEnemy, position){
        if (lastEnemy && lastEnemy.name === theEnemy.name)
        {
            switch(theEnemy.arrayType)
            {
                case formationType.gooseTypeArray://雁型阵
                {

                }
                break;
                case formationType.horSingleLineArray://一字长蛇阵
                {

                }
                break;
                case formationType.verSingleLineArray://单纵阵
                {
                    theEnemy.setPosition(cc.v2(position.x, lastEnemy.y+40));
                }
                break;
            }
        }
        else
        {
            theEnemy.setPosition(position);
        }
    },


    destoryEnemys: function(){

    },

    // start () {

    // },

    // update (dt) {},
});

module.exports = MPEnemys;
