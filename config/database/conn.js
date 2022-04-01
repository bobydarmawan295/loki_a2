
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
