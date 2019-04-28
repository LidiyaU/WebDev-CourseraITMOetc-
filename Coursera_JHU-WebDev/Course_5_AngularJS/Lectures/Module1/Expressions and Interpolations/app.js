(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = "Lidia";
    $scope.stateOfBeing="hungry";

    $scope.sayMessage = function () {
      return "Yakov likes to eat at night";
    }
    $scope.feedYakov = function () {
    $scope.stateOfBeing = "fed";
    };
  }
})();
