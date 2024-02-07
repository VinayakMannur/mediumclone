const Post = require('../models/post')

exports.fetchPosts = async(req, res)=>{
    try {
        
        const { page } = req.query;
        
        const postPerPage = 3
        const skipCount = postPerPage * (page - 1);

        const posts = await Post.find()
            .limit(postPerPage)
            .skip(skipCount)
            .exec()

        // console.log(posts);
        return res.status(200).send({posts, Message: true})

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
}