/**
 * Created by zhoujialin on 2016/5/16.
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OtherSchema = new Schema({
    name: { type:String, default:
        //ʹ�ú���������������һЩ�߼�����
                function(){
                    let firstname = 'zeng';
                    let secondname = 'liang';
                    return firstname + secondname;
                }
    },

    name2:{
        type:String,
        // ��ȡֵ
        get:function(val){
            console.log(val);
            return 'name is leo';
        },
        // ����ֵ
        set:function(val){
            return val + 2;
        }
    },

    name3:{
        type:String,
        required:true //����Ϊ��
    },

    name4:{
        type:String,
        //����������֤��
        validate:[
            {
                validator: function(val){
                    console.log('name4 is' + val);
                    return true;
                }, msg: '{PATH} have error!'
            },
            {
                validator: function(val){
                    console.log('name4 is' + val);
                    return true;
                },msg: '{PATH} have error! 2'
            }
        ]
    },
    buf:{
        type:Buffer,
        required:true,
        validate: [function(val){
            return val.length < 5;
        }, '{PATH} length must < 5']
    }

});

const Other = mongoose.model('Other', OtherSchema);

const o = new Other({buf:new Buffer([3,55,102,55,12,88]),name2:'hello',name3:'tiger',name4:'test kaixn'});

console.log(o);
console.log(o.name2);

o.save(function(err){
    console.log(err);
});