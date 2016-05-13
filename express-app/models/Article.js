/**
 * Created by zhoujialin on 2016/5/13.
 */

const mongoose = require('mongoose');
const Article = mongoose.model('Article', new mongoose.Schema({
    title: String,
    body: String,
    createTime: Number,
    updateTime: Number

}));

module.exports = Article;