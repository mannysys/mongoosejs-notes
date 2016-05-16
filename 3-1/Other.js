/**
 * Created by zhoujialin on 2016/5/16.
 */

/*
  6种基本类型
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Other = mongoose.model('Other', new Schema({
    num:Number,  //整型
    str:String,  //字符串
    arr:Array,   //数组
    bool:Boolean,  //布尔类型
    oid: Schema.Types.ObjectId, // mongoose自身类型
    buf:Buffer  // 二进制数据类型
}));

var obj = new Other({
    num:12,
    str:'leo',
    arr:[23,3,3],
    bool:false,
    oid:new mongoose.Types.ObjectId,
    buf:new Buffer([33,22,66])
});

console.log(obj);