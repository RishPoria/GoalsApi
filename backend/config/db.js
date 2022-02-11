const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Mongo DB connected succesfully to '.cyan + conn.connection.host.magenta.underline)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB