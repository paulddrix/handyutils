const handyUtils = require('../index');
const assert = require('assert');
describe('UTILS', function() {
  describe('debug', function() {
    it('should log something', function() {
      handyUtils.debug('I am a title', 'I am the body :0');
    });
  });
  describe('isEmpty', function() {
    it('should return true', function() {
      console.log(handyUtils.isEmpty(''));
    });
    it('should return false', function() {
      console.log(handyUtils.isEmpty('hi'));
    });
  });
});
