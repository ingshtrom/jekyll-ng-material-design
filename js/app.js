angular
.module('jekyll-ng-material-design', [
  'ngAnimate',
  'ngAria',
  'ngMaterial'
])
.controller('jekyllController', ['$scope', '$mdSidenav', function jekyllController ($scope, $mdSidenav) {
  $scope.openSideMenu = function openSideMenu () {
    $mdSidenav('left').toggle();
  };
}]);
