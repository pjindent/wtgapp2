'use strict';

angular.module('products').controller('ProductsUpdateController', ['$scope', 'Products', 'Notify',
  function ($scope, Products, Notify) {
    // Products update controller logic

    $scope.channelOptions = [
      { id: '1', opt: 'Facebook' },
      { id: '2', opt: 'Twitter' },
      { id: '3', opt: 'Email' }
    ];


    // Update existing Product
    this.update = function (updatedProduct) {
      var product = updatedProduct;

      product.$update(function (response) {

        Notify.sendMsg('UpdatedProduct', { 'id': response._id });

      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);
