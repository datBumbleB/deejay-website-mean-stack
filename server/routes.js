/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {


  app.use('/api/emails', require('./api/email'));
  app.use('/api/pics', require('./api/pic'));
  app.use('/api/equipments', require('./api/equipment'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  app.use('/api/socials', require('./api/social'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });

  app.route('/google3320571c734fba75.html')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/google3320571c734fba75.html'));
    });

}
