describe("env", function() {
  var env = require('../app/env.js');

  describe("is production", function() {
    it("should return true when ENVIRONMENT is production", function() {
      process.env['ENVIRONMENT'] = 'production';

      env.is_production().should.equal(true);
    });

    it("should return false otherwise", function() {
      process.env['ENVIRONMENT'] = 'derpvelopment';

      env.is_production().should.equal(false);
    });
  });
});
