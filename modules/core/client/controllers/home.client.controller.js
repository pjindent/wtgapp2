'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.alerts = [
      {
        icon: 'glyphicon-flash',
        colour: 'btn-success',
        total: '20',
        description: 'Total Wind Turbines',
        redirect: '/products'
      },
      {
        icon: 'glyphicon-th',
        colour: 'btn-danger',
        total: '9',
        description: 'Manufacturers',
        redirect: '/products_by_mfr'
      },
      {
        icon: 'glyphicon-stats',
        colour: 'btn-info',
        total: '5',
        description: 'Turbine Rating (MW)',
        redirect: '/products-by-MW'
      },
      {
        icon: 'glyphicon-ok-circle',
        colour: 'btn-warning',
        total: '8',
        description: 'IEC Class',
        redirect: '/products-by-IEC'
      }
    ];
  }
]);
