'use strict';

var _ = require('lodash');
var Pic = require('./pic.model');

// Get list of pics
exports.index = function(req, res) {
  Pic.find(function (err, pics) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pics);
  });
};

// Get a single pic
exports.show = function(req, res) {
  Pic.findById(req.params.id, function (err, pic) {
    if(err) { return handleError(res, err); }
    if(!pic) { return res.status(404).send('Not Found'); }
    return res.json(pic);
  });
};

// Creates a new pic in the DB.
exports.create = function(req, res) {
  Pic.create(req.body, function(err, pic) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(pic);
  });
};

// Updates an existing pic in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pic.findById(req.params.id, function (err, pic) {
    if (err) { return handleError(res, err); }
    if(!pic) { return res.status(404).send('Not Found'); }
    var updated = _.merge(pic, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(pic);
    });
  });
};

// Deletes a pic from the DB.
exports.destroy = function(req, res) {
  Pic.findById(req.params.id, function (err, pic) {
    if(err) { return handleError(res, err); }
    if(!pic) { return res.status(404).send('Not Found'); }
    pic.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}