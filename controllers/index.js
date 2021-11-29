const router = require('express').Router();
const pageRoutes = require('./pageRoutes')
const videogameRoutes = require('./videogameRoutes')

router.use('/', pageRoutes)
router.use('/videogames', videogameRoutes)


module.exports = router