const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    title: String,
    blog: String
    
})

const todaModel = mongoose.model("Todo", todoSchema);
module.exports = todaModel