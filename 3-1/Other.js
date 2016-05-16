/**
 * Created by zhoujialin on 2016/5/16.
 */

/*
  6�ֻ�������
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Other = mongoose.model('Other', new Schema({
    num:Number,  //����
    str:String,  //�ַ���
    arr:Array,   //����
    bool:Boolean,  //��������
    oid: Schema.Types.ObjectId, // mongoose��������
    buf:Buffer  // ��������������
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