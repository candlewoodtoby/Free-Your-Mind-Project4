myFymApp.controller('TestCommitmentCtrl',['$scope','$http',function($scope,$http){
  console.log('TestCommitmentCtrl.js working!');

$http.get('http://localhost:3000/api/commitment')
     .success(function(commitments){
      $scope.commitments=commitments;
      console.log(commitments);
     })

//TEST
// $scope.users = ['john','mary','joe'];

}])