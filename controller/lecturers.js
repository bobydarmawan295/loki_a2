
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