'use strict';

angular.module('products').directive('productList', ['Products', 'Notify',
  function(Products, Notify) {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'modules/products/client/views/product-list-template.html',
      link: function(scope, element, attrs){
        //when a new product is added, update the product list
        Notify.getMsg('NewProduct', function(event, data) {
          scope.productsCtrl.products = Products.query();
        });
        Notify.getMsg('UpdatedProduct', function(event, data) {
          scope.productsCtrl.products = Products.query();
        });
      }
    };
  }]);
