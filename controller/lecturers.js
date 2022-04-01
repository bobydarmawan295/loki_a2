<<<<<<< HEAD

const model = require('../config/models/index');
const controller = {};

controller.getAll = async function(req, res){
    try{
        await model.lecturers.findAll()
        .then((result) => {
            if(result.length > 0){
                res.status(200).json({
                    message: 'mendapat data dosen',
                    data: result
                })
            }else{
                res.status(200).json({
                    message: 'data tidak ada',
                    data: []
                })
            }
        })
    }catch(error){
        res.status(404).json({
            message: error,
        })
    }
}

module.exports = controller;
=======
//controller lecturers
const model = require('../config/models/index');
const controller = {};

controller.getAll = async function(req, res){
    try{
        await model.lecturers.findAll()
        .then((result) => {
            if(result.length > 0){
                res.status(200).json({
                    message: 'mendapat data dosen',
                    data: result
                })
            }else{
                res.status(200).json({
                    message: 'data tidak ada',
                    data: []
                })
            }
        })
    }catch(error){
        res.status(404).json({
            message: error,
        })
    }
}

module.exports = controller;
>>>>>>> 6120a048f6448268bdb0c5765b9eca5783696d97
