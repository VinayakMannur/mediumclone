const Post = require('../models/post')

exports.fetchPosts = async(req, res)=>{
    try {
        
        const { page, cat } = req.query;
        // console.log(page,"asdasdsads");

        let query = {};

        if (cat && cat.trim() !== "") {
            query.category = cat.trim();
        }
        
        if(page > 0){
            const postPerPage = 3
            const skipCount = postPerPage * (page - 1);

            const posts = await Post.find(query)
                .limit(postPerPage)
                .skip(skipCount)
                .exec()

            const count = await Post.countDocuments(query)
            return res.status(200).send({posts, count, Message: true})
        }
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
}

exports.fetchSinglePost = async(req, res) =>{
    const id = req.params.id;
    try {
        
        const posts = await Post.findById(id).populate('userId').exec()
        return res.status(200).send({posts, Message: true})

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
}