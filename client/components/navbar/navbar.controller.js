'use strict';

angular.module('projectDeeJayApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Acasă',
      'link': 'home'
    },
    {
      'title': 'Echipament',
      'link' : 'equipment'
    },
    {
      'title': 'Galerie',
      'link' : 'venues'
    },
    {
      'title': 'Contact',
      'link' : 'contact'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
