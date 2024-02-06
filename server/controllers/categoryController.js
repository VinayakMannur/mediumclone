const Category = require("../models/category");

exports.fetchCategories = async(req, res) =>{
    try {
        
        const categories = await Category.find({})
        return res.status(200).send({categories, Message: true})

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}
