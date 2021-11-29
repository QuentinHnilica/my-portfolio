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

router.get('/videogames', async(req, res) => {
    res.render('videogames')
})

router.get('/websites', async (req, res) =>{
    res.render('websites')
})

module.exports = router