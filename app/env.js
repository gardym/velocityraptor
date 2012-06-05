exports.is_production = function() {
  return (process.env['ENVIRONMENT'] == 'production');
};
