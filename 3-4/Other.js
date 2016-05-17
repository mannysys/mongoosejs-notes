/**
 * Created by zhoujialin on 2016/5/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Other = mongoose.model('Other', new Schema({
    lowerStr: {type:String, lowercase: true},  //转换小写
    upperStr: {type:String, uppercase: true},  //转换大写
    trimStr: {type:String, trim: true}  //去掉字符串前后空格
}));

var o = new Other({
    lowerStr:'AAAb',
    upperStr:'aaabbC'
});

console.log(o);