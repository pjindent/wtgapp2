'use strict';

angular.module('products').controller('ProductsCreateController', ['$scope', 'Products', 'Notify',
  function($scope, Products, Notify) {
    // Products create controller logic

    $scope.channelOptions = [
      { id: '1', opt: 'Facebook' },
      { id: '2', opt: 'Twitter' },
      { id: '3', opt: 'Email' }
    ];

    // Create new Product
    this.create = function() {
      // Create new Product object
      var product = new Products ({
        turbineModel: this.turbineModel,
        manufacturer: this.manufacturer,
        IECClass: this.IECClass,
        generatorType: this.generatorType,
        driveType: this.driveType,
        rotorSize: this.rotorSize,
        hubHeights: this.hubHeights
      });

      // Redirect after save
      product.$save(function(response) {

        Notify.sendMsg('NewProduct', { 'id': response._id });

      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);
