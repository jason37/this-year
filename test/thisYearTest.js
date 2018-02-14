var ty = require('../this-year.js');
var chai = require('chai');
var assert = chai.assert;

describe('this-year', function() {
        var result = ty.thisyear();
        it('should return this year', function() {
          assert.equal(result, new Date().getFullYear());
        });
        it('should return a numeric value', function() {
                assert.isNumber(result);
        });
});

