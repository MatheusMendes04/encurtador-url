const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const users = [{
    _id: 1,
    username: "adm",
    password: "$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW",
    email: "contato@gmail.com.br"
}];

module.exports = function(passport){
    
    function findUser(username){
        return users.find(user => user.username === username);
    }

    function findUserById(id){
        return user.find(user => user._id === id);
    }

}