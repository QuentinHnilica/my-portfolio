const router = require("express").Router()


router.get("/", async(req, res) => {
    res.render('home')
})

router.get('/about', async(req, res) => {
    res.render('about')
})

router.get('/contact', async(req, res) => {
    res.render('contact')
})

router.get('/projects', async(req, res) => {
    res.render('projects')
})


module.exports = router