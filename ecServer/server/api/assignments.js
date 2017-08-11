const router = require('express').Router()
const {Assignment} = require('../db/assignments')
module.exports = router

router.get('/', (req, res, next) => {
  Assignment.findAll()
    .then(assignments => res.json(assignments))
    .catch(next)
})

//this will give the user the list of assigned edges
router.get('/:userId', (req, res, next) => {
  Assignment.findAll({where:{
    userId: req.params.userId
  }})
    .then(assignments => res.json(assignments))
    .catch(next)
})


 router.delete('/:id',function(req, res, next) {
   Assignment.destroy({where: {
     id: req.params.id
   }}).then(assignments => res.json(assignments))
   .catch(next)
 })

 router.post('/', function(req, res, next) {
   Assignment.create(req.body)
   .then(assignments => res.json(assignments))
   .catch(next)
 })
