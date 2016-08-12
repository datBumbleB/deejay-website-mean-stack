'use strict';

angular.module('projectDeeJayApp')
  .controller('NavbarAdminCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Mesaje',
      'link': 'messages'
    },
    {
      'title': 'Echipament',
      'link' : 'equipment'
    },
    {
      'title': 'Imagini',
      'link' : 'images'
    },
    {
      'title' : 'Contact',
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
// .directive('scrollOnClick', function() {
//   return {
//     restrict: 'A',
//     link: function(scope, $elm, attrs) {
//       var idToScroll = attrs.href;
//       $elm.on('click', function() {
//         var $target;
//         if (idToScroll) {
//           $target = $(idToScroll);
//         } else {
//           $target = $elm;
//         }
//         $("body").animate({scrollTop: $target.offset().top}, "swing");
//       });
//     }
//   }
// });
