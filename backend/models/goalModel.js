const mongoose = require('mongoose')

let currentYear = new Date().getFullYear()
let defaultDate = new Date(new Date(0).setFullYear(currentYear + 1))

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a goal'],
    },
    description: {
        type: String,
    },
    targetDate: {
        type: Date,
        default: defaultDate,
    },
}, { timestamps: true })

module.exports = mongoose.model('Goal', goalSchema)