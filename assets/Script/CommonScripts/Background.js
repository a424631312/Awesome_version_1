// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var factory = require('Factory');
var objType = require('ObjType');

cc.Class({
    extends: factory,

    properties:()=> ({
        enumType:{
            default: objType.background,
            type: objType,
            override: true,
        },

        object: {
            default: [],
            type: cc.Node,
            override: true,
            visible: false,
        },

        imagesArray: {
            type: cc.Node,
            set(imagesArray) {
                this.object = imagesArray;
            },

            get(){
                return this.object;
            },

        },

        speed: 1,
        _staticY: 0,
    }),

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //初始化背景图的位置
        this.initBackgroundImagePositon(this.imagesArray);
    },

    // start () {

    // },

    update (dt) {
        //每一帧都更新背景位置
        this.moveBackgroundImagePosition(this.imagesArray, this.speed);
        this.checkBackgroundImagePosition(this.imagesArray);
    },

    //初始化背景图位置
    initBackgroundImagePositon (array){

        for (let i=0; i < array.length; ++i)
        {
            let boundingBox = array[i].getBoundingBox();
            if (!i)
            {
                this._staticY = boundingBox.yMin;
                console.log(this._staticY);
            }

            if (i+1 < array.length)
            {     
                let nextBackgroundImage = array[i+1];

                switch (i+1)
                {
                    case 1:
                    nextBackgroundImage.setPosition(boundingBox.xMin-2100, boundingBox.yMax);
                    break;
                    case 2:
                    nextBackgroundImage.setPosition(boundingBox.xMin+1000, boundingBox.yMax);
                    break;
                    default:
                    break;
                }

            }
        }
    },

    //按Y轴移动背景
    moveBackgroundImagePosition (array, speed){
        for (let i=0; i < array.length; ++i)
        {
            let object = array[i];
            object.y -= speed;
        }
    },

    //检查每帧是否需要重置位置
    checkBackgroundImagePosition (array){

            let boundingBox = array[0].getBoundingBox();
            if (boundingBox.yMax <= this._staticY)
            {
                let theBeyondImage = array.shift();
                array.push(theBeyondImage);

                if (array.length > 1)
                {
                   let theLastTwoImage = array[array.length-2];
                   let theLastTwoImageBoudningBox = theLastTwoImage.getBoundingBox();
                   theBeyondImage.y = theLastTwoImageBoudningBox.yMax;
                }
                
            }
    },
});
