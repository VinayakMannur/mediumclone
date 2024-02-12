const Comment = require('../models/comment')
const { getUserFromSession } = require('../utils/sessionUtils');

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

exports.addComment = async (req, res) =>{
    try {

        const user = getUserFromSession(req);

        if (user) {
            
            const comment = new Comment({
                desc: req.body.desc,
                postId: req.params.id,
                userId: user._id
            })

            await comment.save()
            res.status(201).send('Comment Created')

        } else {
            res.status(401).send('Unauthorized')
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
}