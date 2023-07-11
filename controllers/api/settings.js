const Profile = require('../../models/profile')


module.exports = {
    updateCountry,
    getProfile
}

async function updateCountry(req, res) {
    // console.log('req.user', req.user)
    // console.log('req.body', req.body)
    try {
        const profile = await Profile.findOne({userId: req.user._id})
        profile.country = req.body.country.toLowerCase()
        profile.save()
        if (res.ok) {
            res.send('Your country has been updated');
        }
    } catch {
        res.send('Error - country not updated')
    }
}

async function getProfile(req, res) {
    try {
        console.log(req.params.id)
        // console.log(req.user)
        // console.log(req.body)
        // console.log('hello')
        const profile = await Profile.findOne({userId: req.user._id})
        res.json(profile)
    } catch {

    }
}