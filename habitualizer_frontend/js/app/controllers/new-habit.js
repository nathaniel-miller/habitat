angular
  .module('app')
  .controller('NewHabitController', function($http, $scope, $state, user, cues, rewards, activities) {

    $scope.habit = {}
    $scope.habit.user_id = user.id

    $scope.cues = cues.data.cues;
    $scope.rewards = rewards.data.rewards;
    $scope.activities = activities.data.activities;

    $scope.selectCue = function(cue){

      $scope.habit.cue_attributes.name = cue.name;
      $scope.habit.cue_attributes.nature = cue.nature;

    }

    $scope.selectReward = function(reward){

      $scope.habit.reward_attributes = {};
      $scope.habit.reward_attributes.craving = reward.craving;

    }

    //////////////////////////////////////////
    $scope.submit = function(hbt) {
      var habit = { habit: hbt }

      console.log('Posting to habits#create.');

      $http({
        method: 'POST',
        url: 'http://localhost:3000/habits',
        data: habit
      }).then(function(response){
        var habit = response.data.habit;
        //change this to success/error in case something goes wrong.
        $state.go('user.show.habit', { id: habit.id });
      });

    }
    //////////////////////////////////////////







  });
