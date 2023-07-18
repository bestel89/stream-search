const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//all paths start with '/api/users'

// POST /api/users/login (login)
router.post('/login', usersCtrl.login)

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router