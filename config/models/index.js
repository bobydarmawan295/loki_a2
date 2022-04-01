// Menggabungkan semua file di models
const lecturers =  require('./lecturers');
const model = {}

model.lecturers = lecturers;

module.exports = model;