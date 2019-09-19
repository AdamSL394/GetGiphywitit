var db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log(req)
        var bloggerID = req.session.passport.user;
        console.log(req.body)
        db.Post.create({
            title: req.body.title,
            body: req.body.body,
            image: req.body.image,
            city: req.body.city,
            CategoryId: parseInt(req.body.CategoryId),
            BloggerUuid: bloggerID
        }, {
                include: [db.Blogger]
            })
            .then(function (newPost) {
                console.log(newPost)
            })
    },
};

