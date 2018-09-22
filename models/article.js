const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    date: Date,
    url: { type: String, required: true },
    thumbnail: String
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;