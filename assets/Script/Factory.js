// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
    extends: cc.Component,

    properties:()=>({
        // name:'name',
        // obj:{
        //     default:null,
            enumType: {
                default: 0,
                type: require('ObjType'),
            },
            // type: function (){
            //     // switch(enumType){
            //     //     case:1
            //     //     console.log('试试看');
            //     //     break;
            //     // }
            //     return 0;
            // }
        }
    }),

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },


    // update (dt) {},
});
