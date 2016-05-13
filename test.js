/**
 * Created by zhoujialin on 2016/5/13.
 */

const mongoose = require('mongoose');

// ����mongodb���ݿ�
mongoose.connect('mongodb://localhost/testdb');

//����db����
const db = mongoose.connection;

// ����db״̬
db.on('error', err=> console.log(err));
db.once('open', ()=> console.log('DB open'));

// ����ģ�ͽṹ
const User = mongoose.model('User', new mongoose.Schema({
   name:String,
   sex:String,
   group:String
}));


const user = new User({
    name:'leo',
    sex:'1',
    group:"node.js"

});

user.save();

const user2 = new User({
    name:'liang',
    sex:'1',
    group:"javascript"

});

console.log(user);