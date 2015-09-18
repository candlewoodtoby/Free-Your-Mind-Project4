myFymApp.controller('loginCtrl',['$scope','$http', '$rootScope','$location',function($scope,$http,$rootScope,$location){
  console.log('loginCtrl.js working!');


      $scope.email = '';
      $scope.password = '';

      $scope.submit = function(){
        // console.log('You are in loginCtrl');

        // $http.post('/api/user/login',{email:$scope.email,password:$scope.password})
        // .success(function(user){
        //   console.log(user)
        // })

        // data: {commitments: $scope.commitmentArray}

        $http({
          method: 'POST',
          url: '/api/user/login',
          data: {email:$scope.email,password:$scope.password}
        }).then(function(user){
          console.log(user.data.user);
          $rootScope.currentUser=user.data.user;
          console.log('$rootScope:',$rootScope.currentUser)
          // ('/main', {user:user.data.user})
          $location.path('/main');

        })
      }


//TEST
// $scope.users = ['john','mary','joe'];

}])