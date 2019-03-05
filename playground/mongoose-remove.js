const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result)
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

//Todo.findOneAndRemove({_id: '5c7de2fcdb669b351ad42d7a'}).then((todo) => {
//});

Todo.findByIdAndRemove('5c7de2fcdb669b351ad42d7a').then((todo) => {
    console.log(todo);
});