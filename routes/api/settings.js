const express = require('express')
const router = express.Router()
const settingsCtrl = require('../../controllers/api/settings')

//all paths start with '/api/settings'

// GET /get-profile/:id
router.get('/get-profile/:id', settingsCtrl.getProfile)

// POST /update-country
router.post('/update-country', settingsCtrl.updateCountry)

// POST /update-services
router.post('/update-services/:id', settingsCtrl.updateServices)


module.exports = router