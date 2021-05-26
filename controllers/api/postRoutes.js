const router = require('express').Router();
const session = require('express-session');
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({ ...req.body, user_id: req.session.user_id });

        res.status(200).json(postData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        let isOwner = false;

        console.log(req.session.user_id);
        console.log(post.user_id);

        if (req.session.user_id === post.user_id) {
            isOwner = true;
        }

        console.log(isOwner);

        res.render('post', {
            post,
            isOwner,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/update/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });

        console.log(post);

        res.render('update', {
            post,
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const response = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            });

        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err)
    };

});



module.exports = router;