// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var ObjType = cc.Enum({
    //大类别
    character: 1 << 0,
    item: 1 << 1,

    //小类别
    //动态对象
    player: 1 << 2,
    enemy: 1 << 3,
    bullet: 1 << 4,
    bomb: 1 << 5,
    background: 1 << 6,
    //静态对象
    // settingButton: 1 << 6,
    // bombButton: 1 << 7,
    // scoreLabel: 1 << 8,
    
});

module.exports = ObjType;
