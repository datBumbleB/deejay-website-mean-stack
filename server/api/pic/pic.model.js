'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PicSchema = new Schema({
  name: String,
  link: String
});

module.exports = mongoose.model('Pic', PicSchema);
