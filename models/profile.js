const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
    },
    userName: {
        type: String,
    },
    country: {
        type: String,
        required: true,
        default: 'gb'
    },
    services: {
        type: Array,
    },
    watchlist: {
        type: Array,
    }
})

module.exports = mongoose.model('Profile', profileSchema)