const mongoose = require ('mongoose');

const todoSchema  = new mongoose.Schema({
    title:String,
    decs:String,
},{Timestamp:true}
);

module.exports = mongoose.model("Todo",todoSchema);
