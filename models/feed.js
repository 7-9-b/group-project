let mongoose = require ('mongoose');

let FeedSchema = new mongoose.Schema({
    customerName : String,
    service: String,
    comments: String
});

let Feed = mongoose.model('Feed', FeedSchema);
module.exports = Feed;
