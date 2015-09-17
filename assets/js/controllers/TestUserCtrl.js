myFymApp.controller('TestUserCtrl',['$scope','$http',function($scope,$http){
  console.log('TestUserCtrl.js working!');

$http.get('http://localhost:3000/api/user')
     .success(function(users){
      $scope.users=users;
      console.log(users);
     })

//TEST
// $scope.users = ['john','mary','joe'];

}])