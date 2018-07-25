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

var enemySetting = cc.Class({
    name: 'enemySetting',
    properties:()=>({
        number: {
            default: cc.Integer,
            tooltip: '每个时间点出现的enemy的数量',
        },

        arrayType: {
            default: formationType.verSingleLineArray,
            type: formationType,
            tooltip: '每个时间点出现的enemy的阵型',
        },

        firstPositon: {
            default: new cc.Vec2(0, 0),
            tooltip: '首个enemy的位置（后面的enemy会根据首个enemy的位置和arrayType（阵型）自动排列）',
        },

        bornTime: {
            default: 0,
            tooltip: 'enemy出现的时间点(每个数组元素对应一个时间点,给定元素数值后enmey会在该时间点出现)',
        },
    }),
});

var enemyInArray = cc.Class({
    name: 'enemyInArray',
    properties:()=> ({
        name: '',        

        prefab: {
            default: null,
            type: cc.Prefab,
            tooltip: '敌人的类型',
        },

        enemySetting: {
            default: [],
            type: enemySetting,
            tooltip: '不同时间点出现的敌人的配置',
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
    }),

    // LIFE-CYCLE CALLBACKS:

    init(){
        common.MPInitObjectPool(this, this.enemys);//初始化对象池并生成node
        // common.getFromObjectPool(this, this.enemys);//从对象池中获取node
    },

    // onLoad () {
        //初始化对象池并生成node
        // common.MPInitObjectPool(this, this.enemys);
        
    // },

    bornEnemys: function(){

        for (let i=0;i<this.enemys.length;++i)
        {
            let enemy = this.enemys[i];
            
            for (let j=0;j<enemy.enemySetting.length;++j)
            {
                let setting = enemy.enemySetting[j];
                // let thisEnemyNode = this.getNodeFromPool(enemy);
                let lastEnemyNode = null;
                for (let k=0;k<setting.number;++k)
                {
                    let thisEnemyNode = common.getFromObjectPool(this, enemy);
                //把对象池中的node取出加入到this.node中，否则不能显示
                    this.node.addChild(thisEnemyNode);
                    // for(let l=0;l<this.node.children.length;++l)
                    // {
                        // let thisEnemyNode = this.node.children[l];

                        // if (enemy.name === thisEnemyNode.name)
                        // {
                            // thisEnemyNode.getComponent('Enemy').init(); //(重新)初始化生命值等数值

                            this.creatEnemysArray(lastEnemyNode, thisEnemyNode, setting.firstPositon, setting.arrayType);
                            lastEnemyNode = thisEnemyNode;

                        //     break;
                        // }
                    // }
                }
            }

        }
    },

    creatEnemysArray: function(lastEnemy, theEnemy, position, arrayType){
        if (lastEnemy && lastEnemy.name === theEnemy.name)
        {
            switch(arrayType)
            {
                case formationType.gooseTypeArray://雁型阵
                {
                    //暂时搁置
                    // creatCount++;
                    theEnemy.setPosition(cc.v2(position.x, lastEnemy.y+40));
                }
                break;
                case formationType.horSingleLineArray://一字长蛇阵
                {
                    theEnemy.setPosition(cc.v2(lastEnemy.x+40, position.y));
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
            //第一个设置位置的enemy
            theEnemy.setPosition(position);
            //根据生成的个数判断位置
            // creatCount = 1;
        }
    },

    enemyMoves: function(enemy){

    },

    destoryEnemys: function(){

    },

    // start () {

    // },

    // update (dt) {},
});

module.exports = MPEnemys;
