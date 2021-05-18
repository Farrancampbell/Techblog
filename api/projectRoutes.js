const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log("IN THIS LOGIC TO INSERT");
    console.log(req.session.user_id);
    console.log(req.body);
    const newBlog = await Blog.create({
      ...req.body,create_date: Date(),modified_date:Date(),
      user_id: req.session.user_id,
    });
  
    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newBlog) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(newBlog);
  } catch (err) {
    console.log("faolerd in API");
    res.status(500).json(err);
  }
});

module.exports = router;
