/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

//contenu necessaire dans node_modules
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist//*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata//*.+(ts|js|js.map)',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      'moment/**/*.js',
      'ng2-bootstrap/**/*.js'
    ]
  });
};
