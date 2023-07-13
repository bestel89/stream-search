const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const Profile = require('../../models/profile')
const SALT_ROUNDS = 12
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
        const newUser = await User.create(req.body)
        // create a profile for the user with default: GB
        await Profile.create({
            userId: newUser._id,
            userName: newUser.name,
        })
        res.status(200).json({ message: 'Signup successful' })
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