(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";

    $scope.checkLunch = function() {
      $scope.message = lunchCheckMessage($scope.dishes);
    };
    $scope.reset = function() {
      $scope.message = "";
    }
  }

  function lunchCheckMessage(dishes) {
    if (dishes === "") {
      return "Please enter data first";
    }
    else if (numberOfDishes(dishes) <= 3) {
      return "Enjoy!";
    }
    else {
      return "Too much!";
    }
  }

  function numberOfDishes(dishes) {
    var items = dishes.split(",");
    var numberOfItems = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i] != "") {
        numberOfItems ++;
      }
    }
    return numberOfItems;
  }
}
)();
