const mongoose = require("mongoose")
mongoose.set('strictQuery', true)

const connection = mongoose.connect("mongodb://127.0.0.1:7070/notespsc")

module.exports = {
    connection
}