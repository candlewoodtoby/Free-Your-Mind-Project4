myFymApp.controller('SignupCtrl',['$scope','$http', '$rootScope','$location',function($scope,$http,$rootScope,$location){
  console.log('SignupCtrl.js working!');


      $scope.email = '';
      $scope.password = '';
      $scope.username = '';

      $scope.submit = function(){
        // console.log('You are in loginCtrl');



        $http({
          method: 'POST',
          url: '/api/user',
          data: {username:$scope.username,email:$scope.email,password:$scope.password}
        }).then(function(user){
          console.log(user.data.user);
          $rootScope.currentUser=user.data.user;
          console.log('$rootScope:',$rootScope.currentUser)
          // ('/main', {user:user.data.user})
          $location.path('/main');

        })
      }




}])