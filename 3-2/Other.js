/**
 * Created by zhoujialin on 2016/5/16.
 */
'use strict';

const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

//���������͵Ķ���
const ChildrenSchema = new Schema({name:String});
const Children = mongoose.model('Children', ChildrenSchema);


const Other = mongoose.model('Other', new Schema({
    o1: [],
    o2: [Number], //������ֻ����������
    o3: {}, //�������ڿ������������͵�ֵ
    o4: Date,
    o5: [ChildrenSchema],
    o6: ChildrenSchema

}));

let obj = new Other({
    o1: [121, 'tiger'],
    o2: [86,121],
    o3: 1111,
    o4: new Date(),
    o5: [new Children({name:'liang'}), new Children({name:'zeng'})],
    o6: new Children({name:'leo'})
});

console.log(obj);