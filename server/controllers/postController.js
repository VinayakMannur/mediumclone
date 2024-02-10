const Post = require('../models/post')

exports.fetchPosts = async(req, res)=>{
    try {
        
        const { page } = req.query;
        // console.log(page,"asdasdsads");
        
        if(page > 0){
            const postPerPage = 3
            const skipCount = postPerPage * (page - 1);

            const posts = await Post.find()
                .limit(postPerPage)
                .skip(skipCount)
                .exec()

            const count = await Post.countDocuments({})
            return res.status(200).send({posts, count, Message: true})
        }
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
}