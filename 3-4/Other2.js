/**
 * Created by zhoujialin on 2016/5/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Other = mongoose.model('Other', new Schema({
    //enumStr: {type:String, enum:['abc','123']},  //枚举，表示输入的值必须是数组中的值
    enumStr: {type:String, enum:{values:['abc','123'], message:'${PATH} have error!'}},
    lengthStr: {type:String, minlength:[3,'${PATH} MIN error!'],maxlength:8}, //最小输入的字符串为3，最大为8个
    regexStr: {type:String, match: [/\.txt$/, 'have error!'], required: true}  //正则匹配，值必须是.txt结尾的字符串
}));

var o = new Other({
    enumStr:'1233',
    lengthStr:'123',
    regexStr:'sdasd.txt'
});

o.save(function(err){
   console.log(err);
});