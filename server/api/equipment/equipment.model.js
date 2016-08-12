'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EquipmentSchema = new Schema({
  name: String,
  info: String,
  position: String,
  image: String
});

module.exports = mongoose.model('Equipment', EquipmentSchema);
