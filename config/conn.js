const Sequelize = require('sequelize');

const db = new Sequelize('sql6589048', 'sql6589048', 'BM1QycqQPd', {
    host: 'sql6.freesqldatabase.com',
    dialect: 'mysql'
});

try {
    db.authenticate();
    console.log('Koneksi berhasil');
  } catch (error) {
    console.error('Tidak dapat koneksi ke database:', error);
  }
module.exports = db;
