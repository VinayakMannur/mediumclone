const Comment = require('../models/comment')

exports.fetchComments = async (req, res) =>{
    try {
        const id = req.params.id;
        
        const comments = await Comment.find({postId: id}).populate('userId', '-googleId -email').exec()
        return res.status(200).send({comments, Message: true})


    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
}