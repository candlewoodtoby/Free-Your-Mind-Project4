var myFymApp = angular.module('FymApp',['ui.bootstrap','ngRoute']);

myFymApp.run(function(){
  console.log('The app has started!! Time to start writing some angular!!');
})

myFymApp.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

  $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider
  .when('/',{
    templateUrl:'views/home.html',
    controller:'HomeCtrl'
  })
  .when('/test/userAllShow',{
    templateUrl:'/views/testUserShow.html',
    controller:'TestUserCtrl'
  })
  .when('/test/commitmentAllShow',{
    templateUrl:'/views/testCommitmentShow.html',
    controller:'TestCommitmentCtrl'
  })
  .when('/login',{
    templateUrl:'/views/login.html',
    controller:'loginCtrl'
  })
  .when('/main',{
    templateUrl:'views/main.html',
    controller:'MainCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  });



}])