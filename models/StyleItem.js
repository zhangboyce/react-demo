const mongoose = require('mongoose');

const StyleItemSchema = new mongoose.Schema({
    name: String,
    type: String,
    types: Array,
    html: String,
    status: Number, // -1: 已删除, 0: 草稿, 1: 已发布
    sort: Number,
    createTime: Date,
    updateTime: Date
});

module.exports = mongoose.model('StyleItem', StyleItemSchema);