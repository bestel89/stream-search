const mongoose = require('mongoose')
const Schema = mongoose.Schema



const watchlistItemSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    imdbId: {
        type: String, 
        required: true
    },
    canWatch: {
        type: Boolean
    }
}, {
    timestamps: true,
})



module.exports = mongoose.model('WatchlistItem', watchlistItemSchema)