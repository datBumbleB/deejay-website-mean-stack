'use strict';

var _ = require('lodash');
var Equipment = require('./equipment.model');

// Get list of equipments
exports.index = function(req, res) {
  Equipment.find(function (err, equipments) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(equipments);
  });
};

// Get a single equipment
exports.show = function(req, res) {
  Equipment.findById(req.params.id, function (err, equipment) {
    if(err) { return handleError(res, err); }
    if(!equipment) { return res.status(404).send('Not Found'); }
    return res.json(equipment);
  });
};

// Creates a new equipment in the DB.
exports.create = function(req, res) {
  Equipment.create(req.body, function(err, equipment) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(equipment);
  });
};

// Updates an existing equipment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Equipment.findById(req.params.id, function (err, equipment) {
    if (err) { return handleError(res, err); }
    if(!equipment) { return res.status(404).send('Not Found'); }
    var updated = _.merge(equipment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(equipment);
    });
  });
};

// Deletes a equipment from the DB.
exports.destroy = function(req, res) {
  Equipment.findById(req.params.id, function (err, equipment) {
    if(err) { return handleError(res, err); }
    if(!equipment) { return res.status(404).send('Not Found'); }
    equipment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}