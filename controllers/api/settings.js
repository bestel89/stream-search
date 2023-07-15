const Profile = require('../../models/profile')


module.exports = {
    updateCountry,
    getProfile,
    updateServices
}

async function updateCountry(req, res) {
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

// async function updateServices(req, res) {
//     try {
//         console.log(req.body)
//         const profile = await Profile.findOne({userId: req.user._id})
//         console.log(profile.services)
//         const servicesSelected = await req.body
//         profile.services = servicesSelected
//         console.log(profile.services)
//         profile.save()
//         if (res.ok) {
//             res.send('Your services have been updated');
//         }
//     } catch {
//         res.send('Error - services not updated')
//     }
// }

async function updateServices(req, res) {
    try {
      const profile = await Profile.findOne({ userId: req.user._id });
      const servicesSelected = req.body;
      profile.services = servicesSelected;
      await profile.save();
      res.status(200).send('Your services have been updated');
    } catch (error) {
      res.status(500).send('Error - services not updated');
    }
}

async function getProfile(req, res) {
    try {
        const profile = await Profile.findOne({userId: req.user._id})
        res.json(profile)
    } catch (error){
        console.log(error)
    }
}