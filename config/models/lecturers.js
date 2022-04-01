<<<<<<< HEAD
// const { Sequelize, DataTypes } = require('sequelize');

const Sequelize = require('sequelize');
const db= require('../database/conn');

const lecturers = db.define('lecturers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reg_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
    },
    updated_at: {
        type: Sequelize.DATE,
    }
},

{  

    tableName: 'lecturers',
    timestamps: false  //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
    
});

// const lecturers = db.define('lecturers', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     reg_id: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     phone: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     status: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     created_at: {
//         type: DataTypes.DATE,
//     },
//     updated_at: {
//         type: DataTypes.DATE,
//     }
// },

// {  

//     tableName: 'lecturers',
//     timestamps: true
//     // freezeTableName: true
    
// });

module.exports = lecturers;
=======
// const { Sequelize, DataTypes } = require('sequelize');
// skema orm lecturers
const Sequelize = require('sequelize');
const db= require('../database/conn');

const lecturers = db.define('lecturers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reg_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
    },
    updated_at: {
        type: Sequelize.DATE,
    }
},

{  

    tableName: 'lecturers',
    timestamps: false  //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
    
});

// const lecturers = db.define('lecturers', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     reg_id: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     phone: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     status: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     created_at: {
//         type: DataTypes.DATE,
//     },
//     updated_at: {
//         type: DataTypes.DATE,
//     }
// },

// {  

//     tableName: 'lecturers',
//     timestamps: true
//     // freezeTableName: true
    
// });

module.exports = lecturers;
>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
