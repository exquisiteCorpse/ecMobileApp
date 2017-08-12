const User = require('./user')
const Corpse = require('./corpse')
const Assignment = require('./assignments')
const Like = require('./likes')
const Photo = require('./photos')

User.hasMany(Corpse, {onDelete: 'CASCADE'})
User.hasMany(Photo, {onDelete: 'CASCADE'})
User.hasMany(User, {as: 'Friends'})
User.hasMany(Like, {onDelete: 'CASCADE'})

Corpse.belongsTo(User)
Corpse.hasMany(Photo, {onDelete: 'CASCADE'})
Corpse.hasMany(Like, {onDelete: 'CASCADE'})

Photo.belongsTo(User)
Photo.belongsTo(Corpse)
Like.belongsTo(User)
Like.belongsTo(Corpse)

Assignment.belongsTo(Corpse)
Assignment.belongsTo(User, {as: 'assignorId'})
Assignment.belongsTo(User, {as: 'assigneeId'})


module.exports = {
  User,
  Corpse,
  Assignment,
  Like,
  Photo
}
