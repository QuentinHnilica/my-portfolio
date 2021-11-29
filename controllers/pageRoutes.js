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

router.get('/george', async (req, res) =>{
    res.render('george')
})

router.get('/anbu-black-ops', async (req, res) =>{
    res.render('anbu')
})

router.get('/dnd', async (req, res) => {
    res.render('dnd')
})

router.get('/group-finder', async (req, res) =>{
    res.render('groupFinder')
})

router.get('/weather-dash', async (req, res) =>{
    res.render('weatherDash')
})

router.get('/note-taker', async (req, res) =>{
    res.render('noteTaker')
})

router.get('/pass-gen', async (req, res) =>{
    res.render('passGen')
})

router.get('/work-day-scheduler', async(req, res) =>{
    res.render('workDaySchedule')
})

module.exports = router