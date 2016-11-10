angular
  .module('app')
  .config(function ($stateProvider) {
    var baseUrl = 'http://localhost:3000'
    $stateProvider

    .state('user.show', {
      abstract: true,
      url: '/show',
      template: '<ui-view></ui-view>'
    })

    .state('user.show.habit', {
      url: '/habit/:id',
      templateUrl: 'js/app/views/habits/show.html',
      controller: 'ShowHabitController',
      resolve: {
        habitData: function($http, $stateParams, habitFactory){
          return habitFactory.getHabit($stateParams.id);
          // return $http({
          //   method: 'GET',
          //   url: baseUrl + '/habits/' + $stateParams.id
          // });
        }
      }
    })

    .state('user.show.experiment', {
      url: '/experiment/:id',
      templateUrl: 'js/app/views/experiments/show.html',
      controller: 'ShowExperimentController',
      resolve: {
        experimentData: function($http, $stateParams){
          return $http({
            method: 'GET',
            url: baseUrl + '/experiments/' + $stateParams.id
          });
        },
        activity: function($http, experimentData){
          //note error here if no activity. Can't find URL activies/null
          if (experimentData.data.experiment.habit.activity_id != null) {
            return $http({
              method: 'GET',
              url: baseUrl + '/activities/' + experiment.data.experiment.habit.activity_id
            })
          }
        }
      }
    });

  });
