const Profile = require('../../models/profile')

module.exports = {
    add,
    remove,
}


async function add(req, res) {
    try {
        const profile = await Profile.findOne({ userId: req.user._id })
        const watchlist = profile.watchlist
        const itemToAdd = req.params.id
    
        //Guard against item already existing
        if (watchlist.includes(itemToAdd)) {
            return; 
        }
    
        profile.watchlist.push(itemToAdd)
        await profile.save()
        res.status(200).json({ message: 'Item added to watchlist' })
    } catch (error) {
        // Handle the error
        console.error(error);
        res.status(500).json({ message: 'An error occurred' })
    }
}


async function remove(req, res) {
    try {
        const profile = await Profile.findOne({ userId: req.user._id })
        const itemToRemove = req.params.id
    
        const updatedWatchlist = profile.watchlist.filter(item => item !== itemToRemove)
        profile.watchlist = updatedWatchlist
    
        await profile.save();
        res.status(200).json({ message: 'Item removed from watchlist' })
    } catch (error) {
        // Handle the error
        console.error(error)
        res.status(500).json({ message: 'An error occurred' })
    }
}