var base = process.env.PWD;
var Post  = require(base + '/models/posts');

var createPost = function (req, res) {

    var post = new Post(req.body);

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

var getPost = (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if(err) {
            res.send(500, err);
        } else {
            res.json(200, post);
        }
    });
}

var updatePost = (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if(err) { res.send(500, err); }

        if(req.body.title) { post.title = req.body.title; }
        if(req.body.body) { post.body = req.body.body; }
        if(req.body.author) { post.author = req.body.author; }
        if(req.body.published) { post.published = req.body.published; }

        post.save((err, post) => {
            if(err) { res.send(500, err); }
            res.json(200, post);
        });
    });
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost
};