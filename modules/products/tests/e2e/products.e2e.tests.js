'use strict';

describe('Products E2E Tests:', function() {
  describe('Test Products page', function() {
    it('Should not include new Products', function() {
      browser.get('http://localhost:3000/#!/products');
      expect(element.all(by.repeater('product in products')).count()).toEqual(0);
    });
  });
});
