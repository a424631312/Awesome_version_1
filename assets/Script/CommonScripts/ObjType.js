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
    //阵法
    gooseTypeArray: 1 << 7, //雁型阵
    horSingleLineArray: 1 << 8, //一字长蛇阵
    verSingleLineArray: 1 << 9, //单纵阵
    horSingleLineMutiArray: 1 << 10, //多个一字长蛇阵
    echelonLeftArray: 1 << 11, //斜线阵（往左斜）
    echelonRightArray: 1 << 12, //斜线阵（往右斜）
    //游戏状态
    // gameStart: 1 << 10, //游戏开始/重开
    // gamePause: 1 << 11, //游戏暂停
    // gameOver: 1 << 12, //游戏结束
    // gameBossTime: 1 << 13, //Boss战
    // gameNotStartYet: 1 << 14, //游戏无状态
});

module.exports = ObjType;
