/**
 * Created by zhoujialin on 2016/5/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Other = mongoose.model('Other', new Schema({
    //enumStr: {type:String, enum:['abc','123']},  //ö�٣���ʾ�����ֵ�����������е�ֵ
    enumStr: {type:String, enum:{values:['abc','123'], message:'${PATH} have error!'}},
    lengthStr: {type:String, minlength:[3,'${PATH} MIN error!'],maxlength:8}, //��С������ַ���Ϊ3�����Ϊ8��
    regexStr: {type:String, match: [/\.txt$/, 'have error!'], required: true}  //����ƥ�䣬ֵ������.txt��β���ַ���
}));

var o = new Other({
    enumStr:'1233',
    lengthStr:'123',
    regexStr:'sdasd.txt'
});

o.save(function(err){
   console.log(err);
});