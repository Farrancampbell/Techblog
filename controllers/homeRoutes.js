const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogData = await Blog.findAll({
    include: [
      {
          model: User,
      },
  ],
});

    const blogs = blogData.map((post) => blog.get({ plain: true }));
console.log(blogs)
    // Pass serialized data and session flag into template
    res.render('blog', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blog', async (req, res) => {
  try {
    
    const blogData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                },
            ],
        });

    // Serialize data so the template can read it
    const blogs = blogData.map((blogsw) => blogsw.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('blog', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login')
});

router.get('/logout', async (req, res) => {
    res.render('logout')
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});

router.get('/create', withAuth, async (req, res) => {
    res.render('create', {
        loggedIn: req.session.loggedIn,
    })
});

module.exports = router;
