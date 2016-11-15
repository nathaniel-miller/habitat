function ShowHabitController($scope, habitData, formProcessor) {
  var vm = this;

  vm.habit = habitData.habit;
  vm.email = $scope.$parent.$parent.currentUser.email;
  vm.phrase = 'I will ' +
  vm.habit.activity.description +
  ' because it provides me with ' +
  vm.habit.reward.craving;

  if(vm.habit.activity && vm.habit.activity.description != '') {
    vm.validActivity = true;
  }

  vm.delete = function(submission) {
    formProcessor.processHabitDelete(submission);
  }
}

angular
  .module('app')
  .controller('ShowHabitController', ShowHabitController);
