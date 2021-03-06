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
  .when('/main',{
    templateUrl:'views/main.html',
    controller:'MainCtrl'
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
  .when('/show',{
    templateUrl:'/views/show.html',
    controller:'ShowCtrl'
  })
  .when('/signup',{
    templateUrl:'/views/signup.html',
    controller:'SignupCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  });



}])