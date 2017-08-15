const Promise = require('bluebird')
const db = require('./server/db/index')
const User = db.model('user')
const Corpse = db.model('corpse')
const Assignment = db.model('assignment')
const Like = db.model('like')
const Photo = db.model('photo')

const TOTAL_USERS = 7
const TOTAL_CORPSES = 3

const addUser = (n) => {
  return {
    username: `user${n}`,
    email: `user${n}@gmail.com`,
    password: `user${n}`,
    isAdmin: false
  }
}

const addCorpse = (n) => {
  return {
    title: `Test Corpse ${n}`,
    totalCells: 3,
    complete: false,
    userId: n
  }
}

const generateItems = (total, cbFunc, type) => {
  const items = []
  for (let i = 1; i <= total; i++) {
    items.push(cbFunc(i))
  }

  if (type === 'user') {
    return items.map(user => User.build(user))
  } else if (type === 'corpse') {
    return items.map(corpse => Corpse.build(corpse))
  }
}

console.log('Admin user is user0@gmail.com, password user0')
console.log('Users 1-7 are userN@gmail.com, where password is userN')

console.log('Users 1-3 have corpses')

console.log('Seeding Database')
db.sync({force: true})
  .then(() => {
    console.log('Seeding Admin')
    return User.create({
      username: 'user0',
      email: 'user0@gmail.com',
      password: 'user0',
      isAdmin: true
    })
  })
  .then(() => {
    console.log('Seeding Users')
    return Promise.map(generateItems(TOTAL_USERS, addUser, 'user'), user => user.save())
  })
  .then(() => {
    console.log('Seeding Users')
    return Promise.map(generateItems(TOTAL_CORPSES, addCorpse, 'corpse'), corpse => corpse.save())
  })
  .finally(() => {
    db.close()
    return null
  })
