const User = require('./User');
const project = require('./project');
const Blog = require('./Blog');
const Project = require('./project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project, Blog };

