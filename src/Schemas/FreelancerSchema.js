const { Schema, model} = require('mongoose');

module.exports = model("Freelancers", new Schema({
    freelancerId: String,
    guildId: String,
    data: {
        paypal: {
            default: null,
            type: String
        }
    }
}));