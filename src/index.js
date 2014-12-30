'use strict';

var fs = require('fs');
var path = require('path');
var config = require('./config');
var vulcan = require('vulcanize');

function vulcanize(mimosaConfig, options, next) {
  var moduleConfig = mimosaConfig.vulcanize;

  var inputFile = path.join(mimosaConfig.watch.sourceDir, moduleConfig.filename);
  if (!fs.existsSync(inputFile)) {
    mimosaConfig.log.error("[mimosa-vulcanize] Unable to find HTML file to vulcanize: " + inputFile);
    return;
  }

  var opts = {
    input: inputFile,
    output: path.join(mimosaConfig.watch.compiledDir, moduleConfig.filename),
    csp: moduleConfig.csp,
    inline: moduleConfig.inline,
    strip: moduleConfig.strip
  };

  vulcan.setOptions(opts, function() {
    vulcan.processDocument();
    next();
  });
}

var registration = function(mimosaConfig, register) {
  if (mimosaConfig.isOptimize) {
    register(['postBuild'], 'beforeOptimize', vulcanize);
  }
};

module.exports = {
  registration: registration,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};
