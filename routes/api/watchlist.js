const express = require('express')
const router = express.Router()
const watchlistCtrl = require('../../controllers/api/watchlist')

//all paths start with '/api/watchlist'

// POST /api/users/login (login)
router.post('/add', watchlistCtrl.add)


module.exports = router