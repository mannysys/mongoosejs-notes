/**
 * Created by zhoujialin on 2016/5/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Other = mongoose.model('Other', new Schema({
    lowerStr: {type:String, lowercase: true},  //ת��Сд
    upperStr: {type:String, uppercase: true},  //ת����д
    trimStr: {type:String, trim: true}  //ȥ���ַ���ǰ��ո�
}));

var o = new Other({
    lowerStr:'AAAb',
    upperStr:'aaabbC'
});

console.log(o);