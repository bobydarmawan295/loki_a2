const courses = require("../models/courses");

const getAllCourses = async (req, res) => {
    try {
        await courses.findAll({
            attributes:['id','name']
        })
        .then((result) => {
            if(result.length > 0){
                res.render('dosen/courses',{items: result})
            }else{
                res.status(200).json({
                    message: 'data tidak ada',
                    data: []
                })
            }
        })
    } catch (error) {
        res.status(404).json({
            message: error,
        })
    }  
}

const createCourse = async (req, res) => {
    try {
        const {curriculum_id, code, name, alias, credit,semester, description } = req.body;
        await courses.create({
            curriculum_id:curriculum_id,
            code: code,
            name: name,
            alias_name: alias,
            credit: credit,
            semester: semester, 
            description: description
        });
        //   res.redirect("/dosen/courses");
    } catch (error) {
        res.json({ message: error.message});
        // res.redirect("/dosen/add-course");
    }  
}
 
// export const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findAll({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json(product[0]);
//     } catch (error) {
//         res.json({ message: error.message });
//     }  
// }
 

// export const updateProduct = async (req, res) => {
//     try {
//         await Product.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Updated"
//         });
//     } catch (error) {
//         res.json({ message: error.message });
//     }  
// }
 
// export const deleteProduct = async (req, res) => {
//     try {
//         await Product.destroy({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Deleted"
//         });
//     } catch (error) {
//         res.json({ message: error.message });
//     }  
// }

module.exports = {getAllCourses, createCourse}