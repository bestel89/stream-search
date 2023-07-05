const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const SALT_ROUNDS = require('../../models/user')
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

async function create(req, res) {
    try {
        // Add user to the db
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        else if (match) {
            const token = createJWT(user)
            res.json(token)
        }
    } catch (err) {
        res.status(400).json('Bad credentials')
    }
}

//! Helper function for this module
function createJWT(user) {
    return jwt.sign(
        // data payload
        { user }, 
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}