const express = require('express')
const router = express.Router()
const watchlistCtrl = require('../../controllers/api/watchlist-items')

//all paths start with '/api/watchlist-items'

// POST /api/watchlist-items/add/:id (add to watchlist)
router.post('/add/:id', watchlistCtrl.add)

// POST /api/watchlist-items/add/:id (add to watchlist)
router.post('/remove/:id', watchlistCtrl.remove)


module.exports = router