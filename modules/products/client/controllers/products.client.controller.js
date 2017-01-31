'use strict';

// Products controller

angular.module('products').controller('ProductsController', ['$scope', '$stateParams', 'Authentication', 'Products', '$modal', '$log',
  function($scope, $stateParams, Authentication, Products, $modal, $log) {

    this.authentication = Authentication;

    // Find a list of Products
    this.products = Products.query();
    //this.products_by_mfr = Products.productByMfr();

    // Open a modal window to Create a single product record
    this.modalCreate = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/products/client/views/create-product.modal.view.html',
        controller: function ($scope, $modalInstance) {


          $scope.ok = function (isValid) {
            console.log(isValid);
            $modalInstance.close();
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: size
      });

      modalInstance.result.then(function (selectedItem) {
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };



    // Open a modal window to Update a single product record
    this.modalUpdate = function (size, selectedProduct) {

      var modalInstance = $modal.open({
        templateUrl: 'modules/products/client/views/update-product.modal.view.html',
        controller: function ($scope, $modalInstance, aProduct) {

          $scope.theProduct = {};

          $scope.theProduct = angular.copy(aProduct);


          $scope.ok = function () {
            $modalInstance.close();
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: size,
        resolve: {
          aProduct: function () {
            return selectedProduct;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };



    // Remove existing Product
    this.remove = function (product) {
      if (product) { product.$remove();

        for (var i in this.products) {
          if (this.products [i] === product) {
            this.products.splice(i, 1);
          }
        }
      } else {
        this.product.$remove(function() {
        });
      }
    };

  }
]);
