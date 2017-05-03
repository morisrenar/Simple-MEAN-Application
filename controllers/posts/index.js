var base = process.env.PWD;
var Post  = require(base + '/models/posts');

var createPost = function (req, res) {
    
    var blogTitle = req.body.title;
    var blogBody = req.body.body;

    console.log("title: " + blogTitle + " body: " + blogBody);

    var post = new Post({
        title: blogTitle,
        body: blogBody
    });

    post.save((err, post) => {
        if(err) {
            res.send(500, err);
        } else {
            res.json(200, post);
        }
    });
}

var getPosts = (req, res) => {
    Post.find((err, posts) => {
        if(err) {
            res.send(500, err);
        } else {
            res.send(200, posts);
        }
    });
}

module.exports = {
    createPost,
    getPosts
};