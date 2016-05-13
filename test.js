/**
 * Created by zhoujialin on 2016/5/13.
 */

const mongoose = require('mongoose');

// 连接mongodb数据库
mongoose.connect('mongodb://localhost/testdb');

//返回db对象
const db = mongoose.connection;

// 监听db状态
db.on('error', err=> console.log(err));
db.once('open', ()=> console.log('DB open'));

// 创建模型结构
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