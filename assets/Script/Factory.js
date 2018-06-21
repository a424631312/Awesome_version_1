// // Learn cc.Class:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// // Learn Attribute:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var objType = require('ObjType');

cc.Class({
    extends: cc.Component,

    properties:()=>({

            enumType: {
                default: 0,
                type: objType,
                tooltip: "需要初始化的是什么（被引用时用作判断）",
            },
            
            object: {
                default: null,
                tooltip: "需要初始化的类型（节点或perfab）",
            },
            //初始化个数
            objectNumber: {
                default: 0,
                tooltip: "需要初始化的数量（初始化几个）",
            },
    }),

//     // // LIFE-CYCLE CALLBACKS:

    // onLoad () {

    // },

    // start () {

    // },


//     // update (dt) {},
});
