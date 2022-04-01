
<<<<<<< HEAD
// const { Sequelize, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const db = new Sequelize('loki', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;

// const mysql =  require ('mysql2');

// const conn =  mysql.createConnection({
//     host: 'localhost',
//     user : 'root',
//     password : '',
//     database :'loki'
// });

// conn.connect(function(err){
//     if(err) throw err;
//     console.log('koneksi berhasil');
// })
=======
>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
