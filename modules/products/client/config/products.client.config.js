'use strict';

// Configuring the Products module
angular.module('products').run(['Menus',
  function (Menus) {
    // Add the Products dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Products',
      state: 'products',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'products', {
      title: 'List Products',
      state: 'listProducts'
    });

  }
]);
