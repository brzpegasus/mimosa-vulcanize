'use strict';

exports.defaults = function() {
  return {
    vulcanize: {
      filename: 'components.html',
      strip: true,
      inline: true,
      csp: true
    }
  };
};

exports.validate = function(config, validators) {
  var errors = [];

  if (validators.ifExistsIsObject(errors, 'vulcanize config', config.vulcanize)) {
    var vulcanize = config.vulcanize;

    validators.ifExistsIsString(errors, 'vulcanize.filename', vulcanize.filename);
    validators.ifExistsIsBoolean(errors, 'vulcanize.strip', vulcanize.strip);
    validators.ifExistsIsBoolean(errors, 'vulcanize.inline', vulcanize.inline);
    validators.ifExistsIsBoolean(errors, 'vulcanize.csp', vulcanize.csp);
  }

  return errors;
};
