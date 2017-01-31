'use strict';

// Setting up route
angular.module('products').config(['$stateProvider',
  function($stateProvider) {
    // Products state routing
    $stateProvider.
    state('listProducts', {
      url: '/products',
      templateUrl: 'modules/products/client/views/list-products.client.view.html'
    });
    $stateProvider.
    state('listProductsByMfr', {
      url: '/products_by_mfr',
      templateUrl: 'modules/products/client/views/list-products.client.view.html'
    });    
  }
]);
