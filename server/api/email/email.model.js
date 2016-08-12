'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmailSchema = new Schema({
  senderEmail: String,
  senderName: String,
  emailBody: String,
  dateSent: {type: Date, default: Date.now},
  read: {type: Boolean, default: false}
});

module.exports = mongoose.model('Email', EmailSchema);
