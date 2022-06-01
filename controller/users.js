
const model = require('../models/users');


const getUsers = async function(req, res){
    
    try{
        const user = await model.findAll();
        res.json(user);
    }catch(error){
        console.log(error);
    }
   
}

module.exports = {getUsers};